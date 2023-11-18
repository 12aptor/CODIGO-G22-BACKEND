const {Router} = require('express')
const router = Router()

const {create,auth,getOne} = require('../controllers/user.controller')

router.route('/')
.post(create)

router.route('/login')
.post(auth)

router.route('/:id')
.get(getOne)

module.exports = router