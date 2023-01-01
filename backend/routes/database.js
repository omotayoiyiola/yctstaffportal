import mysql from 'mysql'

const connection = mysql.createConnection({
  connectionLimit: 10,
  password: "1SkanYaba@",
  user: "omotayoiyiola_me",
  database: "omotayoiyiola_yctstaffportal",
  host: "162.214.0.180",
  port: "3306",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
  }
});

export default connection
