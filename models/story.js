"use strict";
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define(
    "story",
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      homepageId: DataTypes.INTEGER,
    },
    {}
  );
  story.associate = function (models) {
    story.belongsTo(models.homepage);
  };
  return story;
};
