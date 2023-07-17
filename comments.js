// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Create a route for GET /comments/:id/author

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const comments = [
    {
        id: 1,
        body: 'comment 1',
        authorId: 1
    },
    {
        id: 2,
        body: 'comment 2',
        authorId: 2
    },
    {
        id: 3,
        body: 'comment 3',
        authorId: 3
    }
];