var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
    database: 'restaurant_db'
});
 
connection.connect();
 
connection.query('SELECT * FROM restaurant_tables', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  console.log(fields)
});

connection.end();