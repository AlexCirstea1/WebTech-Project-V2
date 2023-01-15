const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Activity extends Model {}

Activity.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      }
}, {
    sequelize,
    modelName: 'activity',
    timestamps: false
}
);

module.exports = Activity;