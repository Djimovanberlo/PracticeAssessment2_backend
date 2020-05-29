"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Testy story",
          content: "Once upon a time...",
          imageUrl: "imgBOAY",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Estrogen VS Testosterone",
          content: "Twice upon a time...",
          imageUrl: "imgNEUTRAL",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dumb, dumb and the stupid asshole",
          content: "Thrice upon a time...",
          imageUrl: "imgDUMB",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dumb Tower",
          content: "...Fice upon a time...",
          imageUrl: "imgTOWER",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
