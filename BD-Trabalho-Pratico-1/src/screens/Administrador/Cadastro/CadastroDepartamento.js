import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class CadastroDepartamento extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>Cadastar Departamento</h4>
              <hr />
              <form>
                <div class="form-group">
                  <label for="inputNome">Nome do Departamento</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                </div>
                <div class="form-group">
                  <label for="inputData">Data de cadastro</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="YYYY/MM/DD" />
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