const {Router} = require('express')
const router = Router()

const {create,getAll,getOne} = require('../controllers/course.controller')

router.route('/')
.post(create)
.get(getAll)

router.route('/:id')
.get(getOne)

module.exports = router