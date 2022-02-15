import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import AlterandousuarioDados from './screens/AlterandoUsuarioDados';

//Telas Administrador
import AdmScreen from './screens/Administrador/MainScreen';
import CadastrarUsuario from './screens/Administrador/Cadastro/CadastroUsuarios';
import CadastrarGrandesAreas from './screens/Administrador/Cadastro/GrandesAreas';
import CadastroAgenciaFomento from './screens/Administrador/Cadastro/AgenciaFomento';
import CadastroDepartamento from './screens/Administrador/Cadastro/CadastroDepartamento';
import CadastrarDocumento from './screens/Administrador/Cadastro/CadastrarDocumento';
import CadastroPublicacoes from './screens/Administrador/Cadastro/CadastroPublicacoes';
import CadastrarRecursosFinanceiros from './screens/Administrador/Cadastro/CadastrarRecursosFinanceiros';
import CadastroTIpoPublicacao from './screens/Administrador/Cadastro/TipoPublicacao';
import ListaUsuarios from './screens/Administrador/Listagem/ListagemUsuarios';
import AlterarTipoUsuario from './screens/Administrador/Alteracao/AlterarTipoUsuario';
import AlterarAreas from './screens/Administrador/Alteracao/AlterarAreas';
import AlterarAgenciaFomento from './screens/Administrador/Alteracao/AlterarAgenciaFomento';
import AlterarDepartamento from './screens/Administrador/Alteracao/AlterarDepartamento';
import AlterarRecursoFinanceiro from './screens/Administrador/Alteracao/AlterarRecursoFinanceiro';
import AlterarDocumento from './screens/Administrador/Alteracao/AlterarDocumento';
import AlterarPublicacao from './screens/Administrador/Alteracao/AlterarPublicacao';
import AlterarTipoPublicacao from './screens/Administrador/Alteracao/AlterarTipoPublicacao';
import RecursosLiberados from './screens/Administrador/Consultas/RecursosLiberados';
import Consulta2 from './screens/Administrador/Consultas/Consulta2';
import Consulta3 from './screens/Administrador/Consultas/Consulta3';
import Consulta4 from './screens/Administrador/Consultas/Consulta4';
import Consulta5 from './screens/Administrador/Consultas/Consulta5';
import Consulta6 from './screens/Administrador/Consultas/Consulta6';
import Consulta7 from './screens/Administrador/Consultas/Consulta7';
import Consulta8 from './screens/Administrador/Consultas/Consulta8';

import TelaPesquisador from './screens/Pesquisador/Main';
import TelaProReitor from './screens/ProReitor/Main';

export default class Route extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedInAdministrador: null,
			loggedInPesquisador: null,
			loggedInProReitor: null
		};
	}

	componentWillMount() {
		if (localStorage.getItem('auth-token') === 'administrador') {
			this.setState({ loggedInAdministrador: true });
		} else {
			this.setState({ loggedInAdministrador: false });
		}
		if (localStorage.getItem('auth-token') === 'pesquisador') {
			this.setState({ loggedInPesquisador: true });
		} else {
			this.setState({ loggedInPesquisador: false });
		}
		if (localStorage.getItem('auth-token') === 'proreitor') {
			this.setState({ loggedInProReitor: true });
		} else {
			this.setState({ loggedInProReitor: false });
		}
	}

	render() {
		return (
			<Router>
				<div>
					<PrivateRoute
						exact
						path="/"
						render={() => {
							if (!this.state.loggedInAdministrador) return <Home />;
							return <Redirect to={{ pathname: '/' }} />;
						}}
					/>
					<PrivateRoute authorized={true} exact path="/" component={Home} />
					<PrivateRoute
						authorized={true}
						exact
						path="/login"
						component={Login}
					/>
					<PrivateRoute
						authorized={true}
						exact
						path="/cadastrar"
						component={Cadastro}
					/>

					{/* //Telas somente do Administrador */}
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/listarusuarios"
						component={ListaUsuarios}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/administrador"
						component={AdmScreen}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/cadastrarusuarios"
						component={CadastrarUsuario}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/alterarusuario"
						component={AlterarTipoUsuario}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/cadastrargrandesareas"
						component={CadastrarGrandesAreas}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/cadastraragenciafomento"
						component={CadastroAgenciaFomento}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/cadastrardepartamento"
						component={CadastroDepartamento}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInPesquisador
						}
						exact
						path="/cadastrarDocumento"
						component={CadastrarDocumento}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInPesquisador
						}
						exact
						path="/cadastrarpublicacao"
						component={CadastroPublicacoes}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/cadastrarrecursosfinanceiros"
						component={CadastrarRecursosFinanceiros}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/cadastratipopublicacao"
						component={CadastroTIpoPublicacao}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/alterardadosusuario"
						component={AlterandousuarioDados}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/alterarareas"
						component={AlterarAreas}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/alteraragenciafomento"
						component={AlterarAgenciaFomento}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/alterardepartamento"
						component={AlterarDepartamento}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/alterarrecursofinanceiro"
						component={AlterarRecursoFinanceiro}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInPesquisador
						}
						exact
						path="/alterardocumento"
						component={AlterarDocumento}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInPesquisador
						}
						exact
						path="/alterarpublicacao"
						component={AlterarPublicacao}
					/>
					<PrivateRoute
						authorized={this.state.loggedInAdministrador}
						exact
						path="/alterartipopublicacao"
						component={AlterarTipoPublicacao}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/recursosliberados"
						component={RecursosLiberados}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/consulta2"
						component={Consulta2}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/consulta3"
						component={Consulta3}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/consulta4"
						component={Consulta4}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/consulta5"
						component={Consulta5}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/consulta6"
						component={Consulta6}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/consulta7"
						component={Consulta7}
					/>
					<PrivateRoute
						authorized={
							this.state.loggedInAdministrador || this.state.loggedInProReitor
						}
						exact
						path="/consulta8"
						component={Consulta8}
					/>
					<PrivateRoute
						authorized={this.state.loggedInPesquisador}
						exact
						path="/pesquisador"
						component={TelaPesquisador}
					/>
					<PrivateRoute
						authorized={this.state.loggedInProReitor}
						exact
						path="/proreitor"
						component={TelaProReitor}
					/>
				</div>
			</Router>
		);
	}
}
