import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class CadastroPublicacoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Titulo: null,
      Titulo_alternativo: null,
      DataCad: null,
      Idioma: null,
      Pais: null,
      Resumo: null,
      Palavra_chave: null,
      IdGA: null,
      IdTipoPub: null,
      IdAgenciaFomento: null,
      IdDoc: null,
      cpf_pesquisador: null,
      cpf_administrador: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
    this.handleChangeTituloAlternativo = this.handleChangeTituloAlternativo.bind(this);
    this.handleChangeDataCad = this.handleChangeDataCad.bind(this);
    this.handleChangeIdioma = this.handleChangeIdioma.bind(this);
    this.handleChangePais = this.handleChangePais.bind(this);
    this.handleChangeResumo = this.handleChangeResumo.bind(this);
    this.handleChangePalavraChame = this.handleChangePalavraChame.bind(this);
    this.handleChangeIdGA = this.handleChangeIdGA.bind(this);
    this.handleChangeIdTipoPub = this.handleChangeIdTipoPub.bind(this);
    this.handleChangeIdAgenciaFomento = this.handleChangeIdAgenciaFomento.bind(this);
    this.handleChangeIdDoc = this.handleChangeIdDoc.bind(this);
    this.handleChangeCpfPesquisador = this.handleChangeCpfPesquisador.bind(this);
    this.handleChangeCpfAdministrador = this.handleChangeCpfAdministrador.bind(this);
  }
  handleChangeTitulo(e) {
    this.setState({ Titulo: e.target.value })
  }
  handleChangeTituloAlternativo(e) {
    this.setState({ Titulo_alternativo: e.target.value })
  }
  handleChangeDataCad(e) {
    this.setState({ DataCad: e.target.value })
  }
  handleChangeIdioma(e) {
    this.setState({ Idioma: e.target.value })
  }
  handleChangePais(e) {
    this.setState({ Pais: e.target.value })
  }
  handleChangeResumo(e) {
    this.setState({ Resumo: e.target.value })
  }
  handleChangePalavraChame(e) {
    this.setState({ Palavra_chave: e.target.value })
  }
  handleChangeIdGA(e) {
    this.setState({ IdGA: e.target.value })
  }
  handleChangeIdTipoPub(e) {
    this.setState({ IdTipoPub: e.target.value })
  }
  handleChangeIdAgenciaFomento(e) {
    this.setState({ IdAgenciaFomento: e.target.value })
  }
  handleChangeIdDoc(e) {
    this.setState({ IdDoc: e.target.value })
  }
  handleChangeCpfPesquisador(e) {
    this.setState({ cpf_pesquisador: e.target.value })
  }
  handleChangeCpfAdministrador(e) {
    this.setState({ cpf_administrador: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/publicacao/cadastrar?Titulo=${this.state.Titulo}&Titulo_alternativo=${this.state.Titulo_alternativo}&DataCad=${this.state.DataCad}&Idioma=${this.state.Idioma}&Pais=${this.state.Pais}&Resumo=${this.state.Resumo}&Palavra_chave=${this.state.Palavra_chave}&IdGA=${this.state.IdGA}&IdTipoPub=${this.state.IdTipoPub}&IdAgenciaFomento=${this.state.IdAgenciaFomento}&IdDoc=${this.state.IdDoc}&cpf_pesquisador=${this.state.cpf_pesquisador}&cpf_administrador=${this.state.cpf_administrador}`)
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
              <h4 className='my-2'>Cadastar Publicação</h4>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div class="form-group col-md-6">
                    <label for="inputNome">Título</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Titulo" required value={this.state.Titulo} onChange={this.handleChangeTitulo} />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputNome">Titulo Alternativo</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="titulo alternativo" value={this.state.Titulo_alternativo} onChange={this.handleChangeTituloAlternativo} />
                  </div>
                </div>

                <div className='form-row'>
                  <div class="form-group col-md-4">
                    <label for="inputIdioma">CPF Pesquisador</label>
                    <input type="text" class="form-control" id="inputIdioma" aria-describedby="idioma" placeholder="Portugues" value={this.state.cpf_pesquisador} onChange={this.handleChangeCpfPesquisador} required />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputIdioma">Idioma</label>
                    <input type="text" class="form-control" id="inputIdioma" aria-describedby="idioma" placeholder="Portugues" value={this.state.Idioma} onChange={this.handleChangeIdioma} required />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputPais">Pais</label>
                    <input type="text" class="form-control" id="inputPais" aria-describedby="pais" placeholder="Brasil" value={this.state.Pais} onChange={this.handleChangePais} required />
                  </div>
                </div>

                <div className='form-row'>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="inputData">Data de cadastro</label>
                    <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" value={this.state.DataCad} onChange={this.handleChangeDataCad} required />
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="inputData">CPF Administrador</label>
                    <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" value={this.state.cpf_administrador} onChange={this.handleChangeCpfAdministrador} required />
                  </div>
                </div>

                <div className='form-row'>
                  <div class="form-group col-sm-12 col-md-4">
                    <label for="inputData">Area</label>
                    <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" value={this.state.IdGa} onChange={this.handleChangeIdGa} required />
                  </div>
                  <div class="form-group col-sm-12 col-md-4">
                  <label for="inputData">Agencia Fomento</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" value={this.state.IdAgenciaFomento} onChange={this.handleChangeIdAgenciaFomento} required />
                </div>
                <div class="form-group col-sm-12 col-md-4">
                  <label for="inputData">Tipo Publicação</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" value={this.state.IdTipoPub} onChange={this.handleChangeIdTipoPub} required />
                </div>
                </div>

                <div class="form-group">
                  <label for="inputData">Documento</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="Link para localização do documento" value={this.state.IdDoc} onChange={this.handleChangeIdDoc} />
                </div>
                <div class="form-group">
                  <label for="textAreaResumo">Resumo</label>
                  <textarea class="form-control" id="textAreaResumo" rows="6" value={this.state.Resumo} onChange={this.handleChangeResumo} />
                </div>
                <div class="form-group">
                  <label for="inputData">Palavras-chave</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="saude, instituciona,ufsj..." value={this.state.Palavra_chave} onChange={this.handleChangePalavraChave} required />
                </div>
                <div className='d-flex flex-row-reverse'>
                  <button type="submit" class="btn btn-warning m-2">Cancelar</button>
                  <button type="button" class="btn btn-success m-2">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}