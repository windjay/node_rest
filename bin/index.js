const express = require('express');
const logger = require('morgan');
const app = express();
const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bek'},
    {id: 3, name: 'Chris'}
    ];


app.get('/', (req, res) => { res.send('Hello World');} );
app.get('/users', (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit  = parseInt(req.query.limit, 10);
    if( Number.isNaN(limit) )
        res.status(400).end();
    else res.json(users.slice(0,limit));
});
app.get('/users/:id', (req, res) => {
   // id값을 얻어낸다.
    const id = parseInt(req.params.id);

    if( Number.isNaN(id) )
        res.status(400).end();
    else {
        // users 배열 조회
        const user = users.filter(user => user.id === id)[0];

        // 응답
        if(!user) res.status(404).end();
        else res.json(user);
    }
});


// app.listen(3000, () => console.log('running'));

module.exports=app;