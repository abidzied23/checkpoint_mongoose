let mongoose = require("mongoose");
const dbatlas = 'mongodb://127.0.0.1:27017/atlas';
class database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(dbatlas).then(() => {
            console.log("database connected")
        }).catch(err => {
            console.error('error')
        })
    }
}
module.exports = new database()
