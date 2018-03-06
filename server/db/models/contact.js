const Sequelize = require('sequelize')
const db = require('../db')

// Data model will contain information about the appoinments of patients.
const Contact = db.define('contact', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.TEXT
  }
})

module.exports = Contact