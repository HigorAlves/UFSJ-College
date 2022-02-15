import React, { Component } from 'react';
import '../assets/css/navbar.css';
import { SEARCH } from '../lib/fontAwesome';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<Link className="navbar-brand" to="/">
						Acervo de Recursos Educacionais
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarToggler"
						aria-controls="navbarToggler"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<Link class="nav-link" to={'/'}>
									Inicio
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to={'/'}>
									Artigos
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to={'/administrador'}>
									Administrador
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to={'/proreitor'}>
									Pro Reitor
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to={'/pesquisador'}>
									Pesquisador
								</Link>
							</li>
						</ul>
					</div>
				</nav>

				<section
					className="collapsing navbar-collapse navbar-nav mr-auto mt-2 mt-lg-0 d-lg-none d-xl-none"
					id="navbarToggler"
				>
					<Sidebar />
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<Link class="nav-link" to={'/'}>
								Inicio
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to={'/'}>
								Artigos
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to={'/administrador'}>
								Administrador
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to={'/proreitor'}>
								Pro Reitor
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to={'/pesquisador'}>
								Pesquisador
							</Link>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}
