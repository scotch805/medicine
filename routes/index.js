const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');

router.get('/', auth.CheckAuth, function(req, res) {
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
        userinfo = req.session.passport.user
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
    console.log(userinfo);
    console.log(user_allergy);
    console.log(auth.CheckAuth);
    res.render('index', {user_id:user_id, user_name:user_name});
});
// 사용자가 복용하는 약들을 표시
// 건강상의 주의사항 표시
// 현재 건강 상태는 항상 적을 수 있게 해야함

module.exports = router;