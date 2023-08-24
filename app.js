

const express = require('express');
const mainRouter    = require('./routes/index');
const newsRouter    = require('./routes/news');
const userRouter    = require('./routes/user');
const infoRouter    = require('./routes/info');
const app = express();


const passport          = require('passport');
const passportConfig    = require('./passport');
const session           = require('express-session');
const flash             = require('connect-flash');

passportConfig()

//세션 설정
app.use(
    session({
       resave: false,
       saveUninitialized: false,
       secret: "sessionsecretsessionsecret",
    }),
);
//passport 초기화
app.use(passport.initialize()); //req에 passport 설정 추가
app.use(passport.session());    //req.session에 passport 데이터 추가
app.use(flash());


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', mainRouter);
app.use('/news',newsRouter);
app.use('/user', userRouter);
app.use('/info', infoRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const PORT = 8081;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});