const express     = require('express');
const router      = express.Router();

router.get('/info', function(req, res) {
    let user_id = undefined;
    if (req.session.passport) {
        user_id = req.session.passport.user['user']; 
    }
    res.render('info', {user_id:user_id})
});


module.exports = router;