const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'romit-database.cjiwieckkghb.ap-northeast-2.rds.amazonaws.com', // MySQL 서버 호스트
  port: 3306,
  user: 'root',
  password: 'kl8690245',
  database: 'study'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL 데이터베이스에 연결되었습니다.');
  }
});
