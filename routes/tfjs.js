const express     = require('express');
const router      = express.Router();


// transfer #1
router.get('/', async function(req, res) {
    let user_id = undefined;
    if(req.session.passport){
        user_id = req.session.passport.user['user'];
    }
    res.render('tfjs',{user_id:user_id});

});


module.exports = router;