"use strict";
let datafire = require('datafire');

module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.resolve();
    return result;
  },
});
