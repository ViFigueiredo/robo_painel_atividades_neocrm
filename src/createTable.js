const painelAtividades = require('./model');

const createTable = async () => {
  try {
    await painelAtividades.sync({ force: false, logging: false });
    console.log('Tabela sincronizada com sucesso!');
    painelAtividades.truncate()
  .then(() => {
    console.log('Tabela limpa com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao limpar a tabela:', err);
  });
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
  }
};

module.exports = createTable;