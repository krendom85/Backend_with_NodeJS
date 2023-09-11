'use strict';

const {DataTypes} = require('sequelize')
const {CustomerSchema,CUSTOMER_TABLE} = require('./../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn(CUSTOMER_TABLE,'user_id',{
      field:'user_id',
      allowNull:false,
      type:DataTypes.INTEGER,
      unique: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
