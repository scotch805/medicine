const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const UserModel   = require('../models/user')

router.get('/', auth.CheckAuth, async function(req, res) {
  let id = req.session.passport.user['user'];
  result = await UserModel.GetUser(id);
  console.log(result.result[0][0].id);
  res.render('info', {user_info: result.result[0][0]});

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
        console.log(result.result[0]);
        res.render('info', {data: result.result[0]});
        console.log("!")
    } 
    else {
      res.render('info', {data: data});
      console.log("?")
    }
    */
      /*
      res.render('info', {user_id:user_id,user_name:user_name, user_email: user_email, user_age:user_age, user_sex:user_sex,
        user_height: user_height, user_weight:user_weight,
        user_sick1:user_sick1,user_sick2:user_sick2,user_sick3:user_sick3,user_sick4:user_sick4,user_sick5:user_sick5,
        user_allergy1 : user_allergy1, user_allergy2 : user_allergy2, user_allergy3 : user_allergy3, user_allergy4 : user_allergy4, user_allergy5 : user_allergy5,
        user_significant1 : user_significant1, user_significant2:user_significant2, user_significant3:user_significant3,user_significant4:user_significant4, user_significant5:user_significant5})
    }
    */
    
    //console.log(result.result[0]);
    
    /*

    */

});


// router.post('/', async (req, res, next) => {
//     console.log("!");
//     console.log(req.body);
//     //const id = req.body.id;
//     //const { id, email, age, sex, height, weight, sick1, sick2, sick3, sick4, sick5, allergy1, allergy2, allergy3, allergy4, allergy5, significant1, significant2, significant3, significant4, significant5 } = req.body
//     try {
//         const result = await UserModel.GetUser(req.body);
//         console.log(req.body)
//         console.log('result', result);
//         return res.redirect('/info');
//       } catch (err) {
//         console.log(err);
//         return res.redirect('/modify');
//     }    
//   })
    /*
    try {
      const data = await db.query('update user set email = ?, age = ?, sex = ?, height = ?, weight = ?, sick1 = ?, sick2 = ?, sick3 = ?, sick4 = ?, sick5 = ?, allergy1 = ?, allergy2 = ?, allergy3 = ?, allergy4 = ?, allergy5 = ?, significant1 = ?, significant2 = ?, significant3 =?, significant4 = ?, significant5 = ? where id = ?',[email, age, sex, height, weight, sick1, sick2, sick3,sick4, sick5, allergy1 , allergy2 , allergy3, allergy4, allergy5, significant1, significant2, significant3, significant4, significant5, id]);
      return res.redirect('/info');
    } catch (err) {
      console.log(err);
      return res.redirect('/modify');
    }
    */
    
    

  
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