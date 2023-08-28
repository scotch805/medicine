const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;

const bkfd2Password     = require("pbkdf2-password");
const hasher            = bkfd2Password();

const UserModel         = require('./models/user');
const modify            = require('./routes/modify')


module.exports = function () {
    //로그인 시 사용됨
    passport.serializeUser(function(account, done) {
        //session에 저장할 정보
        done(null, account);
    });
    passport.deserializeUser(function(account, done) {
        done(null, account);
    });
    passport.use('local-login', new LocalStrategy({
        usernameField: 'id',        //로그인 시 req.body.id 로 넘어온 값
        passwordField: 'password',  //로그인 시 req.body.password 로 넘어온 값
        session: true,
        passReqToCallback: true
        }, async function(req, id, password, done) {
            try {
                //만약 로그인을 한 경우
                    // 그대로 진행
                //아니면 modify에서 넘어오면
                    //업데이트된 데이터를 sql에서 받아오기
            

                var account = {user: '',name: '', email: '', age: '', sex: '', height:'', weight: '',sick1: '',sick2: '', sick3: '', sick4: '', sick5: '',allergy1: '',allergy2: '', allergy3: '', allergy4: '', allergy5: '', significant1: '',significant2: '', significant3: '', significant4: '', significant5: '', drug1: '', drug2: '',drug3: '', drug4:'', drug5:'', drug6:'', drug7:'',drug8:'',drug9:'',drug10:'' };
                const result = await UserModel.GetUser(id);


                
                if (result.error) {
                    console.log(result.error);
                    return done(false, null);
                }
                if (result.result[0].length === 0) {
                    return done(false, null, {message: '아이디 또는 패스워드가 일치하지 않습니다.'});
                } 
                else {
                    const user = result.result[0];
                    hasher( {password: password, salt: user[0].salt} , function(err, pass, salt, hash) {
                        console.log(password, salt, hash)
                        if (hash != user[0].password) {
                            console.log('불일치')
                            return done(false, null, {message: '아이디 또는 패스워드가 일치하지 않습니다.'});
                        } 
                        else {
                            account.user = user[0].id;
                            account.name = user[0].name;
                            account.email = user[0].email;
                            account.sex = user[0].sex;
                            account.age = user[0].age;
                            account.height = user[0].height;
                            account.weight = user[0].weight;
                            account.sick1 = user[0].sick1;
                            account.sick2 = user[0].sick2;
                            account.sick3 = user[0].sick3;
                            account.sick4 = user[0].sick4;
                            account.sick5 = user[0].sick5;                           
                            account.allergy1 = user[0].allergy1;
                            account.allergy2 = user[0].allergy2;
                            account.allergy3 = user[0].allergy3;
                            account.allergy4 = user[0].allergy4;
                            account.allergy5 = user[0].allergy5;
                            account.significant1 = user[0].significant1;
                            account.significant2 = user[0].significant2;
                            account.significant3 = user[0].significant3;
                            account.significant4 = user[0].significant4;
                            account.significant5 = user[0].significant5;
                            account.drug1 = user[0].drug1;
                            account.drug2 = user[0].drug2;
                            account.drug3 = user[0].drug3;
                            account.drug4 = user[0].drug4;
                            account.drug5 = user[0].drug5;
                            account.drug6 = user[0].drug6;
                            account.drug7 = user[0].drug7;
                            account.drug8 = user[0].drug8;
                            account.drug9 = user[0].drug9;
                            account.drug10 = user[0].drug10;













                            return done(null, account);
                        }
                    }); //hasher
                }


            } catch (error) {
                console.log(error);
                done(error);
            }
        }
    ));
};