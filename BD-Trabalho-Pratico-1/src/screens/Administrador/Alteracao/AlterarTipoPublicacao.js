import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class AlterarTipoPublicacao extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className='container'>
          <h4>Cadastro Tipo Publicação</h4>
          <div className='row'>
            <div className='col-12'>
              <hr />
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Escolha Tipo de Publicação</label>
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Choose...</option>
              </select>
              <form>
                <div className='form-row'>
                  <div class="form-group col-md-6 col-sm-12">
                    <label for="inputNome">Nome</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                  </div>
                  <div class="form-group col-md-6 col-sm-12">
                    <label for="inputNomeArea">CPF</label>
                    <input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o CPF" />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary my-2">Alterar</button>
                <button type="submit" class="btn btn-danger my-2 mx-4">Deletar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}