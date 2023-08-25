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
    res.render('info', {user_id:user_id,user_name:user_name, user_email: user_email, user_age:user_age, user_sex:user_sex,
    user_height: user_height, user_weight:user_weight,
    user_sick1:user_sick1,user_sick2:user_sick2,user_sick3:user_sick3,user_sick4:user_sick4,user_sick5:user_sick5,
    user_allergy1 : user_allergy1, user_allergy2 : user_allergy2, user_allergy3 : user_allergy3, user_allergy4 : user_allergy4, user_allergy5 : user_allergy5,
    user_significant1 : user_significant1, user_significant2:user_significant2, user_significant3:user_significant3,user_significant4:user_significant4, user_significant5:user_significant5})

    console.log(user_age);
    console.log(req.body.age);
});
// router.get('/', async (req, res, next) => {
//     console.log("!");
//     console.log(req.body);
//     //const id = req.body.id;
//     //const { id, email, age, sex, height, weight, sick1, sick2, sick3, sick4, sick5, allergy1, allergy2, allergy3, allergy4, allergy5, significant1, significant2, significant3, significant4, significant5 } = req.body
//     try {
//         var account = {user: '',name: '', email: '', age: '', sex: '', height:'', weight: '',sick1: '',sick2: '', sick3: '', sick4: '', sick5: '',allergy1: '',allergy2: '', allergy3: '', allergy4: '', allergy5: '', significant1: '',significant2: '', significant3: '', significant4: '', significant5: '' };
//         const result = await UserModel.GetUser(id);
//         account.user =  user[0].id;
//         account.name = user[0].name;
//         account.email = user[0].email;
//         account.sex = user[0].sex;
//         account.age = user[0].age;
//         account.height = user[0].height;
//         account.weight = user[0].weight;
//         account.sick1 = user[0].sick1;
//         account.sick2 = user[0].sick2;
//         account.sick3 = user[0].sick3;
//         account.sick4 = user[0].sick4;
//         account.sick5 = user[0].sick5;                           
//         account.allergy1 = user[0].allergy1;
//         account.allergy2 = user[0].allergy2;
//         account.allergy3 = user[0].allergy3;
//         account.allergy4 = user[0].allergy4;
//         account.allergy5 = user[0].allergy5;
//         account.significant1 = user[0].significant1;
//         account.significant2 = user[0].significant2;
//         account.significant3 = user[0].significant3;
//         account.significant4 = user[0].significant4;
//         account.significant5 = user[0].significant5;
//         return done(null, account);
//         } catch (err) {
//         console.log(err);
//         return res.redirect('/');
//     } 
// });

module.exports = router;