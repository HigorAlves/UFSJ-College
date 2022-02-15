import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class CadastroTipoPublicacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: null,
      cadastrou: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ tipo: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/tipopublicacao/cadastrar?tipo=${this.state.tipo}`)
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
          <h4>Cadastro Tipo Publicação</h4>
          <div className='row'>
            <div className='col-sm-12'>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="inputNome">Nome</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" value={this.state.tipo} onChange={this.handleChange} />
                </div>
                <button type="submit" class="btn btn-primary my-2">Cadastrar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}