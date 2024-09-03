const {DataTypes} = require('sequelize');
const db = require('../db/conn');

const Post = db.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports=Post

