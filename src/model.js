const { database, DataTypes } = require('./config');

const painelProducao = database.define('neocrm_api', {
  cidade: { type: DataTypes.STRING, allowNull: true },
  estado: { type: DataTypes.STRING, allowNull: true },
  cidadeInstalacao: { type: DataTypes.STRING, allowNull: true },
  dataPortabilidade: { type: DataTypes.STRING, allowNull: true },
  nomeEtapa: { type: DataTypes.STRING, allowNull: false },
  tagPedido: { type: DataTypes.STRING, allowNull: true },
  periodoInstalacao: { type: DataTypes.STRING, allowNull: true },
  produtoCategoriaId: { type: DataTypes.STRING, allowNull: true },
  estadoInstalacao: { type: DataTypes.STRING, allowNull: true },
  nomeUsuarioAdm: { type: DataTypes.STRING, allowNull: true },
  dataHoraAtualizacao: { type: DataTypes.STRING, allowNull: true },
  estruturaNome: { type: DataTypes.STRING, allowNull: true },
  instancia: { type: DataTypes.STRING, allowNull: true },
  nomeOrigem: { type: DataTypes.STRING, allowNull: true },
  loginOperadora: { type: DataTypes.STRING, allowNull: true },
  dataCadastro: { type: DataTypes.STRING, allowNull: true },
  numeroTelefoneItem: { type: DataTypes.STRING, allowNull: true },
  quantidade: { type: DataTypes.STRING, allowNull: true },
  numeroPedidoVinculado: { type: DataTypes.STRING, allowNull: true },
  nomeEtapaItem: { type: DataTypes.STRING, allowNull: true },
  produtoId: { type: DataTypes.STRING, allowNull: true },
  item: { type: DataTypes.STRING, allowNull: true },
  ddd: { type: DataTypes.STRING, allowNull: true },
  valor: { type: DataTypes.STRING, allowNull: true },
  rpon: { type: DataTypes.STRING, allowNull: true },
  estruturaUsuarioId: { type: DataTypes.STRING, allowNull: true },
  equipeId: { type: DataTypes.STRING, allowNull: true },
  solicitacaoId: { type: DataTypes.STRING, allowNull: true },
  produtoCategoriaNome: { type: DataTypes.STRING, allowNull: true },
  numeroPedidoOrigem: { type: DataTypes.STRING, allowNull: true },
  revisao: { type: DataTypes.STRING, allowNull: true },
  notasFiscais: { type: DataTypes.STRING, allowNull: true },
  dataInstalacao: { type: DataTypes.STRING, allowNull: true },
  numeroLinha: { type: DataTypes.STRING, allowNull: true },
  tagUsuario: { type: DataTypes.STRING, allowNull: true },
  nomeUsuario: { type: DataTypes.STRING, allowNull: false },
  solicitacao: { type: DataTypes.STRING, allowNull: true },
  itemId: { type: DataTypes.STRING, allowNull: true },
  dataReferencia: { type: DataTypes.STRING, allowNull: true },
  nomeColuna: { type: DataTypes.STRING, allowNull: true },
  nomeEquipe: { type: DataTypes.STRING, allowNull: true },
  clienteId: { type: DataTypes.STRING, allowNull: true },
  nomeConsultorOperadora: { type: DataTypes.STRING, allowNull: true },
  tipoNegociacao: { type: DataTypes.STRING, allowNull: true },
  numeroPedido: { type: DataTypes.STRING, allowNull: true },
  nomeCliente: { type: DataTypes.STRING, allowNull: true },
  cpfCnpj: { type: DataTypes.STRING, allowNull: true },
  nomeProduto: { type: DataTypes.STRING, allowNull: false },
});

module.exports = painelProducao;