const ObjectId = require('mongoose').Types.ObjectId; // UWU explicar Andrea

function isIdValid (req, res, next) {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(404);
    return res.render('not-found');
  }
  next();
}

module.exports = isIdValid;
