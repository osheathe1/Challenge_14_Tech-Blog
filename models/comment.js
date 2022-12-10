const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
    {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;