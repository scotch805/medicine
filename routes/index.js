const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');

router.get('/', auth.CheckAuth, function(req, res) {
    let user_id = undefined;
    if (req.session.passport) {
        user_id = req.session.passport.user['user']; 
    } 
    console.log(user_id);
    console.log(auth.CheckAuth);
    res.render('index', {user_id:user_id});
});
// 사용자가 복용하는 약들을 표시
// 건강상의 주의사항 표시
// 현재 건강 상태는 항상 적을 수 있게 해야함

module.exports = router;