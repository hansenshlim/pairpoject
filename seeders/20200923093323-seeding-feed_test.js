'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('feeds', [{
      UserId: 1,
      title: "User 1's post",
      content: "User 1's first seed post",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      UserId: 2,
      title: "User 2's post",
      content: "User 2's first seed post",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      UserId: 1,
      title: "User 1's post",
      content: "User 1's second seed post",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('feeds', null, {});
  }
};