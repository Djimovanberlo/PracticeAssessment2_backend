"use strict";
const User = require("../models").user;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "Tester's page",
          description: "Don't get testy...",
          backgroundColor: "#660000",
          color: "#FF6666",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dummy's page",
          description: "Dumb asshole",
          backgroundColor: "#006600",
          color: "#66FF66",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};
