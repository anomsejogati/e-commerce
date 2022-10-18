import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize


const ProductModel = db.define('product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
})


export default ProductModel;

(async () => {
    await db.sync()
})()