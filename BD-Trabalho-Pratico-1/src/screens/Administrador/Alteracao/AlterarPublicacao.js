import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class AlterarPublicacao extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4 className='my-2'>Cadastar Publicação</h4>
              <hr />
              <form>
                <div class="form-group">
                  <label for="inputIdentificadorEsp">Escolha a publicação</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className='form-row'>
                  <div class="form-group col-md-6">
                    <label for="inputNome">Título</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Titulo" required />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputNome">Titulo Alternativo</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="titulo alternativo" />
                  </div>
                </div>

                <div className='form-row'>
                  <div class="form-group col-md-4">
                    <label for="inputIdentificadorEsp">Selecione Pesquisador</label>
                    <select id="inputIdentificadorEsp" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputIdioma">Idioma</label>
                    <input type="text" class="form-control" id="inputIdioma" aria-describedby="idioma" placeholder="Portugues" required />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputPais">Pais</label>
                    <input type="text" class="form-control" id="inputPais" aria-describedby="pais" placeholder="Brasil" required />
                  </div>
                </div>


                <div class="form-group">
                  <label for="inputData">Data de cadastro</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" required />
                </div>

                <div className='form-row'>
                  <div class="form-group col-md-4">
                    <label for="inputIdentificadorEsp">Area</label>
                    <select id="inputIdentificadorEsp" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputIdentificadorEsp">Agencia de Fomento</label>
                    <select id="inputIdentificadorEsp" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputIdentificadorEsp">Tipo Publicação</label>
                    <select id="inputIdentificadorEsp" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputData">Documento</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="Link para localização do documento" />
                </div>
                <div class="form-group">
                  <label for="textAreaResumo">Resumo</label>
                  <textarea class="form-control" id="textAreaResumo" rows="6"></textarea>
                </div>
                <div class="form-group">
                  <label for="inputData">Palavras-chave</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="saude, instituciona,ufsj..." required />
                </div>
                <button type="submit" class="btn btn-success m-2">Salvar</button>
                <button type="submit" class="btn btn-danger my-2 mx-4">Deletar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}