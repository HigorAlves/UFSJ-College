use `heroku_7c4a5149dcb9e6c`;

Create table Tipo_Usuario (
	cpf_usr Int NOT NULL,
	nome Varchar(80) NOT NULL,
	Senha Char(8) NOT NULL,
	Logradouro Varchar(20),
	Numero Varchar(5),
	Bairro Varchar(10),
	Cep Varchar(10),
	DataCad Date NOT NULL,
	DataSaida Date,
	constraint PK_Tipo_Usuario Primary Key (cpf_usr)
 );

Create table Administrador (
	cpf_adm Int NOT NULL,
	Tipo_ADM Int,
	constraint PK_Administrador Primary Key (cpf_adm)
 );

Create table Pesquisador (
	cpf_pesq Int NOT NULL,
	Data_Nasc Date,
	constraint PK_Pesquisador Primary Key (cpf_pesq)
);

Create table ProReitorPesquisa (
	cpf_pro Int NOT NULL,
	IdDeptoPesq Int NOT NULL,
	constraint PK_ProReitorPesquisa Primary Key (cpf_pro)
);

Create table Publicacao (
	Id_Publicacao Int NOT NULL,
	Titulo Varchar(100) NOT NULL,
	Titulo_alternativo Varchar(100),
	DataCad Date NOT NULL,
	DataLiberacao Date,
	Nome_autor Varchar(50) NOT NULL,
	Sobrenome_autor Varchar(50) NOT NULL,
	Idioma Varchar(20),
	Pais Varchar(20),
	Resumo Varchar(200),
	Palavra_chave Varchar(30),
	IdGA Int NOT NULL,
	IdTipoPub Int NOT NULL,
	IdAgenciaFomento Int NOT NULL,
	IdDoc Int NOT NULL,
	cpf_adm Int NOT NULL,
	cpf_pesq Int NOT NULL,
	constraint PK_Publicacao Primary Key (Id_Publicacao)
);

Create table Tipo_Publicacao (
	IdTipoPub Int NOT NULL,
	NomeTpPub Varchar(50),
	cpf_adm Int NOT NULL,
	constraint PK_Tipo_Publicacao Primary Key (IdTipoPub)
);

Create table Grandes_Areas (
	IdGA Int NOT NULL,
	NomeGA Varchar(50) NOT NULL,
	cpf_adm Int NOT NULL,
	constraint PK_Grandes_Areas Primary Key (IdGA)
);

Create table Areas (
	IdArea Int NOT NULL,
	NomeArea Varchar(50) NOT NULL,
	IdGA Int NOT NULL,
	constraint PK_Areas Primary Key (IdArea)
);

Create table SubAreas (
	IdSub Int NOT NULL,
	NomeSub Varchar(50) NOT NULL,
	IdArea Int NOT NULL,
	constraint PK_SubAreas Primary Key (IdSub));

Create table Especialidades (
	IdEsp Int NOT NULL,
	NomeEsp Varchar(50) NOT NULL,
	IdSub Int NOT NULL,
	constraint PK_Especialidades Primary Key (IdEsp)
);

Create table Recursos_Financeiros (
	IdRec Int NOT NULL,
	IdArea Int NOT NULL,
	IdSub Int NOT NULL,
	IdGA Int NOT NULL,
	valor Float NOT NULL,
	DataCad Int NOT NULL,
	cpf_pro Int NOT NULL,
	constraint PK_Recursos_Financeiros Primary Key (IdRec,IdArea,IdSub,IdGA)
);

Create table Documento (
	IdDoc Int NOT NULL,
	Descricao Varchar(150) NOT NULL,
	Caminho Varchar(20),
	constraint PK_Documento Primary Key (IdDoc)
);

Create table AgenciaFomento (
	IdAgenciaFomento Int NOT NULL,
	NomeAgenciaFomento Varchar(100),
	DataCad Date,
	constraint PK_AgenciaFomento Primary Key (IdAgenciaFomento)
);

Create table Departamento (
	IdDeptoPesq Int NOT NULL,
	NomeDeptoPesq Int NOT NULL,
	DataCad Date NOT NULL,
	constraint PK_Departamento Primary Key (IdDeptoPesq)
);


Alter table Pesquisador add Foreign Key (cpf_pesq) references Tipo_Usuario (cpf_usr) on delete  restrict on update  restrict;
Alter table Administrador add Foreign Key (cpf_adm) references Tipo_Usuario (cpf_usr) on delete  restrict on update  restrict;
Alter table ProReitorPesquisa add Foreign Key (cpf_pro) references Tipo_Usuario (cpf_usr) on delete  restrict on update  restrict;
Alter table Tipo_Publicacao add Foreign Key (cpf_adm) references Administrador (cpf_adm) on delete  restrict on update  restrict;
Alter table Publicacao add Foreign Key (cpf_adm) references Administrador (cpf_adm) on delete  restrict on update  restrict;
Alter table Grandes_Areas add Foreign Key (cpf_adm) references Administrador (cpf_adm) on delete  restrict on update  restrict;
Alter table Publicacao add Foreign Key (cpf_pesq) references Pesquisador (cpf_pesq) on delete  restrict on update  restrict;
Alter table Recursos_Financeiros add Foreign Key (cpf_pro) references ProReitorPesquisa (cpf_pro) on delete  restrict on update  restrict;
Alter table Publicacao add Foreign Key (IdTipoPub) references Tipo_Publicacao (IdTipoPub) on delete  restrict on update  restrict;
Alter table Publicacao add Foreign Key (IdGA) references Grandes_Areas (IdGA) on delete  restrict on update  restrict;
Alter table Areas add Foreign Key (IdGA) references Grandes_Areas (IdGA) on delete  restrict on update  restrict;
Alter table Recursos_Financeiros add Foreign Key (IdGA) references Grandes_Areas (IdGA) on delete  restrict on update  restrict;
Alter table Recursos_Financeiros add Foreign Key (IdArea) references Areas (IdArea) on delete  restrict on update  restrict;
Alter table SubAreas add Foreign Key (IdArea) references Areas (IdArea) on delete  restrict on update  restrict;
Alter table Especialidades add Foreign Key (IdSub) references SubAreas (IdSub) on delete  restrict on update  restrict;
Alter table Recursos_Financeiros add Foreign Key (IdSub) references SubAreas (IdSub) on delete  restrict on update  restrict;
Alter table Publicacao add Foreign Key (IdDoc) references Documento (IdDoc) on delete  restrict on update  restrict;
Alter table Publicacao add Foreign Key (IdAgenciaFomento) references AgenciaFomento (IdAgenciaFomento) on delete  restrict on update  restrict;
Alter table ProReitorPesquisa add Foreign Key (IdDeptoPesq) references Departamento (IdDeptoPesq) on delete  restrict on update  restrict;


