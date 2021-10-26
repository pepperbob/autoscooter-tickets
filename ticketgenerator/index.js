const jwt = require('jsonwebtoken');
const pass = (Math.random() + 1).toString(36).substring(5);

class DomainError extends Error {
    status = 400
}

function generate(cmd) {
    
    if (!cmd.autoscooter) {
        throw new DomainError("Invalid Request");
    }

    const ticket = jwt.sign({"autoscooter": cmd.autoscooter}, pass, { expiresIn: 30 })
    return {ticket}
}

function validate(cmd) {
    if(!cmd.ticket) {
        throw new DomainError("Invalid Request")
    }

    try {
        const payload = jwt.verify(cmd.ticket, pass)

        if(!payload.autoscooter) {
            throw new DomainError("Invalid Payload")
        }

        return {
            "valid": true,
            "autoscooter": payload.autoscooter 
        }
    } catch(error) {
        return { "valid": false }
    }
}


module.exports = {
    generate, validate
}