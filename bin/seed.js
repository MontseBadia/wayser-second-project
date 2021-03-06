'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');
const Service = require('../models/service');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const dbName = 'wayser';
mongoose.connect(`mongodb://localhost/${dbName}`);

User.collection.drop();// si lo haces correr dos veces borra lo de antes y te lo hhace correr una vez
Service.collection.drop();// da error si la coleccion no tiene nada pero funciona igual

const users = [
  {
    username: 'Montse',
    password: bcrypt.hashSync('montse', salt).toString(),
    email: 'montse@montse.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Jose',
    password: bcrypt.hashSync('jose', salt).toString(),
    email: 'jose@jose.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Javi',
    password: bcrypt.hashSync('javi', salt).toString(),
    email: 'javi@javi.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Andrea',
    password: bcrypt.hashSync('andrea', salt).toString(),
    email: 'andrea@andrea.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Will',
    password: bcrypt.hashSync('will', salt).toString(),
    email: 'will@will.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Julio',
    password: bcrypt.hashSync('julio', salt).toString(),
    email: 'julio@julio.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Daniela',
    password: bcrypt.hashSync('daniela', salt).toString(),
    email: 'daniela@daniela.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Gabriel',
    password: bcrypt.hashSync('gabriel', salt).toString(),
    email: 'gabriel@gabriel.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Khalil',
    password: bcrypt.hashSync('khalil', salt).toString(),
    email: 'khalil@khalil.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Sebastian',
    password: bcrypt.hashSync('sebastian', salt).toString(),
    email: 'sebastian@sebastian.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  },
  {
    username: 'Julien',
    password: bcrypt.hashSync('julien', salt).toString(),
    email: 'julien@julien.com',
    location: {
      type: 'Point',
      coordinates: [41.3818, 2.1685]
    }
  }
];

User.create(users)
// UWU el domingo montsita explica esta vaina
  .then((users) => {
    const usersIds = [];
    users.forEach(function (item) {
      usersIds.push(item._id);
    });

    console.log(`Created ${users.length} users`);

    const services = [
      {
        name: 'French Teacher',
        category: 'Education',
        provider: usersIds[0],
        price: {
          amount: 15,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Web developer',
        category: 'Technology',
        provider: usersIds[1],
        price: {
          amount: 60,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Nurse',
        category: 'Social Services',
        provider: usersIds[2],
        price: {
          amount: 50,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Private driver',
        category: 'Transportation',
        provider: usersIds[3],
        price: {
          amount: 25,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Babysitter',
        category: 'Social Services',
        provider: usersIds[4],
        price: {
          amount: 50,
          unit: 'day'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'High school Janitor',
        category: 'Maintenance',
        provider: usersIds[5],
        price: {
          amount: 23,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Consultant',
        category: 'Business',
        provider: usersIds[6],
        price: {
          amount: 50,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Local Guide',
        category: 'Tourism',
        provider: usersIds[7],
        price: {
          amount: 190,
          unit: 'week'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Donald Trump Impersonator',
        category: 'Others',
        provider: usersIds[7],
        price: {
          amount: 20,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Tennis Trainer',
        category: 'Education',
        provider: usersIds[0],
        price: {
          amount: 350,
          unit: 'lesson'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Dog Walker',
        category: 'Others',
        provider: usersIds[8],
        price: {
          amount: 800,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Plumber',
        category: 'Maintenance',
        provider: usersIds[9],
        price: {
          amount: 15,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Electrician',
        category: 'Maintenance',
        provider: usersIds[10],
        price: {
          amount: 20,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Plumber',
        category: 'Maintenance',
        provider: usersIds[5],
        price: {
          amount: 20,
          unit: 'hour'
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ];

    return Service.create(services)
      .then((services) => {
        console.log(`Created ${services.length} services`);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    throw (err);
  });
