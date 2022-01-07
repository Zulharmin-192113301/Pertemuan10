var mysql = require ('mysql')

var conn = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'db_10_struk'
})

conn.connect((err) =>{
    if (err)
    console.log('Masalah di MySQL' + err);
    else
    console.log('Terhubung ke Database');

    conn.query('CREATE TABLE Strukbelanja (kodebarang INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, namaproduk VARCHAR(30) NOT NULL, qty VARCHAR(5) NOT NULL, hargaproduk VARCHAR(10), reg_time TIMESTAMP)', (err, result) => {
        if (err)
        console.error('Gagal membuat tabel' + err)
        else
        console.log('Berhasil membuat tabel')
    })


}) 