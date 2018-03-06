const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Contact = db.define('contact', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING
  }
  
})

module.exports = Contact
