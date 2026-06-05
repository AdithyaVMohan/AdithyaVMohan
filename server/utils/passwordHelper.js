var bcrypt=require('bcryptjs')
var salt=bcrypt.genSaltSync(10);
function hashPassword(password){
    var hash=bcrypt.hashSync(password,salt);
    return hash;
}

function compareWithHashedPassword(plainpassword, hashedPassword){
    var isMatching=bcrypt.compareSync(plainpassword,hashedPassword);
    return isMatching;
}
module.exports={
    hashPassword,
    compareWithHashedPassword
}