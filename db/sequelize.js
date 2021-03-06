const Sequelize = require('sequelize')
const CustomerModel = require('../model/customer')
const AccountModel = require('../model/account')
const TransactionModel = require('../model/transaction')

const sequelize = new Sequelize('day4msql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Customer = CustomerModel(sequelize, Sequelize)
const Account = AccountModel(sequelize, Sequelize)
Account.belongsTo(Customer, {foreignKey: 'customerNumber', targetKey:'customerNumber'});
const Transaction = TransactionModel(sequelize, Sequelize)
Transaction.belongsTo(Account,{foreignKey: 'accountNumber', targetKey:'accountNumber'});


module.exports = {
  Customer,
  Account,
  Transaction
}
