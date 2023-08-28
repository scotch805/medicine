const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const UserModel   = require('../models/user');
const { userInfo } = require('os');

router.get('/', auth.CheckAuth, async function(req, res) {
    let id = req.session.passport.user['user'];
    result = await UserModel.GetUser(id);
    console.log(result.result[0][0].id);
    console.log(result.result[0][0])
    res.render('index', {user_info: result.result[0][0]});

});
// 사용자가 복용하는 약들을 표시
// 건강상의 주의사항 표시
// 현재 건강 상태는 항상 적을 수 있게 해야함


    

module.exports = router;