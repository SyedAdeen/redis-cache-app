const express =  require('express');
const UserController = require('./controllers/userController');
const maxAgeUser = require('./middlewares/user_middleware');

const router = express.Router();

router.get('/get',UserController.getdata);

router.get('/getage',UserController.getage);

router.get('',maxAgeUser,UserController.getmaxAge);


module.exports=router;

