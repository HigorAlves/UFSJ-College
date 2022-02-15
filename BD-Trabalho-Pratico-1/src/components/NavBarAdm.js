import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../assets/css/navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nomeArea: null
		};
	}
	handleDeslogar = () => {
		localStorage.removeItem('auth-token');
		localStorage.removeItem('nome');
		this.props.history.push('/');
		window.location.reload();
	};

	componentWillMount() {
		this.setState({ nomeArea: localStorage.getItem('auth-token') });
	}

	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link class="navbar-brand" to={'/administrador'}>
						Ferramentas do {this.state.nomeArea}
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<Link class="nav-link" to={'/administrador'}>
									Inicio
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to={'/'}>
									Artigos
								</Link>
							</li>
						</ul>
						<button className="btn btn-danger" onClick={this.handleDeslogar}>
							Deslogar do Sistema
						</button>
					</div>
				</nav>

				<section
					className="collapsing navbar-collapse navbar-nav mr-auto mt-2 mt-lg-0 d-lg-none d-xl-none"
					id="navbarToggler"
				/>
			</div>
		);
	}
}

export default withRouter(Navbar);
