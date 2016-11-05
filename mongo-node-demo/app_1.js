var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/runoob";

var selectData = function(db, callback) {
	var collection = db.collection("col");

	var whereStr = {"name": "zouyifeng"};

}