/* eslint-disable no-await-in-loop */
const iconv = require('iconv-lite');
const date = require('./today');
const painelProducao = require('./model');

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const convertDataApi = async (buffer) => {
  const encodedData = iconv.decode(buffer, 'ISO-8859-1');
  const jsonData = JSON.parse(encodedData);
  console.log(jsonData);

  const chunkSize = 5000;
  const chunks = chunkArray(jsonData, chunkSize);

  console.log(
    `Foram baixados: ${jsonData.length} registros referentes a ${date()}.`,
  );

  if (jsonData && jsonData.length > 0) {
    let insertedCount = 0;
    for (let i = 0; i < chunks.length; i += 1) {
      const result = await painelProducao.bulkCreate(chunks[i], {
        returning: true,
        logging: false,
        timeout: 60000,
      });
      insertedCount += result.length;
    }

    if (insertedCount === jsonData.length) {
      console.log(`Dados: ${date()} -> Salvo com sucesso!`);
    } else {
      console.log(`Dados: ${date()} -> Dia improdutivo!`);
    }
    console.log('Aguardando início da aplicação...');
  }
};

module.exports = convertDataApi;
