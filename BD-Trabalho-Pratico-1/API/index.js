const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const query = require('./querys');

const app = express();
app.use(cors());

var db_config = {
	host: 'us-cdbr-iron-east-01.cleardb.net',
	user: 'bc1c4323d0aba4',
	password: '24364cf9',
	database: 'heroku_83faec3f836c990'
};

var connection = mysql.createConnection(db_config);

connection.connect(error => {
	if (error) {
		return error;
	}
});

app.get('/', (req, res) => {
	res.send(
		'Esta é uma API de consumação, parece que você não pode acessar ela.'
	);
});

//Pegar todos os usuarios
app.get('/usuarios', (req, res) => {
	connection.query(query.SELECT_ALL_USUARIOS, (error, results) => {
		if (error) {
			return res.send(error);
		} else {
			return res.json({
				data: results
			});
		}
	});
});
//Cadastrar um novo Usuario
app.get('/usuarios/cadastrar', (req, res) => {
	let usuario = ({
		cpf_usr,
		nome,
		Senha,
		Logradouro,
		Numero,
		Bairro,
		Cep,
		Datacad,
		DataNasc,
		Cod_cidade,
		idTipoUsuario
	} = req.query);
	connection.query(
		query.INSERT_USUARIO,
		[
			cpf_usr,
			nome,
			Senha,
			Logradouro,
			Numero,
			Bairro,
			Cep,
			Datacad,
			DataNasc,
			Cod_cidade,
			idTipoUsuario
		],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

//Cadastrar Publicacao
app.get('/tipopublicacao/cadastrar', (req, res) => {
	let aux = ({ tipo } = req.query);
	connection.query(query.INSERT_TIPO_PUBLICACAO, aux.tipo, (error, result) => {
		if (error) {
			return res.send(error);
		} else {
			return res.send(result);
		}
	});
});

//CADASTRAR DOCUMENTO
app.get('/documento/cadastrar', (req, res) => {
	let aux = ({ descricao, caminho } = req.query);
	connection.query(
		query.INSERT_DOCUMENTO,
		[aux.descricao, aux.caminho],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

// CADASTRAR AGENCIA FOMENTO
app.get('/agencia/cadastrar', (req, res) => {
	let aux = ({ nome, data } = req.query);
	connection.query(
		query.INSERT_AGENCIA_FOMENTO,
		[aux.nome, aux.data],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

// CADASTRAR GRANDE AREA
app.get('/ga/cadastrar', (req, res) => {
	let aux = ({ nome } = req.query);
	connection.query(query.INSERT_GRANDE_AREA, aux.nome, (error, result) => {
		if (error) {
			return res.send(error);
		} else {
			return res.send(result);
		}
	});
});

app.get('/area/cadastrar', (req, res) => {
	let aux = ({ nome, id } = req.query);
	connection.query(query.INSERT_AREA, [aux.nome, aux.id], (error, result) => {
		if (error) {
			return res.send(error);
		} else {
			return res.send(result);
		}
	});
});

app.get('/subarea/cadastrar', (req, res) => {
	let aux = ({ nome, id } = req.query);
	connection.query(
		query.INSERT_SUBAREA,
		[aux.nome, aux.id],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

app.get('/especialidade/cadastrar', (req, res) => {
	let aux = ({ nome, id } = req.query);
	connection.query(
		query.INSERT_ESPECIALIDADE,
		[aux.nome, aux.id],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

app.get('/publicacao/cadastrar', (req, res) => {
	let aux = ({
		Titulo,
		Titulo_alternativo,
		DataCad,
		Idioma,
		Pais,
		Resumo,
		Palavra_chave,
		IdGA,
		IdTipoPub,
		IdAgenciaFomento,
		IdDoc,
		cpf_pesquisador,
		cpf_administrador
	} = req.query);
	connection.query(
		query.INSERT_PUBLICACAO,
		[
			aux.Titulo,
			aux.Titulo_alternativo,
			aux.DataCad,
			aux.Idioma,
			aux.Pais,
			aux.Resumo,
			aux.Palavra_chave,
			IdGA,
			aux.IdTipoPub,
			aux.IdAgenciaFomento,
			aux.IdDoc,
			aux.cpf_pesquisador,
			aux.cpf_administrador
		],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

app.get('/recursofinanceiro/cadastrar', (req, res) => {
	let aux = ({
		IdArea,
		IdSub,
		IdGA,
		valor,
		DataCad,
		cpf_ProReitor
	} = req.query);
	connection.query(
		query.INSERT_PUBLICACAO,
		[IdArea, IdSub, IdGA, valor, DataCad, cpf_ProReitor],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

app.get('/tipousuario/update', (req, res) => {
	let aux = ({ descricao, nivel, id } = req.query);
	connection.query(
		query.UPDATE_TIPO_USUARIO,
		[descricao, nivel, id],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

app.get('/usuario/update', (req, res) => {
	let aux = ({
		nome,
		senha,
		logradouro,
		numero,
		bairro,
		cep,
		datacad,
		dataNasc,
		cod_cidade,
		IdTipoUsuario,
		cpf_usr
	} = req.query);
	connection.query(
		query.UPDATE_TIPO_USUARIO,
		[
			nome,
			senha,
			logradouro,
			numero,
			bairro,
			cep,
			datacad,
			dataNasc,
			cod_cidade,
			IdTipoUsuario,
			cpf_usr
		],
		(error, result) => {
			if (error) {
				return res.send(error);
			} else {
				return res.send(result);
			}
		}
	);
});

app.listen(4000, () => {
	console.log('Executando na porta 4000 e Conectado ao banco De dados');
});
