var mysql = require ('mysql')

var conn = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'db_pertemuan10'
})

conn.connect((err) =>{
    if (err)
    console.log('problem with mySQL' + err);
    else
    console.log('Connect with database');
}) 