const INSERT_USUARIO =
	'INSERT INTO usuario (cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad,dataNasc,cod_cidade,IdTipoUsuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
const SELECT_ALL_USUARIOS = 'SELECT * FROM heroku_83faec3f836c990.usuario';
const INSERT_TIPO_PUBLICACAO =
	'INSERT INTO tipo_publicacao (NomeTpPub) VALUES (?)';
const INSERT_DOCUMENTO =
	'INSERT INTO documento (Descricao,Caminho) VALUES (?,?)';
const INSERT_AGENCIA_FOMENTO =
	'INSERT INTO agenciafomento (NomeAgenciaFomento,DataCad) VALUES (?,?)';
const INSERT_GRANDE_AREA = 'INSERT INTO grandes_areas (NomeGA) VALUES (?)';
const INSERT_AREA = 'INSERT INTO areas (NomeArea, IdGA) VALUES (?,?)';
const INSERT_SUBAREA = 'INSERT INTO subareas (NomeSub,IdArea) VALUES (?,?)';
const INSERT_ESPECIALIDADE =
	'INSERT INTO especialidades (NomeEsp,IdSub) VALUES (?,?)';
const INSERT_PUBLICACAO =
	'INSERT INTO publicacao (Titulo, Titulo_alternativo, DataCad, Idioma, Pais, Resumo, Palavra_chave,IdGA, IdTipoPub, IdAgenciaFomento, IdDoc, cpf_pesquisador,cpf_administrador) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
const INSERT_RECURSO_FINANCEIRO =
	'INSERT INTO recursos_financeiros (IdArea,IdSub,IdGA,valor,DataCad,cpf_ProReitor) VALUES (?,?,?,?,?,?,?)';

const UPDATE_TIPO_USUARIO =
	'UPDATE usuariotp SET Descricao=(?), Niveis=(?) WHERE IdTipoUsuario=(?)';

//Fazer apartir daqui
const UPDATE_TIPO_PUBLICACAO =
	'UPDATE tipo_publicacao SET NomeTpPub=(?) WHERE IdTipoPub=(?)';
const UPDATE_DOCUMENTO =
	'UPDATE documento SET Descricao=(?), Caminho=(?) WHERE IdDoc=(?)';
const UPDATE_AGENCIA_FOMENTO =
	'UPDATE agenciafomento SET NomeAgenciaFomento=(?), DataCad=(?) WHERE IdAgenciaFomento=(?)';
const UPDATE_GRANDE_AREA = 'UPDATE grandes_areas set NomeGA=(?) WHERE IdGA=(?)';
const UPDATE_AREA = 'UPDATE areas SET NomeArea=(?), IdGA=(?) WHERE IdArea=(?)';
const UPDATE_SUB_AREA =
	'UPDATE subareas SET NomeSub=(?), IdArea=(?) WHERE IdSub=(?)';
const UPDATE_ESPECIALIDADE =
	'UPDATE especialidades SET NomesEsp=(?), IdSub=(?) WHERE IdEsp=(?)';
const UPDATE_USUARIO =
	'UPDATE usuario SET nome = (?), senha = (?), logradouro = (?), numero = (?), bairro = (?), cep = (?), datacad = (?),dataNasc = (?),cod_cidade = (?),IdTipoUsuario = (?) where cpf_usr =(?)';
const UPDATE_RECURSO_FINANCEIRO =
	'update recursos_financeiros set IdArea = (?),IdSub = (?),IdGA = (?),valor = (?),DataCad = (?),cpf_ProReitor = (?) where IdRec = (?)';

const UPDATE_PUBLICACAO =
	'update Publicacao set Titulo = (?),Titulo_alternativo = (?),DataCad = (?),Idioma= (?),Pais=  (?),Resumo = (?), Palavra_chave = (?),IdGA = (?),IdTipoPub = (?),IdAgenciaFomento = (?), IdDoc = (?), cpf_pesquisador = (?),cpf_administrador = (?) where id_publicacao = (?';

const CONSULTA1 =
	'select sum(valor) from recursos_financeiros where DataCad BETWEEN (?) AND (?);';
const CONSULTA2 =
	'select ga.NomeGA, sum(r.valor) from recursos_financeiros inner join Grandes_Areas ga on ga.IdGA = (?) where DataCad BETWEEN (?) AND (?) group by ga.NomeGA';
const CONSULTA3 =
	'select a.NomeArea, sum(r.valor) from recursos_financeiros r inner join Areas a on a.idArea = (?) where DataCad BETWEEN (?) AND (?) group by a.NomeArea';
// const CONSULTA4 = 'select
// s.NomeSub,
// sum(r.valor)
// from Recursos_Financeiros r
// inner join subAreas s on s.idsub = r.IdSub
// where
// DataCad BETWEEN '01/01/2015' AND '31/12/2015'
// group by s.NomeSub';

// const CONSULTA5 = 'select
// s.NomeSub,
// sum(r.valor)
// from Recursos_Financeiros r
// inner join subAreas s on s.idsub = r.IdSub
// where
// DataCad BETWEEN '01/01/2015' AND '31/12/2015'
// group by s.NomeSub'
// const CONSULTA6 = 'select count(Id_Publicacao)
// from publicacao
// where
// DataCad BETWEEN '01/01/2015' AND '31/12/2018''
// const CONSULTA7 = 'select
// count(p.Id_Publicacao) as Qtde_Publicacao,
// a.NomeAgenciaFomento
// from Publicacao p
// inner join AgenciaFomento a on a.idagenciafomento = p.idagenciafomento
// WHERE p.DataCad BETWEEN '01/01/2018' AND '31/12/2018'
// group by
// p.IdAgenciaFomento,
// a.NomeAgenciaFomento'
// const CONSULTA8 = 'select
// count(p.Id_Publicacao) as Qtde_Publicacao,
// a.NomeGA
// from Publicacao p
// inner join Grandes_Areas a on a.IdGA = p.IdGA
// WHERE p.DataCad BETWEEN '01/01/2018' AND '31/12/2018'
// group by
// a.IdGA,
// a.NomeGA'
// const CONSULTA9 = 'select p.titulo,p.DataCad,p.Resumo
// from Publicacao p
// inner join pesquisador pe on pe.cpf_pesq = p.cpf_pesq
// inner join tipo_usuario u on u.cpf_usr = pe.cpf_pesq
// where
// --p.cpf_pesq = ''and
// u.nome like 'Higor' '
// const CONSULTA10 = 'select
// p.titulo,
// p.Titulo_alternativo,
// p.Resumo,
// u.nome as Autor,
// p.DataCad
// from Publicacao p
// inner join pesquisador pe on pe.cpf_pesq = p.cpf_pesq
// inner join tipo_usuario u on u.cpf_usr = pe.cpf_pesq
// where
// p.DataCad BETWEEN '01/01/2018' AND '31/12/2018''
// const CONSULTA11 = 'select
// g.NomeGA,
// a.NomeArea,
// s.NomeSub,
// e.NomeEsp
// from Grandes_Areas g
// inner join areas a on a.IdGA = g.IdGA
// inner join subareas s on s.IdArea = a.IdArea
// inner join especialidades e on e.IdSub = s.IdSub'

const DELETE_PUBLICACAO = 'delete from publicacao where id_publicacao = 2';
const DELETE_USUARIO = 'delete from usuario where cpf_usr = 1234567897';
const DELETE_RECURSO_FINANCEIRO =
	'delete from Recursos_Financeiros where idrec = 1';
const DELETE_TIPO_USUARIO = 'delete from usuarioTP where IdTipoUsuario = 1';
const DELETE_TIPO_PUBLICACAO =
	'delete from Tipo_Publicacao where idtipoPub = 1';
const DELETE_DOCUMENTO = 'delete from documento where iddoc = 1';
const DELETE_AGENCIA_FOMENTO =
	'delete from AgenciaFomento where idAgenciaFomento = 1';
const DELETE_GRANDE_AREA = 'delete from Grandes_Areas  where idga = 1';

module.exports = {
	INSERT_USUARIO,
	SELECT_ALL_USUARIOS,
	INSERT_TIPO_PUBLICACAO,
	INSERT_DOCUMENTO,
	INSERT_AGENCIA_FOMENTO,
	INSERT_GRANDE_AREA,
	INSERT_AREA,
	INSERT_SUBAREA,
	INSERT_ESPECIALIDADE,
	INSERT_PUBLICACAO,
	INSERT_RECURSO_FINANCEIRO,
	UPDATE_TIPO_USUARIO,
	UPDATE_TIPO_PUBLICACAO,
	UPDATE_USUARIO,
	UPDATE_RECURSO_FINANCEIRO,
	UPDATE_PUBLICACAO
};
