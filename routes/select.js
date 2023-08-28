const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const UserModel   = require('../models/user');

router.get('/', auth.CheckAuth, async function(req, res) {
    let id = req.session.passport.user['user'];
    result = await UserModel.GetUser(id);
    console.log(result.result[0][0]);
    res.render('select', {user_info: result.result[0][0]});
});


router.post('/', async (req, res, next) => {
    console.log(req.body);
    //const id = req.body.id;
    //const { id, email, age, sex, height, weight, sick1, sick2, sick3, sick4, sick5, allergy1, allergy2, allergy3, allergy4, allergy5, significant1, significant2, significant3, significant4, significant5 } = req.body
    try {
        const Updateresult = await UserModel.UpdateUser(req.body);
        console.log(req.body);
        console.log('Updateresult', Updateresult);
        

        return res.redirect('/');
      } catch (err) {
        console.log(err);
        return res.redirect('/select');
      }
});


module.exports = router;