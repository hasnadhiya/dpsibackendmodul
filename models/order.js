// models/order.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Customer = require('./customer');
const Employee = require('./employee');
const Shipper = require('./shipper');

const Order = sequelize.define('Order', {
    orderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Customer,
            key: 'customerID'
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employeeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Employee,
            key:'employeeID'
        }
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    shipperID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Shipper,
            key:'shipperID'
        }
    }
});

//relasi order dengan customer
Order.belongsTo(Customer,{ForeignKey:'customerID'});
Customer.hasMany(Order,{ForeignKey:'customerID'});

//relasi order dengan shipper
Order.belongsTo(Shipper,{ForeignKey:'shipperID'});
Shipper.hasMany(Order,{ForeignKey:'shipperID'});

//relasi order dengan emploee
Order.belongsTo(Employee,{ForeignKey:'employeeID'});
Employee.hasMany(Order,{ForeignKey:'employeeID'});

module.exports = Order;
