const pool = require("../config/db");
const userQueries = require("../queries/users");
const {hashPassword} =require("../utils/passwordHelper");

const createUser = async (first_name,last_name,dob,address,place,city,district,state,email,phone,password,username) => {
    const hashedPassword = await hashPassword(password);
    return new Promise((resolve, reject) => {
        pool.query(userQueries.addUser,[first_name,last_name,dob,address,place,city,district,state,email,phone,hashedPassword,username],
            (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const userid = results.rows ? results.rows[0].id : 0;
                    resolve(userid);
                }
            }
        );

    });
};

const getUserByUsername = (username) => {
   return new Promise((resolve,reject)=>{
    pool.query(userQueries.getUserByUsername,[username],(error, results) => {
            if (error) {
                reject(error);
            }
           else{
                resolve(results.rows);
           }
           
        })
    });
}

const getUserByUserId = (userid) => {
   return new Promise((resolve,reject)=>{
    pool.query(userQueries.getUserByUserId,[userid],(error, results) => {
            if (error) {
                reject(error);
            }
           else{
                resolve(results.rows);
           }
        })
    });
}

const getUserRolesByUserId = (userid) => {
   return new Promise((resolve,reject)=>{
    pool.query(userQueries.getUserRolesByUserId,[userid],(error, results) => {
            if (error) {
                reject(error);
            }
           else{
                resolve(results.rows);
           }
        })
    });
}


module.exports = {
    createUser,
    getUserByUsername,
    getUserByUserId,
    getUserRolesByUserId
};