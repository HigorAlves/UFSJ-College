/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inicio: null,
			pegarTweets: null,
			coletorpalavras: null,
			dropdown: null
		};
	}

	componentWillMount() {
		if (this.props.ativo === 'inicio') {
			this.setState({ inicio: 'active' });
		}
		if (this.props.ativo === 'pegartweets') {
			this.setState({ pegarTweets: 'active' });
			this.setState({ dropdown: 'active' });
		}
		if (this.props.ativo === 'coletorpalavras') {
			this.setState({ coletorpalavras: 'active' });
			this.setState({ dropdown: 'active' });
		}
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/home">
					<img src={Logo} className="App-navbar" alt="" />
					Observatorio UFSJ
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className={'nav-item' + ' ' + this.state.inicio}>
							<Link className="nav-link" to="/home">
								Inicio
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className={
									'nav-link dropdown-toggle' + ' ' + this.state.dropdown
								}
								to="/"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Tweets
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link
									className={'dropdown-item' + ' ' + this.state.pegarTweets}
									to="/coletortweets"
								>
									Coletar Tweets
								</Link>
								<Link
									className={'dropdown-item' + ' ' + this.state.coletorpalavras}
									to="/coletorpalavras"
								>
									Coletor Palavras
								</Link>
								<div className="dropdown-divider" />
								<Link className={'dropdown-item' + ' ' + ''} to="/listarTweets">
									Listar Tweets Candidatos
								</Link>
								<Link
									className={'dropdown-item' + ' ' + ''}
									to="/listarTweetsPalavras"
								>
									Listar Tweets Palavras Chaves
								</Link>
							</div>
						</li>
						<li className="nav-item dropdown">
							<Link
								className={'nav-link dropdown-toggle'}
								to="/"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Watson
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/nlucandidato">
									NLU Candidato
								</Link>
								<Link className="dropdown-item" to="nlupalavra">
									NLU Palavra Chave
								</Link>
								<Link className="dropdown-item" to="/gerartexto">
									Criar Texto
								</Link>
								<Link className="dropdown-item" to="/analisarpersonalidade">
									Analisar Personalidade
								</Link>
								<div className="dropdown-divider" />
								<Link className="dropdown-item" to="/personalidade">
									Observar Personalidade
								</Link>
							</div>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="/">
								Creditos
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
