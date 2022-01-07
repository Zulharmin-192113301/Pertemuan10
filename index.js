var http = require ('http');
var express = require ('express');
var app = express()
var bodyParser = require ('body-parser')
var mysql = require ('mysql')


app.use(bodyParser.urlencoded({extende:false}));
app.use(bodyParser.json());

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

    app.post('/strukbelanja', (req,res) => {
        var namaproduk = req.body.namaproduk
        var qty = req.body.qty
        var hargaproduk = req.body.hargaproduk
        var query = "INSERT INTO Strukbelanja (namaproduk,qty,hargaproduk) VALUES ('" + namaproduk + "','" + qty + "','" + hargaproduk + "')"

        conn.query(query, (err,result) =>{
            if (err)
            res.json (err)
            else
            res.json(result)
        }) 
    })
        http.createServer(app)
        .listen(8000, () =>{
            console.log('server berjalan di port 8000')
        }); 
 

}) 