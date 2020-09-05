import mysql from 'mysql';

var connection  = mysql.createConnection({
  host            : 'localhost',
  user            : 'my_user',
  password        : 'my_password',
  database        : 'my_database'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

export default connection;