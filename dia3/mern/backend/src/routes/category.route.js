const {Router} = require('express')
const router = Router()

const {verifyToken} = require('../middlewares/auth.handler')

const {create,getAll,getOne,updateOne,deleteOne} = require('../controllers/category.controller')

router.route('/')
.post(verifyToken,create)
.get(getAll)

router.route('/:id')
.get(verifyToken,getOne)
.put(verifyToken,updateOne)
.delete(verifyToken,deleteOne)

module.exports = router