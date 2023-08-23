const express     = require('express');
const router      = express.Router();

const axios       = require('axios');
const cheerio     = require('cheerio');


router.get('/', async function(req, res) {
    let user_id = undefined;
    let user_email = undefined;
    let user_age = undefined;
    let user_sex = undefined;
    let user_height = undefined;
    let user_weight = undefined;
    let user_sick = undefined;
    let user_allergy = undefined;
    let user_significant = undefined;
    if (req.session.passport) {
        userinfo = req.session.passport.user
        user_id = req.session.passport.user['user'];
        user_email = req.session.passport.user['email'];
        user_age = req.session.passport.user['age']; 
        user_sex = req.session.passport.user['sex']; 
        user_height = req.session.passport.user['height']; 
        user_weight = req.session.passport.user['weight']; 
        user_sick = req.session.passport.user['sick']; 
        user_allergy = req.session.passport.user['allergy'];
        user_significant = req.session.passport.user['significant'];  
    } 
    url = "https://news.naver.com/main/ranking/popularDay.naver";
    
    
    try {
        var context = new Array();
        const result = await axios.get(url, {responseType: 'arraybuffer', responseEncoding: 'binary'});
        //const html = result.data;
        const decoder = new TextDecoder('euc-kr');
        const html = decoder.decode(result.data);
        const $ = cheerio.load(html);
        const newsList = $('.rankingnews_list > li');
        newsList.each(function(index, news) {
            let title = $(news).find('div > a').text();
            let link = $(news).find('div > a').attr('href');
            context.push({title: title, link: link});
        });
        console.log(user_allergy);
        res.render('news', {user_id: user_id, context: context});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;