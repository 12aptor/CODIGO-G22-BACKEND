const {Router} = require('express')
const router = Router()

const {create,getAll,getOne,updateOne} = require('../controllers/category.controller')

router.route('/')
.post(create)
.get(getAll)

router.route('/:id')
.get(getOne)
.put(updateOne)

module.exports = router