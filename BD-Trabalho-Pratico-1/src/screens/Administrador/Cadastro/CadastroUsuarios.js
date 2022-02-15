import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf_usr: null,
      nome: null,
      senha: null,
      logradouro: null,
      numero: null,
      bairro: null,
      cep: null,
      dataNascimento: null,
      datacad: null,
      cod_cidade: null,
      tipoUsuario: null,
      cadastrou: null
    }

    this.handleChangeCpf = this.handleChangeCpf.bind(this);
    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.handleChangeLogradouro = this.handleChangeLogradouro.bind(this);
    this.handleChangeNumero = this.handleChangeNumero.bind(this);
    this.handleChangeBairro = this.handleChangeBairro.bind(this);
    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleChangeDataNascimento = this.handleChangeDataNascimento.bind(this);
    this.handleChangeDataCad = this.handleChangeDataCad.bind(this);
    this.handleChangeDataCodCidade = this.handleChangeDataCodCidade.bind(this);
    this.handleChangeDataTipoUsuario = this.handleChangeDataTipoUsuario.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCpf(event) {
    this.setState({ cpf_usr: event.target.value });
  }
  handleChangeNome(event) {
    this.setState({ nome: event.target.value });
  }
  handleChangeSenha(event) {
    this.setState({ senha: event.target.value });
  }
  handleChangeLogradouro(event) {
    this.setState({ logradouro: event.target.value });
  }
  handleChangeNumero(event) {
    this.setState({ numero: event.target.value });
  }
  handleChangeBairro(event) {
    this.setState({ bairro: event.target.value });
  }
  handleChangeCep(event) {
    this.setState({ cep: event.target.value });
  }
  handleChangeDataNascimento(event) {
    this.setState({ dataNascimento: event.target.value });
  }

  handleChangeDataCad(event) {
    this.setState({ datacad: event.target.value })
  }
  handleChangeDataCodCidade(event) {
    this.setState({ cod_cidade: event.target.value })
  }
  handleChangeDataTipoUsuario = (event) => {
    console.log(event)
    this.setState({ tipoUsuario: event })
  }

  handleSubmit(event) {
    event.preventDefault();
    let dataCadastro = new Date();
    fetch(`http://localhost:4000/usuarios/cadastrar?cpf_usr=${this.state.cpf_usr}&nome=${this.state.nome}&Senha=${this.state.senha}&Logradouro=${this.state.logradouro}&Numero=${this.state.numero}&Bairro=${this.state.bairro}&Cep=${this.state.cep}&Datacad=${this.state.dataCadastro}&DataNasc=${this.state.dataNascimento}&Cod_cidade=${this.state.cod_cidade}&idTipoUsuario=${this.state.tipoUsuario}`)
      .then(response => response.json())
      .then(() => {
        this.setState({ cadastrou: true })
        console.log(this.state.cadastrou);
      })
      .catch(error => {
        console.log(error, ' Não foi possivel cadastrar');
        this.setState({ cadastrou: false });
      });
  }

  render() {
    let mensagem;
    if (this.state.cadastrou === true) {
      mensagem = (
        <div class="alert alert-success" role="alert">
          Usuario {this.state.nome} cadastrado com sucesso!
        </div>
      )
    }
    if (this.state.cadastrou === false) {
      mensagem = (
        <div class="alert alert-danger" role="alert">
          Usuario {this.state.nome} não foi cadastrado!
        </div>
      )
    }

    return (
      <section>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className="w-400 mw-100 p-6">
                <h5 className="mb-7 py-3">Cadastre um Usuario</h5>
                {mensagem}
                <form onSubmit={this.handleSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCpf">CPF</label>
                      <input type="text" class="form-control" id="inputCpfg" placeholder="CPF" mask={'00/00/00'} value={this.state.cpf_usr} onChange={this.handleChangeCpf} required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputNome">Nome Completo</label>
                      <input type="text" class="form-control" id="inputNome" placeholder="Nome Completo" value={this.state.nome} onChange={this.handleChangeNome} required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputSenha">Senha</label>
                      <input type="password" class="form-control" id="inputSenha" placeholder="Senha" value={this.state.senha} onChange={this.handleChangeSenha} required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputLogradouro">Logradouro</label>
                      <input type="text" class="form-control" id="inputLogradouro" placeholder="Logradouro" value={this.state.logradouro} onChange={this.handleChangeLogradouro} required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="inputNumero">Numero</label>
                      <input type="text" class="form-control" id="inputNumero" value={this.state.numero} onChange={this.handleChangeNumero} required />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputBairro">Bairro</label>
                      <input type="text" class="form-control" id="inputBairro" value={this.state.bairro} onChange={this.handleChangeBairro} />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputCep">CEP</label>
                      <input type="text" class="form-control" id="inputCep" value={this.state.cep} onChange={this.handleChangeCep} />
                    </div>
                  </div>

                  <div className='form-row'>
                    <div class="form-group col-md-6">
                      <label for="inputDataNascimento">Data Nascimento</label>
                      <input type="text" class="form-control" id="inputData" value={this.state.dataNascimento} onChange={this.handleChangeDataNascimento} />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputDataNascimento">Codigo Cidade</label>
                      <input type="text" class="form-control" id="inputData" value={this.state.cod_cidade} onChange={this.handleChangeDataCodCidade} />
                    </div>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={() => { this.setState({ tipoUsuario: 1 }) }} value='1' />
                    <label class="form-check-label" for="inlineRadio1">Administrador</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" onClick={() => this.setState({ tipoUsuario: 2 })} />
                    <label class="form-check-label" for="inlineRadio2">Pro-Reitor</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" onClick={() => { this.setState({ tipoUsuario: 3 }) }} />
                    <label class="form-check-label" for="inlineRadio3">Pesquisador</label>
                  </div>
                  <br />
                  <button type="submit" class="btn btn-success my-2">Cadastrar</button>
                </form>

              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}