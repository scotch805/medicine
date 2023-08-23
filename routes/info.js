const express     = require('express');
const router      = express.Router();

router.get('/info', function(req, res) {
    let user_id = undefined;
    let user_name = undefined;
    let user_email = undefined;
    let user_age = undefined;
    let user_sex = undefined;
    let user_height = undefined;
    let user_weight = undefined;
    let user_sick = undefined;
    let user_allergy = undefined;
    let user_significant = undefined;
    if (req.session.passport) {
        user_id = req.session.passport.user['user'];
        user_name = req.session.passport.user['name'];
        user_email = req.session.passport.user['email'];
        user_age = req.session.passport.user['age']; 
        user_sex = req.session.passport.user['sex']; 
        user_height = req.session.passport.user['height']; 
        user_weight = req.session.passport.user['weight']; 
        user_sick = req.session.passport.user['sick']; 
        user_allergy = req.session.passport.user['allergy'];
        user_significant = req.session.passport.user['significant'];  
    } 
    res.render('info', {user_id:user_id, user_email: user_email, user_age:user_age, user_sex:user_sex,
    user_height: user_height, user_weight:user_weight,user_sick:user_sick,user_allergy:user_allergy
    , user_significant:user_significant})
});


module.exports = router;