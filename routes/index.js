const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const UserModel   = require('../models/user');
const { userInfo } = require('os');

router.get('/', auth.CheckAuth, async function(req, res) {
    let id = req.session.passport.user['user'];
    result = await UserModel.GetUser(id);
    console.log(result.result[0][0].id);
    res.render('index', {user_info: result.result[0][0]});

    /* jgp
    data = {
        user_info: undefined,
        user_id: undefined,
        user_name: undefined,
        user_email: undefined,
        user_age: undefined,
        user_sex: undefined,
        user_height : undefined,
        user_weight : undefined,
        user_sick1 : undefined,
        user_allergy1 : undefined,
        user_significant1 : undefined,
        user_sick2 : undefined,
        user_allergy2 : undefined,
        user_significant2 : undefined,
        user_sick3 : undefined,
        user_allergy3 : undefined,
        user_significant3 : undefined,
        user_sick4 : undefined,
        user_allergy4 : undefined,
        user_significant4 : undefined,
        user_sick5 : undefined,
        user_allergy5 : undefined,
        user_significant5 : undefined
     }
     */ 
     /* 
        user_id : undefined,
        user_name : undefined,
        user_email : undefined,
        user_age : undefined,
        user_sex : undefined,
        user_height : undefined,
        user_weight : undefined,
        user_sick1 : undefined,
        user_allergy1 : undefined,
        user_significant1 : undefined,
        user_sick2 : undefined,
        user_allergy2 : undefined,
        user_significant2 : undefined,
        user_sick3 : undefined,
        user_allergy3 : undefined,
        user_significant3 : undefined,
        user_sick4 : undefined,
        user_allergy4 : undefined,
        user_significant4 : undefined,
        user_sick5 : undefined,
        user_allergy5 : undefined,
        user_significant5 : undefined,
   */
     /* jgp
    if (req.session.passport) {
        user_info = req.session.passport.user;
        user_id = req.session.passport.user['user'];
        user_name = req.session.passport.user['name'];
        user_email = req.session.passport.user['email'];
        user_age = req.session.passport.user['age']; 
        user_sex = req.session.passport.user['sex']; 
        user_height = req.session.passport.user['height']; 
        user_weight = req.session.passport.user['weight']; 
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
        
        result = await UserModel.GetUser(user_id);
        res.render('index', {data: result.result[0]});
        console.log(user_info)
        console.log(user_id)
       } 
       else {
         res.render('index', {data: data});
         console.log(data.user_id);
       }
    */
});
// 사용자가 복용하는 약들을 표시
// 건강상의 주의사항 표시
// 현재 건강 상태는 항상 적을 수 있게 해야함

    

module.exports = router;