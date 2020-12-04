const pool = require('../db') 

module.exports = {
    ping: (req, res) => {
        res.send("pong")
    },
    users: async (req, res) => {
        
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;      
        const getUser = await pool.query("SELECT * FROM users")

        res.json(getUser)

    }

}