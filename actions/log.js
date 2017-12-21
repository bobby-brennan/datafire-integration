"use strict";
let datafire = require('datafire');

module.exports = new datafire.Action({
  handler: async (input, context) => {
    console.log(input);
    return input;
  },
});
