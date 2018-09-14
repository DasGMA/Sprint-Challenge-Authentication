const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

const { authenticate, generateToken } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 14);
  newUser.password = hash;

  db('users')
  .insert(newUser)
  .then(ids => {
    db('users')
      .where({ id: ids[0] })
      .first()
      .then(newUser => {
        const token = generateToken(newUser);
        res.status(201).json(token);
      });
  })
  .catch(error => {
    res.status(500).json(error);
  });
}

function login(req, res) {
  // implement user login
  const creds = req.body;

  db('users')
      .where({username: creds.username})
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(creds.password, user.password)) {
              const token = generateToken(user);
              res.status(200).json(token)
          } 
          else {
              return res.status(400).json({Message: 'Wrong credentials'})
          }
      })
      .catch(error => {
          res.status(500).json(error)
      })
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
