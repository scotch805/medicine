const express     = require('express');
const router      = express.Router();

router.get('/', function(req, res) {
    let user_id = undefined;
    let user_name = undefined;
    let user_email = undefined;
    let user_age = undefined;
    let user_sex = undefined;
    let user_height = undefined;
    let user_weight = undefined;
    let user_sick1 = undefined;
    let user_allergy1 = undefined;
    let user_significant1 = undefined;
    let user_sick2 = undefined;
    let user_allergy2 = undefined;
    let user_significant2 = undefined;
    let user_sick3 = undefined;
    let user_allergy3 = undefined;
    let user_significant3 = undefined;
    let user_sick4 = undefined;
    let user_allergy4 = undefined;
    let user_significant4 = undefined;
    let user_sick5 = undefined;
    let user_allergy5 = undefined;
    let user_significant5 = undefined;

    if (req.session.passport) {
        user_id = req.session.passport.user['user'];
        user_name = req.session.passport.user['name'];
        user_email = req.session.passport.user['email'];
        user_age = req.session.passport.user['age']+"살"; 
        user_sex = req.session.passport.user['sex']; 
        user_height = req.session.passport.user['height']+"cm"; 
        user_weight = req.session.passport.user['weight']+"kg"; 
        user_sick1 = req.session.passport.user['sick1']; 
        user_allergy1 = req.session.passport.user['allergy1'];
        user_significant1 = req.session.passport.user['significant1'];
        user_sick2 = req.session.passport.user['sick2']; 
        user_allergy2 = req.session.passport.user['allergy2'];
        user_significant2 = req.session.passport.user['significant2'];
        user_sick3 = req.session.passport.user['sick3']; 
        user_allergy3 = req.session.passport.user['allergy3'];
        user_significant3 = req.session.passport.user['significant3'];
        user_sick4 = req.session.passport.user['sick4']; 
        user_allergy4 = req.session.passport.user['allergy4'];
        user_significant4 = req.session.passport.user['significant4']; 
        user_sick5 = req.session.passport.user['sick5']; 
        user_allergy5 = req.session.passport.user['allergy5'];
        user_significant5 = req.session.passport.user['significant5'];  
    } 
    res.render('info', {user_id:user_id,user_name:user_name, user_email: user_email, user_age:user_age, user_sex:user_sex,
    user_height: user_height, user_weight:user_weight,
    user_sick1:user_sick1,user_sick2:user_sick2,user_sick3:user_sick3,user_sick4:user_sick4,user_sick5:user_sick5,
    user_allergy1 : user_allergy1, user_allergy2 : user_allergy2, user_allergy3 : user_allergy3, user_allergy4 : user_allergy4, user_allergy5 : user_allergy5,
    user_significant1 : user_significant1, user_significant2:user_significant2, user_significant3:user_significant3,user_significant4:user_significant4, user_significant5:user_significant5})
});


module.exports = router;