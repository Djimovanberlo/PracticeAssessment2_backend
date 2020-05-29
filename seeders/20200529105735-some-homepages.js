"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "Tester's page",
          description: "Don't get testy...",
          backgroundColor: "#aaaaaa",
          color: "#111111",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dummy's page",
          description: "Dumb asshole",
          backgroundColor: "#bbbbbb",
          color: "#222222",
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
