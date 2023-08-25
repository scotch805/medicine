const mysql =  require('mysql2/promise');

require("dotenv").config();

const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// function createTable() {
//     db.transaction(function(tr) {
//         //user라는 데이터 테이블이 없으면 user 테이블을 생성한다.
//         var createSQL = 
//         'create table if not exists user(id integer primary key autoincrement, id varchar(20), password varchar(255) NOT NULL, salt varchar(255) not null,        name varchar(255),        email varchar(255),        age varchar(255),        sex varchar(255),        height varchar(255),        weight varchar(255),        sick1 varchar(255),        sick2 varchar(255),        sick3 varchar(255),        sick4 varchar(255),        sick5 varchar(255),        allergy1 varchar(255),        allergy2 varchar(255),        allergy3 varchar(255),        allergy4 varchar(255),        allergy5 varchar(255),        significant1 varchar(255),        significant2 varchar(255),        significant3 varchar(255),        significant4 varchar(255),        significant5 varchar(255))';
        
//         tr.executeSql(createSQL, [], function() {

//             console.log('2_1_테이블생성_sql 실행 성공...');
//         }, function () {
//             console.log('2_1_테이블생성_sql 실행 실패...');
//         });

//     }, function () {
//         console.log('2_2_테이블 생성 트랜잭션 실패...롤백은 자동');
//     }, function () {
//         console.log('2_2_테이블 생성 트랜잭션 성공...');
//     });
// }


// 사용자 정보 업데이트
// function updateUser() {
//     db.transaction(function (tr) {
//        var new_email = $('#email').val();
//        var new_age = $('#age').val();
//        var new_sex = $('#sex').val();
//        var new_height = $('#height').val();
//        var new_weight = $('#weight').val();
//        var new_sick1 = $('#sick1').val();
//        var new_sick2 = $('#sick2').val();
//        var new_sick3 = $('#sick3').val();
//        var new_sick4 = $('#sick4').val();
//        var new_sick5 = $('#sick5').val();
//        var new_allergy1 = $('#allergy1').val();
//        var new_allergy2 = $('#allergy2').val();
//        var new_allergy3 = $('#allergy3').val();
//        var new_allergy4 = $('#allergy4').val();
//        var new_allergy5 = $('#allergy5').val();
//        var new_significant1 = $('#significant1').val();
//        var new_significant2 = $('#significant2').val();
//        var new_significant3 = $('#significant3').val();
//        var new_significant4 = $('#significant4').val();
//        var new_significant5 = $('#significant5').val();



//     //    var old_name = varCafeName;
//        var updateSQL = 'update user set email = ?, age = ?, sex = ?, height = ?, weight = ?, sick1 = ?, sick2 = ?, sick3 = ?, sick4 = ?, sick5 = ?, allergy1 = ?, allergy2 = ?, allergy3 = ?, allergy4 = ?, allergy5 = ?, significant1 = ?, significant2 = ?, significant3 =?, significant4 = ?, significant5 = ?, where id = ?'; //데이터 베이스 구문
//        tr.executeSql(updateSQL, [new_email, new_age, new_sex, new_height, new_weight, new_sick1, new_sick2, new_sick3,new_sick4, new_sick5, new_allergy1 , new_allergy2 , new_allergy3, new_allergy4, new_allergy5, new_significant1, new_significant2, new_significant3, new_significant4, new_significant5 ,old_name], function (tr, rs) {
//         console.log('사용자 정보 수정');
//         alert('사용자 ' + $('#name') + ' 님의 정보가 수정되었습니다');
//        });
//     });
//  }

module.exports = db