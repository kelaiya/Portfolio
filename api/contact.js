const router = require('express').Router()
const {Contact} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  Contact.create({
  	name: req.body.name,
  	email: req.body. email,
  	message: req.body.message
  })
  .then(contact => {
  	return res.status(200).json(contact)
  })
  .catch(next)
})