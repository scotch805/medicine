const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');
const user = require('../models/user');



router.get('/signup', async function(req, res) { 
    /*
    data = {
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
  /*
       if (req.session.passport) {
       
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
           
           result = await UserModel.GetUser(user_id)
           res.render('info', {data: result.result[0]});
       } 
       else {
         res.render('signup', {data: data});
       }
    */
    //res.render('signup', {data: data});
    res.render('signup');
});

router.get('/signin', async function(req, res) {
    data = {
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

       if (req.session.passport) {
       
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
           
           result = await UserModel.GetUser(user_id)
           res.render('signin', {data: result.result[0]});
       } 
       else {
         res.render('signin', {data: data});
       }
    
});


router.get('/signout', function(req, res, next) {
	req.logout(function(error) {
        if (error) {
            return next(error);
        }
        res.redirect('/');
    });
});


router.post('/signin', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/user/signin'
}));

//회원정보 수정화면
exports.redirect


router.post('/signup', async function(req, res) {
	const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const sex = req.body.sex;
    const height = req.body.height;
    const weight = req.body.weight;
    const sick1 = req.body.sick1;
    const sick2 = req.body.sick2;
    const sick3 = req.body.sick3;
    const sick4 = req.body.sick4;
    const sick5 = req.body.sick5;
    const allergy1 = req.body.allergy1;
    const allergy2 = req.body.allergy2;
    const allergy3 = req.body.allergy3;
    const allergy4 = req.body.allergy4;
    const allergy5 = req.body.allergy5;
    const significant1 = req.body.significant1;
    const significant2 = req.body.significant2;
    const significant3 = req.body.significant3;
    const significant4 = req.body.significant4;
    const significant5 = req.body.significant5;
    console.log(id, password, name, email, age, sex, height, weight, sick1, allergy1, significant1);

    hasher( {password: password } , async function(error, pass, salt, hash) {
        var user = {
            id: id,
            password: hash,
            salt: salt,
            name: name,
            email: email,
            age: age,
            sex: sex,
            height: height,
            weight: weight,
            sick1: sick1,
            sick2: sick2,
            sick3: sick3,
            sick4: sick4,
            sick5: sick5,
            allergy1: allergy1,
            allergy2: allergy2,
            allergy3: allergy3,
            allergy4: allergy4,
            allergy5: allergy5,
            significant1: significant1,
            significant2: significant2,
            significant3: significant3,
            significant4: significant4,
            significant5: significant5
        };
        const result = await UserModel.AddUser(user);
        if (result.error) {
            console.log(result.error);
            res.redirect('/user/signup');
        }
        else {
            console.log('USER CREATED');
            res.redirect('/user/signin');
        }
    }); //hasher
});


module.exports = router;