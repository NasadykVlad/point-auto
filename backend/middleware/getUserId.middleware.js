const jwt = require("jsonwebtoken");

const getByUserId = (token) => {
    const decoded = jwt.decode(token, 'dsadjdjs*7dsah&@djdsad=sa2001-sa-215')
    return decoded.id
}


module.exports = getByUserId
