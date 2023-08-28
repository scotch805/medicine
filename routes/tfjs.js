const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const UserModel   = require('../models/user');

// transfer #1
router.get('/', auth.CheckAuth, async function(req, res) {
    let id = req.session.passport.user['user'];
    result = await UserModel.GetUser(id);
    console.log(result.result[0][0].id);
    res.render('tfjs', {user_info: result.result[0][0]});

});


module.exports = router;