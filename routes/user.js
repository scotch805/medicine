const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');



router.get('/signup', async function(req, res) { 
    let user_id = undefined;
    if (req.session.passport) {
        user_id = req.session.passport.user['user'];
    }
	res.render('signup', {user_id : user_id
    
    });
});

router.get('/signin', async function(req, res) {
    let user_id = undefined;
    if (req.session.passport) {
        user_id = req.session.passport.user['user'];
    }
	res.render('signin', {user_id: user_id
        //status: result.success ? 'logined' : 'logouted',
    });
    
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

router.post('/signup', async function(req, res) {
	const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const sex = req.body.sex;
    const height = req.body.height;
    const weight = req.body.weight;
    const sick = req.body.sick;
    const allergy = req.body.allergy;
    const significant = req.body.significant;
    console.log(id, password, name, email, age, sex, height, weight, sick, allergy, significant);

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
            sick: sick,
            allergy: allergy,
            significant: significant
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