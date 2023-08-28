const express     = require('express');
const router      = express.Router();

router.get('/', function(req, res) {
    let user_id = undefined;
    if(req.session.passport){
        user_id = req.session.passport.user['user'];
    }
    res.render('medi_info',{user_id:user_id});

});
router.post('/', function(req, res) {
    let data = [];
    data = JSON.stringify(req.body);
    data = JSON.parse(data);
    console.log(data['data[]']);
    
    /*
    for (i=0; i<data.length; i++) {
        console.log(data[i]).name;
    }
    */
    
    res.send('hello');

});

module.exports = router;