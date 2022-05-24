'use strict';
var mysql = require('mysql');
require('dotenv').config();
console.log(process.env)

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

exports.index = (req, res) => {
   res.sendfile('public/delete.html');
};

exports.admin = (req, res) => {
  res.sendfile('public/adminlogin.html');
}; 

exports.data = (req, res) => {
 con.query("SELECT * FROM customers", function(err, result){
  if (err) throw err;
  result = JSON.stringify(result);
  res.send(result);
});  
};

exports.update = (req, res) => {
  var address = req.body.address;
  var name = req.body.name;
  var match = req.body.match;
  var mål = req.body.mål;
  var assist = req.body.assist;
    var sql = "INSERT INTO customers (name, position, goals, assits, games) VALUES ?";
    var values = [
    [name, address, match, mål, assist]
  ];
  con.query(sql, [values], function(err, result){
    if (err) throw err;
    console.log(req.body);
    console.log(result);
  });
  res.sendfile(__dirname + '/admin.html');
};

exports.del = (req, res) => {
  var id = req.body.id;
  var sql = "DELETE FROM customers WHERE id = ?";
  con.query(sql, id, function(err, result){
    if (err) throw err;
    console.log(req.body);
    console.log(result);
  });
  res.sendfile(__dirname + '/admin.html'); 
};

exports.change = (req, res) => {
  var id = req.body.upid;
  var name = req.body.upname;
  var address = req.body.Naddress;
  let sql = `UPDATE customers SET name = '${name}', position = '${address}', goals = '${req.body.ngoal}', assits = '${req.body.nass}', games = '${req.body.ngame}' WHERE id = ${id}`;
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log('Updated record with id ' + id);
    console.log(result);
    console.log(req.body);
  })
  res.sendfile(__dirname + '/admin.html');
};

exports.pstadmin = (req, res) => {
 if (req.body.pass === 'prutt' && req.body.usrnm === 'Zlatan')
{
  res.sendFile(__dirname + '/admin.html');
  console.log(req.body);
}
 else
 res.sendfile('public/adminlogin.html');
};