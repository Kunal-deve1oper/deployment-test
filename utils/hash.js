const bcryptjs = require("bcryptjs");


const hashPass = (pass)=>{
    return bcryptjs.hash(pass,10);
}

const comparePass = (givenPass,storedPass)=>{
    return bcryptjs.compare(givenPass,storedPass);
}

module.exports = {hashPass,comparePass};