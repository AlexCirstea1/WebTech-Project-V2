const express = require('express');
const sequelize = require('./database');
const Activity = require('./models/activity');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.post('/activity', (req, res) => {
    Activity.create(req.body).then(() => {
        res.send('Activity created');
    })
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});