var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    insertOne: function (tableInput, name, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false)";

        connection.query(queryString, [tableInput, name], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    updateOne: function (tableInput, devoured, id, cb) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

        connection.query(queryString, [tableInput, devoured, id], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
