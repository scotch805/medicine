const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const UserModel   = require('../models/user');

router.get('/', auth.CheckAuth, async function(req, res) {
    let id = req.session.passport.user['user'];
    result = await UserModel.GetUser(id);
    console.log(result.result[0][0].id);
    res.render('medi_info', {user_info: result.result[0][0]});

});
router.post('/', function(req, res) {
    let data = [];
    data = JSON.stringify(req.body);
    data = JSON.parse(data);
    console.log(data['data[]']);
    
    /*
    for (i=0; i<data.length; i++) {
        console.log(data[i]).name;
    }
    */
    
    res.send('hello');

});

module.exports = router;