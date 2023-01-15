const express = require('express');
const sequelize = require('./database');
const Activity = require('./models/activity');
const Feedback = require('./models/feedback');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

app.get('/feedbacks/:code', async (req, res) => {
    const reqcode = req.params.code;
    const feedbacks = await Feedback.findAll({ where: { code: reqcode }});
    res.send(feedbacks);
});

app.post('/feedback', async (req, res) => {
    await Feedback.create(req.body);
    res.send('Feedback created');
});


app.get('/activities', async (req, res) => {
    const activities = await Activity.findAll();
    res.send(activities);  
});

app.post('/activity', async (req, res) => {
    await Activity.create(req.body);
    res.send('Activity created');
});

app.get('/activities/:code', async (req, res) => {
    const reqcode = req.params.code;
    await Activity.findOne({ where: { code: reqcode }}).then(activity => {
        res.send(activity);
    });
});

app.put('/activities/:code', async (req, res) => {
    const reqcode = req.params.code;
    const activity = await Activity.findOne({ where: { code: reqcode }});
    activity.name = req.body.name;
    await activity.save();
    res.send('Activity updated');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});