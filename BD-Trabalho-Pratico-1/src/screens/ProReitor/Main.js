import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';
import {
	USERS,
	DEPARTAMENTO,
	DOCUMENTO,
	AREA,
	AGENCIA,
	RECURSOS,
	PUBLICACAO
} from '../../lib/fontAwesome';
import { Link } from 'react-router-dom';

export default class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usuario: null
		};
	}

	componentWillMount() {
		let usuario = localStorage.getItem('nome');
		this.setState({ usuario });
	}

	render() {
		return (
			<section>
				<Navbar />
				<div className={'container header'}>
					<div className={'row centralizado'}>
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div class="alert alert-primary" role="alert">
								Bem vindo {this.state.usuario}!
							</div>

							<section>
								<h4>Area de Cadastramento</h4>
								<hr />
								<div className="container">
									<div className="row">
										<div className="col-md-2 col-sm-12 text-center m-2">
											<RECURSOS />
											<br />
											<Link
												to={'/cadastrarrecursosfinanceiros'}
												className="text-dark"
											>
												Cadastrar Recursos Financeiros
											</Link>
										</div>
									</div>
								</div>
							</section>

							<section className="my-4">
								<h4>Area Alteração</h4>
								<hr />
								<div className="container">
									<div className="row">
										<div className="col-md-2 col-sm-12 text-center m-2">
											<RECURSOS />
											<br />
											<Link
												to={'/alterarrecursofinanceiro'}
												className="text-dark"
											>
												Alterar Recurso Financeiro
											</Link>
										</div>
									</div>
								</div>
							</section>

							<section className="my-4">
								<h4>Consultas</h4>
								<hr />
								<div className="container">
									<div className="row">
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/listarusuarios'} className="text-dark">
												Listar Usuarios
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/recursosliberados'} className="text-dark">
												Recursos Liberados
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta2'} className="text-dark">
												Valor total disponibilizado por Grande área
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta3'} className="text-dark">
												Valor total disponibilizado para Área
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta4'} className="text-dark">
												Valor total disponibilizado para Subárea
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta5'} className="text-dark">
												Quantidade de Publicações cadastradas por período
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta6'} className="text-dark">
												Quantidade de Publicações por Agência de Fomento e por
												período
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta7'} className="text-dark">
												Quantidade de publicações por Grande Área e por período
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta8'} className="text-dark">
												Publicações por autor
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<USERS />
											<br />
											<Link to={'/consulta9'} className="text-dark">
												Exibir todos os as grandes áreas de conhecimento, suas
												respectivas áreas e subáreas e especialidades
											</Link>
										</div>
									</div>
								</div>
							</section>
						</div>

						{/*Sidebar com as opões escolhidas*/}
						<div
							className={
								'col-lg-3 col-md-3 col-sm-3 d-none d-sm-none d-lg-block'
							}
						/>
					</div>
				</div>
			</section>
		);
	}
}
