
const unreliabilities = {
    "five_03": (req, res, next) => {
        res.status(503)
        res.send()
    },
    "five_21": (req, res, next) => {
        res.status(521)
        res.send()
    },
    "slow": (req, res, next) => {
        setTimeout(next, 1500 + Math.random(100) * 5000 << 0)
    }
}

var pickAnyFrom = us => {
    var keys = Object.keys(us);
    var key = keys[keys.length * Math.random() << 0];
    return [key, us[key]];
};

var beUnreliable = pct => (req, res, next) => {
    if(Math.random() <= pct) {
        [key, fn] = pickAnyFrom(unreliabilities)
        res.set("unreliable", key);
        fn(req, res, next);
    } else {
        next()
    }
};

module.exports = {
    sometimes: beUnreliable
}