import {Sequelize} from "sequelize";

const db = new Sequelize('designxx','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;