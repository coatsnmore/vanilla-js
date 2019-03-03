const express = require('express');
const app = express();
const cors = require('cors');
const books = require('./books');
const authors = require('./authors');
const slowBooks = require('./slow.books');

const port = 4000;
app.use(cors());
app.get('/books', (req, res) => setTimeout(() => res.send(books), 1000));
app.get('/slow-books', (req, res) => setTimeout(() => res.send(slowBooks), 5000));
app.get('/authors', (req, res) => setTimeout(() => res.send(authors), 2000));
app.listen(port, () => console.log(`Example listening on port: ${port}!`));