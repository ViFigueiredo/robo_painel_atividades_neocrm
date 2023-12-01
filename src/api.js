const axios = require('axios');
// const date = require('./today');

const consumoAPI = async () => {
  const url = 'https://app.neosales.com.br/producao-painel-integration-v2';

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
        tokenEstrutura: 'd4f6286d-61f4-4fbb-9d4e-470f9bd8ea1d',
        tokenUsuario: '1f105d5d-2cc8-4e16-b598-3f35a0ab317e',
        dataHoraInicioCarga: '2023-01-01 06:00:00',
        dataHoraFimCarga: '2023-12-31 20:00:00',
        painelId: '15314',
        outputFormat: 'json',
      },
    });
    return res.data;
  } catch (error) {
    console.error('Erro na requisição!');
  }
};

module.exports = consumoAPI;
