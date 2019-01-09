var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    create: function (burgerName, cb) {
        orm.insertOne("burgers", burgerName, function (res) {
            cb(res);
        });
    },

    update: function (id, devoured, cb) {
        orm.updateOne("burgers", devoured, id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
