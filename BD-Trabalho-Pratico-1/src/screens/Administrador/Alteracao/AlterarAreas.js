import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class AlterarAreas extends Component {
  render() {
    return (
      <section>
        <Navbar />

        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <h4>Grande Area</h4>
              <hr />
              <form>
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Escolha a Area</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option selected>Choose...</option>
                </select>
                <div class="form-group">
                  <label for="inputNome">Novo nome</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                </div>
                <button type="submit" class="btn btn-primary my-2">Alterar</button>
                <button type="submit" class="btn btn-danger my-2 mx-4">Deletar</button>
              </form>
            </div>

            <div className='col-md-6 col-sm-12'>
              <h4>Area</h4>
              <hr />
              <form>
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Escolha a Area</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option selected>Choose...</option>
                </select>
                <div class="form-group">
                  <label for="inputNome">Novo nome</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                </div>
                <button type="submit" class="btn btn-primary my-2">Alterar</button>
                <button type="submit" class="btn btn-danger my-2 mx-4">Deletar</button>
              </form>
            </div>

            <div className='col-md-6 col-sm-12'>
              <h4>SubArea</h4>
              <hr />
              <form>
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Escolha a Area</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option selected>Choose...</option>
                </select>
                <div class="form-group">
                  <label for="inputNome">Novo nome</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                </div>
                <button type="submit" class="btn btn-primary my-2">Alterar</button>
                <button type="submit" class="btn btn-danger my-2 mx-4">Deletar</button>
              </form>
            </div>

            <div className='col-md-6 col-sm-12'>
              <h4>Especialidade</h4>
              <hr />
              <form>
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Escolha a Area</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option selected>Choose...</option>
                </select>
                <div class="form-group">
                  <label for="inputNome">Novo nome</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
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