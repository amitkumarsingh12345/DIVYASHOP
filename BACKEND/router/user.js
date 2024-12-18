const router = require('express').Router();
const {
    createUserAcount
} = require('../controller/user');

//-----------------------USER ROUTER---------------------------
console.log("Router");
router.post('/user/create', createUserAcount);

module.exports = router;