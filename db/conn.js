const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('instadev', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: true
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados')
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados, conn.js: ', error)
    }
}

testConnection();

module.exports=sequelize