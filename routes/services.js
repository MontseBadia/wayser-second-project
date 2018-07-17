'use strict';

const express = require('express');
const router = express.Router();

const Service = require('../models/service');
const isIdValid = require('../middlewares/isIdValid');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // const backURL = req.session.backURL;
  // console.log(backURL);
  const filter = {};
  const predefinedCategories = ['education', 'technology', 'health-care', 'transportation', 'social-services', 'maintenance', 'business', 'tourism', 'others'];

  if (req.query.cat) {
    if (predefinedCategories.find(item => item === req.query.cat)) {
      var isCat = req.query.cat;
      const serviceCategory = req.query.cat;
      let correctServiceCategory = serviceCategory.charAt(0).toUpperCase() + serviceCategory.substr(1); // UWU SUPER GREAT CODE IN ONE FUKIN LINE!!
      // @todo
      if (correctServiceCategory.includes('-')) {
        correctServiceCategory = correctServiceCategory.replace(/-/, ' ');
        let array = correctServiceCategory.split(' ');
        let arrayUpperCased = array[1].charAt(0).toUpperCase() + array[1].substr(1);
        array[1] = arrayUpperCased;
        correctServiceCategory = array.join(' ');
      }
      filter.category = correctServiceCategory;
    } else {
      return (next());
    }
  }

  if (req.query.terms) {
    var isTerms = req.query.terms;
    filter.name = {
      $regex: new RegExp(req.query.terms),
      $options: 'i'
    };
  }

  const queryStatus = {
    isCat: isCat,
    isTerms: isTerms
  };

  Service.find(filter).populate('provider')
    .then((services) => {
      if (services.length === 0) {
        res.status(404);
        res.render('not-found');
        return next;
      }

      console.log(req.query);

      res.render('services-category', {services: services, queryStatus: queryStatus});
    })
    .catch(next);
});

// router.get('/montse', (req, res, next) => {
//   res.redirect(req.session.backURL || '/');
// });

router.get('/:serviceId', isIdValid, (req, res, next) => {
  if (!req.session.currentUser) {
    res.render('auth/signup');
    return;
  }

  const serviceId = req.params.serviceId;
  Service.findById(serviceId).populate('provider')
    .then((service) => {
      res.render('service-details', {service: service});
    })
    .catch(next);
});

module.exports = router;
