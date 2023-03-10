const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Feedback extends Model { }

Feedback.init ({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    emoticon: {
        type: DataTypes.ENUM('smiley', 'frowny', 'surprised', 'confused'),
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'feedback'
});


module.exports = Feedback;