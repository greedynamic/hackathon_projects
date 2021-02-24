const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({extended: false}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req,res) => res.render('pages/homepage'))
  .get('/users',(req, res) =>{
    let getUserQuery = `SELECT * FROM userstab`;
    pool.query(getUserQuery, (error,result)=>{
      if(error){
        res.end(error);
      };
      let results = {'rows': result.rows};
      res.render('pages/users',results);
    })
  })







  .listen(PORT, () => console.log(`Listening on ${ PORT }`))




/*
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/
