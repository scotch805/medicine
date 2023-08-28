const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');
const user = require('../models/user');
const passportConfig    = require('../passport');
const auth        = require('./auth');



router.get('/', auth.CheckAuth, async function(req, res) {
  let id = req.session.passport.user['user'];
  result = await UserModel.GetUser(id);
  console.log(result.result[0][0].id);
  res.render('modify', {user_info: result.result[0][0]});

});

abc();

function abc() {
  router.post('/', async (req, res, next) => {
      console.log("!"); 
      console.log(req.body);
      //const id = req.body.id;
      //const { id, email, age, sex, height, weight, sick1, sick2, sick3, sick4, sick5, allergy1, allergy2, allergy3, allergy4, allergy5, significant1, significant2, significant3, significant4, significant5 } = req.body
      try {
          const Updateresult = await UserModel.UpdateUser(req.body);
          console.log(req.body);
          console.log('Updateresult', Updateresult);
          

          return res.redirect('/info');
        } catch (err) {
          console.log(err);
          return res.redirect('/modify');
      }    

      
      

    })
}



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

