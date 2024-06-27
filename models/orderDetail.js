// models/orderDetail.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Order = require('./order');
const Product = require('./product');

const OrderDetail = sequelize.define('OrderDetail', {
    orderDetailID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Order,
            key:'orderID'
        }
    },
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Product,
            key:'productID'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

//relasi orderDetail dan product
OrderDetail.belongsTo(Product,{ForeignKey:'productID'});
Product.hasMany(OrderDetail,{ForeignKey:'productID'});

//relasi orderDetail dan Order
OrderDetail.belongsTo(Order,{ForeignKey:'orderID'});
Order.hasMany(OrderDetail,{ForeignKey:'orderID'});

module.exports = OrderDetail;
