const bcryptjs = require("bcryptjs")

let password = bcryptjs.hashSync("gord", 2)

exports.seed = function(knex) {
    
    return knex('donors').insert([
        {
            "donor-id":1,
            username:"gord",
            password:`${password}`,
            "business-name": "Donor Establishment",
            "business-phone": "123 456 789",
            "business-address": "1 Donor Way, Donorville"
        }
    ]);
     
};