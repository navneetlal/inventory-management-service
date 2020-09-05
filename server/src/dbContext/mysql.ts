import mysql from 'mysql';

var pool  = mysql.createPool({
  host            : 'localhost',
  user            : 'my_user',
  password        : 'my_password',
  database        : 'my_database',
  insecureAuth : true

});

export default function mysqlQuery(queryText: string, values?: string[]) {
  return pool.query(queryText, values, function (error, results, fields) {
    if (error) throw error;
    return results[0].solution
  });
}