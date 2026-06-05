const {Pool}=require('pg');

const pool=new Pool({
    user:'productdb_user',
    password:'product',
    host:'localhost',
    port:5432,
    database:'productdb'
})
module.exports=pool;