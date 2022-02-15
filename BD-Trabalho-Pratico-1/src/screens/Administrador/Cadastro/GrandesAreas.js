import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class GrandesAreas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cadastrou: null,
			nomeGA: null,
			nomeArea: null,
			idGa: null,
			nomeSubArea: null,
			idArea: null,
			nomeEspecialidade: null,
			idSubArea: null
		}
		this.handleSubmitArea = this.handleSubmitArea.bind(this);
		this.handleSubmitGA = this.handleSubmitGA.bind(this);
		this.handleSubmitSubArea = this.handleSubmitSubArea.bind(this);
		this.handleChangeGA = this.handleChangeGA.bind(this);
		this.handleChangeArea = this.handleChangeArea.bind(this);
		this.handleChangeIdArea = this.handleChangeIdArea.bind(this);
		this.handleChangeSubArea = this.handleChangeSubArea.bind(this);
		this.handleChangeIdSubArea = this.handleChangeIdSubArea.bind(this);
		this.handleChangeEspecialidade = this.handleChangeEspecialidade.bind(this);
		this.handleChangeIdEspecialidade = this.handleChangeIdEspecialidade.bind(this);
		this.handleSubmitEspecialidade = this.handleSubmitEspecialidade.bind(this);
	}
	handleChangeEspecialidade(e) {
		this.setState({ nomeEspecialidade: e.target.value });
	}
	handleChangeIdEspecialidade(e) {
		this.setState({ idSubArea: e.target.value })
	}
	handleChangeIdSubArea(e) {
		this.setState({ idArea: e.target.value });
	}
	handleChangeSubArea(e) {
		this.setState({ nomeSubArea: e.target.value });
	}
	handleChangeGA(e) {
		this.setState({ nomeGA: e.target.value });
	}
	handleChangeArea(e) {
		this.setState({ nomeArea: e.target.value });
	}
	handleChangeIdArea(e) {
		this.setState({ idGa: e.target.value });
	}

	handleSubmitGA(e) {
		e.preventDefault();
		fetch(`http://localhost:4000/ga/cadastrar?nome=${this.state.nomeGA}`)
			.then(response => console.log(response.json()))
			.then(() => {
				console.log('Cadastrou')
				this.setState({ cadastrou: true })
			})
			.catch((error) => {
				console.log(error, ' Não foi possivel cadastrar');
				this.setState({ cadastrou: false });
			})
	}

	handleSubmitArea(e) {
		e.preventDefault();
		fetch(`http://localhost:4000/area/cadastrar?nome=${this.state.nomeArea}&id=${this.state.idGa}`)
			.then(response => response.json())
			.then(() => {
				console.log('Cadastrou')
				this.setState({ cadastrou: true })
			})
			.catch((error) => {
				console.log(error, ' Não foi possivel cadastrar');
				this.setState({ cadastrou: false });
			})
	}

	handleSubmitSubArea(e) {
		e.preventDefault();
		fetch(`http://localhost:4000/subarea/cadastrar?nome=${this.state.nomeSubArea}&id=${this.state.idArea}`)
			.then(response => response.json())
			.then(() => {
				console.log('Cadastrou')
				this.setState({ cadastrou: true })
			})
			.catch((error) => {
				console.log(error, ' Não foi possivel cadastrar');
				this.setState({ cadastrou: false });
			})
	}
	handleSubmitEspecialidade(e) {
		e.preventDefault();
		fetch(`http://localhost:4000/especialidade/cadastrar?nome=${this.state.nomeEspecialidade}&id=${this.state.idSubArea}`)
			.then(response => response.json())
			.then(() => {
				console.log('Cadastrou')
				this.setState({ cadastrou: true })
			})
			.catch((error) => {
				console.log(error, ' Não foi possivel cadastrar');
				this.setState({ cadastrou: false });
			})
	}

	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<h4>Grande Area</h4>
							<hr />
							<form onSubmit={this.handleSubmitGA}>
								<div class="form-group">
									<label for="inputNome">Nome</label>
									<input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" value={this.state.nomeGA} onChange={this.handleChangeGA} />
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>

						<div className='col-6'>
							<h4>Area</h4>
							<hr />
							<form onSubmit={this.handleSubmitArea}>
								<div className='form-row'>
									<div class="form-group col-sm-12 col-md-4">
										<label for="inputNomeArea">Nome</label>
										<input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o nome" value={this.state.nomeArea} onChange={this.handleChangeArea} />
									</div>
									<div class="form-group col-sm-12 col-md-4">
										<label for="inputNomeArea">Id da Grande Area</label>
										<input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o nome" value={this.state.idGa} onChange={this.handleChangeIdArea} />
									</div>
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>

						<div className='col-6 py-4'>
							<h4>SubArea</h4>
							<hr />
							<form onSubmit={this.handleSubmitSubArea}>
								<div className='form-row'>
									<div class="form-group col-sm-12 col-md-4">
										<label for="inputNomeArea">Nome</label>
										<input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o nome" value={this.state.nomeSubArea} onChange={this.handleChangeSubArea} />
									</div>
									<div class="form-group col-sm-12 col-md-4">
										<label for="inputNomeArea">Id da Area</label>
										<input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o nome" value={this.state.idArea} onChange={this.handleChangeIdSubArea} />
									</div>
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>

						<div className='col-6 py-4'>
							<h4>Especialidade</h4>
							<hr />
							<form onSubmit={this.handleSubmitEspecialidade}>
								<div className='form-row'>
									<div class="form-group col-sm-12 col-md-4">
										<label for="inputNomeArea">Nome</label>
										<input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o nome" value={this.state.nomeEspecialidade} onChange={this.handleChangeEspecialidade} />
									</div>
									<div class="form-group col-sm-12 col-md-4">
										<label for="inputNomeArea">Id da Sub Area</label>
										<input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o nome" value={this.state.idSubArea} onChange={this.handleChangeIdEspecialidade} />
									</div>
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		)
	}
}