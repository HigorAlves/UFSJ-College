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
											<DOCUMENTO />
											<br />
											<Link to={'/cadastrardocumento'} className="text-dark">
												Cadastrar Documento
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<PUBLICACAO />
											<br />
											<Link to={'/cadastrarpublicacao'} className="text-dark">
												Cadastrar Publicação
											</Link>
										</div>
									</div>
								</div>
							</section>

							<section className="my-4">
								<h4>Area Alteração</h4>
								<hr />
								<div className="container">
									<div className="form-row">
										<div className="col-md-2 col-sm-12 text-center m-2">
											<DOCUMENTO />
											<br />
											<Link to={'/alterardocumento'} className="text-dark">
												Alterar Documento
											</Link>
										</div>
										<div className="col-md-2 col-sm-12 text-center m-2">
											<PUBLICACAO />
											<br />
											<Link to={'/alterarpublicacao'} className="text-dark">
												Alterar Alterar Publicação
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
