const router = require('express').Router()
const {Contact} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  Contact.create(req.body.name)
  .then(contact => {
  	console.log("contact", contact)
  	return req.body.name
  })
  .catch(next)
})