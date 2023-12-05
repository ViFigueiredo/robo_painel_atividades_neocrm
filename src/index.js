const cron = require('node-cron');
const { database } = require('./config');
const testConnection = require('./connection');
const createTable = require('./createTable');
const consumoAPI = require('./api');
const convertDataApi = require('./convert');

console.log('Aguardando inicio da aplicação...');

// Agenda a tarefa para ser executada todos os dias às 20:00 (exceto sábados e domingos)
cron.schedule('00 23 * * *', () => {
(async () => {
  try {
    await testConnection(database);
    await createTable();
    const dataAPI = await consumoAPI();
    console.log(dataAPI);
    await convertDataApi(dataAPI);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
})();
});
