import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class CadastrarRecursosFinanceiros extends Component {
  constructor(props){
    super(props);
    this.state = {
      idArea: null,
      idSub: null,
      idGa: null,
      valor: null,
      dataCad: null,
      cpf: null
    }
    this.handleChangeIdArea = this.handleChangeIdArea.bind(this);
    this.handleChangeIdSub = this.handleChangeIdSub.bind(this);
    this.handleChangeIdGa = this.handleChangeIdGa.bind(this);
    this.handleChangeValor = this.handleChangeValor.bind(this);
    this.handleChangeDataCad = this.handleChangeDataCad.bind(this);
    this.handleChangeCpf = this.handleChangeCpf.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIdArea (e) {
    this.setState({idArea: e.target.value});
  }
  handleChangeIdSub (e) {
    this.setState({idSub: e.target.value});
  }
  handleChangeIdGa (e) {
    this.setState({idGa: e.target.value});
  }
  handleChangeValor (e) {
    this.setState({valor: e.target.value});
  }
  handleChangeDataCad(e) {
    this.setState({dataCad: e.target.value});
  }
  handleChangeCpf(e) {
    this.setState({cpf: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:4000//recursofinanceiro/cadastrar?IdArea${this.state.idArea}&IdSub=${this.state.idSub}&IdGA=${this.state.idGa}&valor=${this.state.valor}&DataCad=${this.state.dataCad}&cpf_ProReitor=${this.state.cpf}`)
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
              <h4>Cadastar Recursos Financeiros</h4>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="inputNome">Data de Cadastro</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Data Cadastro" value={this.state.dataCad} onChange={this.handleChangeDataCad} />
                </div>
                <div class="form-group">
                  <label for="inputData">Valor</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="valor em reais" value={this.state.valor} onChange={this.handleChangeValor} />
                </div>
                <div class="form-group">
                  <label for="inputNome">Grande Area</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Data Cadastro"  value={this.state.idGa} onChange={this.handleChangeIdGa} />
                </div>
                <div class="form-group">
                  <label for="inputNome">Area</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Data Cadastro" value={this.state.idArea} onChange={this.handleChangeIdArea} />
                </div>
                <div class="form-group">
                  <label for="inputNome">SubArea</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Data Cadastro" value={this.state.idSub} onChange={this.handleChangeIdSub} />
                </div>
                <div class="form-group">
                  <label for="inputData">CPF do Pro-reitor</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="valor em reais" value={this.state.cpf} onChange={this.handleChangeCpf} />
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