const {Sequelize, Model, Datatypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
// const sequelize = new Sequelize('sqlite::/tmp/testdb');

class User extends Model{}
User.init({
    username: Datatypes.STRING,
    birthday: Datatypes.DATE
},{sequelize, modelName:'user'});

(async() =>{
    await sequelize.sync();
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980,6,20)
    });
    console.log(jane.toJSON());
})