import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Jumbotron from '../Components/Jumbotron';
import Footer from '../Components/Footer';

export default class ObservatorioHome extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar ativo={'inicio'} />
				<Jumbotron
					titulo="Bem vindo ao Observatorio"
					texto="Aqui você pode fazer analises de diversos tipos nos candidatos das eleições de 2018, este trabalho não visa defender nenhum candidato ou partido politico."
				/>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12">
							<h3 className="font-weight-light">
								<code>Tecnologia</code>
							</h3>
							<p className="font-weight-light">
								Trabalho realizado com a ajuda de API's, como recuperação de
								dados do Twitter, Analise de Sentimento, Personalidade e
								Tradução usando WATSON, gerenciamento de dados com banco de
								dados NoSQL MongoDB, para entender o que cada candidato está
								divulgando em sua rede social. Este entendimento é fundamental
								para avaliar o efetivo impacto das campanhas na internet e como
								os usuarios interagem e reagem às falas dos candidatos à
								presidencia da republica.
							</p>
						</div>
						<div className="col-sm-12 col-md-12">
							<h3 className="font-weight-light mt-4">
								<code>Observatorios Ativos</code>
							</h3>
							<div className="row">
								<div className="col-sm-12 col-md-6 mt-2">
									<h4 className="font-weight-light">Eleições 2018</h4>
									<p className="font-weight-light">
										Veja dados sobre os candidatos e o que as pessoas estão
										falando dos candidatos
									</p>
									<Link to='/eleicoes'>
										<button type="button" className="btn btn-dark">
											Visitar
									</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
