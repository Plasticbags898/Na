const express = require('express');
const app = express();
const auth = require('basic-auth');

const login = (req, res, next) => {
  const user = auth(req);
  if (user && user.name === 'USERNAME' && user.pass === 'PASSWORD') {
    return next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm="Proxy Login"');
    return res.status(401).send('Authentication required.');
  }
};

app.use(login);
