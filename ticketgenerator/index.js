const jwt = require('jsonwebtoken');
const pass = (Math.random() + 1).toString(36).substring(5);

function generate(cmd) {
    const ticket = jwt.sign({...cmd}, pass, {
        expiresIn: 30
    })
    return {ticket}
}

function validate(cmd) {
    if(!cmd.ticket) {
        return {"status": "invalid request"}
    }
    
    return {"status": jwt.verify(cmd.ticket, pass) }
}


module.exports = {
    generate, validate
}