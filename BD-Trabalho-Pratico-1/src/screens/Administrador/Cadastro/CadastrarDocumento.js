import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class CadastrarDocumento extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cadastrou: null,
      descricao: null,
      caminho: null
    }
    this.handleChangeCaminho = this.handleChangeCaminho.bind(this);
    this.handleChangeDescricao = this.handleChangeDescricao.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDescricao(e) {
    this.setState({ descricao: e.target.value });
  }
  handleChangeCaminho(e) {
    this.setState({ caminho: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/documento/cadastrar?descricao=${this.state.descicao}&caminho=${this.state.caminho}`)
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
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>Cadastrar Documento</h4>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="inputNome">Descrição</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" value={this.state.descricao} onChange={this.handleChangeDescricao} />
                </div>
                <div class="form-group">
                  <label for="inputData">Caminho</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="link para o doc" value={this.state.caminho} onChange={this.handleChangeCaminho} />
                </div>
                <button type="submit" class="btn btn-primary my-2">Salvar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}