const express = require('express');
const sequelize = require('./database');
const Activity = require('./models/activity');

sequelize.sync({ force: true }).then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

app.post('/activity', async (req, res) => {
    await Activity.create(req.body);
    res.send('Activity created');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});