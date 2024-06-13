const mongoose = require("mongoose");
const { title } = require("process");
const { number } = require("zod");

const dbName = "keepNotes"
const MONGO_URI = `mongodb://sarfaraz01576:3KQPtlC1WKVqm8aX@ac-si9dluk-shard-00-00.e0cgrm7.mongodb.net:27017,ac-si9dluk-shard-00-01.e0cgrm7.mongodb.net:27017,ac-si9dluk-shard-00-02.e0cgrm7.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-12tgl7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=xype1`;

mongoose.connect(MONGO_URI)

const user = mongoose.model("user",{
    email: String,
    password: String,
    notes : [{title : String, text : String}],
    Inremind : [{id : Number, remindtime : Date}],
    trash : [{id : String, title : String, text : String, removetime:Date}]
});
module.exports = {
    user
}