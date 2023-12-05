const axios = require('axios');
// const date = require('./today');

const consumoAPI = async () => {
  const url = process.env.API_URL;

  try {
    await console.log('Baixando painel de produção VIVO...');

    const res = await axios({
      method: 'post',
      url,
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        tokenEstrutura: process.env.API_TOKEN_ESTRUTURA,
        tokenUsuario: process.env.API_TOKEN_USUARIO,
        dataHoraInicioCarga: process.env.API_DATE_START,
        dataHoraFimCarga: process.env.API_DATE_END,
        painelId: process.env.API_PAINEL_ID,
        outputFormat: 'json',
      },
    });
    return res.data;
  } catch (error) {
    console.error('Erro na requisição!');
  }
};

module.exports = consumoAPI;
