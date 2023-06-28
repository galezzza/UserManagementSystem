const {Sequelize} = require('sequelize')
const SQLite = require('sqlite3')

const sequelize = new Sequelize('test-db', 'user', 'pass', {
    dialect: "sqlite",
    host: './deve.sqlite'
    // storage: "C:\\Users\\KimD\\DataGripProjects\\qom\\datagripSQLite1.sqlite",
    // dialectOptions: {
    //     // Your sqlite3 options here
    //     // for instance, this is how you can configure the database opening mode:
    //     mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
    // },
})

module.exports = sequelize