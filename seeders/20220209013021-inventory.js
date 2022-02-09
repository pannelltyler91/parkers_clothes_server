'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('inventories', [
      {name:"Bucket Hat", priceInCents:700, createdAt:new Date(), updatedAt:new Date()},
      {name:"Sombrero", priceInCents:1500, createdAt:new Date(), updatedAt:new Date()},
      {name:"Head Scarf", priceInCents:800, createdAt:new Date(), updatedAt:new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('inventories', null, {});
  }
};
