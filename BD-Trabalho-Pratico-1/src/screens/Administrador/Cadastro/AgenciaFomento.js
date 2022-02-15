import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class AgenciaFomento extends Component {
  //http://localhost:4000/agencia/cadastrar?nome=doido&18/12/2108
  constructor(props) {
    super(props);
    this.state = {
      cadastrou: null,
      nome: null,
      data: null
    }
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeNome(e){
    this.setState({nome: e.target.value})
  }

  handleChangeData(e){
    this.setState({data: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:4000/agencia/cadastrar?nome=${this.state.nome}&data=${this.state.data}`)
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
              <h4>Cadastar Agencia de Fomento</h4>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="inputNome">Nome</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" value={this.state.nome} onChange={this.handleChangeNome} />
                </div>
                <div class="form-group">
                  <label for="inputData">Data de cadastro</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" value={this.state.data} onChange={this.handleChangeData} />
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