import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class AlterarDocumento extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h4>Alterar Documento</h4>
							<hr />
							<form>
								<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Escolha o Documento</label>
								<select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
									<option selected>Choose...</option>
								</select>
								<div class="form-group">
									<label for="inputNome">Descrição</label>
									<input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
								</div>
								<div class="form-group">
									<label for="inputData">Caminho</label>
									<input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="link para o doc" />
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
								<button type="submit" class="btn btn-danger my-2 mx-4">Deletar</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}