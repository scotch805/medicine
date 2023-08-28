
const express       = require('express');

const app = express();

const transfer1Router    = require('./routes/tfjs');

const passport          = require('passport');
const passportConfig    = require('./passport');
const session           = require('express-session');
const flash             = require('connect-flash');


// ===========================================//
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'your_host',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database'
  });
// ===========================================//

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

const mainRouter    = require('./routes/index');
const userRouter    = require('./routes/user');
const infoRouter    = require('./routes/info');
const modiRouter    = require('./routes/modify');
const mediRouter    = require('./routes/medi_info');
const selRouter     = require('./routes/select');
const { func } = require('@tensorflow/tfjs-data');

const tfjsRouter    = require('./routes/tfjs');
const medi_infoRouter    = require('./routes/medi_info');

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/info', infoRouter);
app.use('/modify', modiRouter);
app.use('/medi_info', mediRouter);
app.use('/tfjs', transfer1Router);
app.use('/medi_info', medi_infoRouter);
app.use('/select', selRouter);


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// ===========================================//
// 정적 파일 서빙 (이미지 경로를 public 폴더 안에서 찾음)
app.use(express.static('public'));


app.get('/results', (req, res) => {
  // 데이터베이스에서 결과를 가져와서 보여주는 로직
  const query = 'SELECT * FROM results'; // 적절한 쿼리를 작성해야 함
  db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

// GET 요청 처리
app.get('/get-image/:id', (req, res) => {
  const id = req.params.id; // 클라이언트가 요청한 ID
  const query = `SELECT * FROM medicine_information WHERE id = ?`;

  // 데이터베이스에서 해당 ID의 정보를 가져옴
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error occurred');
    }

    if (results.length === 0) {
      return res.status(404).send('Image not found');
    }

    const imageName = results[0].image_name; // 이미지 파일 이름
    const imageNumber = id.split('_')[0]; // 이미지 파일명에서 첫 번째 숫자

    // 이미지 파일을 스트림으로 읽어 클라이언트에 전송
    const imagePath = path.join(__dirname, 'public', 'image', imageNumber, imageName);
    const imageStream = fs.createReadStream(imagePath);
    imageStream.pipe(res);
  });
});
// ===========================================//


  
const PORT = 8081;
app.listen(PORT, function() {
    console.log('Server Start');
    console.log('Listening on port: ', PORT);
});