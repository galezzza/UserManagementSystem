const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database.js')

class User extends Model{}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    idDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: "false"
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: false
})

module.exports = User