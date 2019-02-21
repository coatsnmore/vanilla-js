const express = require('express');
const app = express();
const cors = require('cors');
const books = require('./books');
const authors = require('./authors');
const slowBooks = require('./slow.books');

const port = 4000;
app.use(cors());
app.get('/books', (req, res) => setTimeout(() => res.send(books), 2000));
app.get('/slow-books', (req, res) => setTimeout(() => res.send(books), 5000));
app.get('/authors', (req, res) => setTimeout(() => res.send(authors), 1000));
app.listen(port, () => console.log(`Example listening on port: ${port}!`));