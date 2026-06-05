const addUser = `INSERT INTO users(first_name,last_name,dob,address,place,city,district,state,email,phone,password,username) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING id;`;
const getUserByUsername="SELECT * FROM users WHERE username=$1"
const getUserByUserId ="SELECT id, first_name, last_name, username, password FROM users WHERE id=$1"
const getUserRolesByUserId="SELECT r.name from role r inner join userrole ur on ur.roleid=r.id where ur.userid=$1"

module.exports = {
    addUser,
    getUserByUsername,
    getUserByUserId,
    getUserRolesByUserId
};