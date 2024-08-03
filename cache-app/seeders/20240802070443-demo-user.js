'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
    name: "Alex",
    age: 26,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Benjamin",
    age: 31,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Kayla",
    age: 27,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Liam",
    age: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Madison",
    age: 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Natalie",
    age: 32,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Oliver",
    age: 36,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Penelope",
    age: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
