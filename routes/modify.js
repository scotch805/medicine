const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');
const user = require('../models/user');
const db = require('../models/database')





router.get('/',function(req, res) {
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
        // userinfo = req.session.passport.user;
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
    } 
    res.render('modify', {user_id:user_id,user_name:user_name, user_email: user_email, user_age:user_age, user_sex:user_sex,
    user_height: user_height, user_weight:user_weight,
    user_sick1 :user_sick1, user_sick2:user_sick2, user_sick3:user_sick3, user_sick4 : user_sick4 ,user_sick5 : user_sick5,
    user_allergy1 : user_allergy1, user_allergy2 : user_allergy2, user_allergy3 : user_allergy3, user_allergy4 : user_allergy4, user_allergy5 : user_allergy5,
    user_significant1 : user_significant1, user_significant2:user_significant2, user_significant3:user_significant3,user_significant4:user_significant4, user_significant5:user_significant5})
    

});

router.post('/', async (req, res, next) => {
    console.log("!");
    console.log(req.body);
    //const id = req.body.id;
    //const { id, email, age, sex, height, weight, sick1, sick2, sick3, sick4, sick5, allergy1, allergy2, allergy3, allergy4, allergy5, significant1, significant2, significant3, significant4, significant5 } = req.body
    try {
        const result = await UserModel.UpdateUser(req.body);
        console.log('result', result);
        return res.redirect('/info');
      } catch (err) {
        console.log(err);
        return res.redirect('/modify');
    }    
    /*
    try {
      const data = await db.query('update user set email = ?, age = ?, sex = ?, height = ?, weight = ?, sick1 = ?, sick2 = ?, sick3 = ?, sick4 = ?, sick5 = ?, allergy1 = ?, allergy2 = ?, allergy3 = ?, allergy4 = ?, allergy5 = ?, significant1 = ?, significant2 = ?, significant3 =?, significant4 = ?, significant5 = ? where id = ?',[email, age, sex, height, weight, sick1, sick2, sick3,sick4, sick5, allergy1 , allergy2 , allergy3, allergy4, allergy5, significant1, significant2, significant3, significant4, significant5, id]);
      return res.redirect('/info');
    } catch (err) {
      console.log(err);
      return res.redirect('/modify');
    }
    */
    

  })




// 리소스 update를 위해 사용함
// router.post('/:id', function(req, res) {
//     const id = req.params.user_id;
//     let body = req.body;
    
//     models.user.update({
//         id: body.id,
//         password: body.hash,
//         salt: body.salt,
//         name: body.name,
//         email: body.email,
//         age: body.age,
//         sex: body.sex
//         height: body.height,
//         weight: body.height,
//         sick1: body.sick1,
//         sick2: body.sick2,
//         sick3: body.sick3,
//         sick4: body.sick4,
//         sick5: body.sick5,
//         allergy1: body.allergy1,
//         allergy2: body.allergy2,
//         allergy3: body.allergy3,
//         allergy4: body.allergy4,
//         allergy5: body.allergy5,
//         significant1: body.significant1,
//         significant2: body.significant2,
//         significant3: body.significant3,
//         significant4: body.significant4,
//         significant5: body.significant5


module.exports = router;

