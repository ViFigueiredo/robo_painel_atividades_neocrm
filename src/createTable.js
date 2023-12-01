const Preditivo = require('./model');

const createTable = async () => {
  try {
    await Preditivo.sync({ force: false, logging: false });
    console.log('Tabela sincronizada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
  }
};

module.exports = createTable;
