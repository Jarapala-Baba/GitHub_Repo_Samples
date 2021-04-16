var mysql = require('mysql')
var connection = mysql.createPool({
    connectionLimit:10,
  host: 'localhost',
  user: 'babu',
  password: 'babu',
  database: 'babu',
  insecureAuth:true
})

// connection.connect();

connection.query('SELECT * FROM babu.details', (err, results)=>{
    console.log('pool instance created!');
    if(err)
    {
    //    return reject(new Error(`Whoops! ${err}`));
    console.log(new Error(`Whoops! ${err}`));
    }
    console.log(`result is ${result}`);
    // return resolve(results);
});

connection.end();
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
