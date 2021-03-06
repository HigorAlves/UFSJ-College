import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';
import { USERS, DEPARTAMENTO, DOCUMENTO, AREA, AGENCIA, RECURSOS, PUBLICACAO } from '../../lib/fontAwesome';
import { Link } from 'react-router-dom';


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: null
    }
  }

  componentWillMount() {
    let usuario = localStorage.getItem('nome');
    this.setState({ usuario });
  }

  render() {
    return (
      <section>
        <Navbar />
        <div className={'container header'}>
          <div className={'row centralizado'}>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div class="alert alert-primary" role="alert">
                Bem vindo {this.state.usuario}!
							</div>

              <section>
                <h4>Area de Cadastramento</h4>
                <hr />
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/cadastrarusuarios'} className='text-dark'>Cadastrar Usuario</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <AREA />
                      <br />
                      <Link to={'/cadastrarGrandesAreas'} className='text-dark'>Cadastrar Areas</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <AGENCIA />
                      <br />
                      <Link to={'/cadastraragenciafomento'} className='text-dark'>Cadastrar Agencia Fomento</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <RECURSOS />
                      <br />
                      <Link to={'/cadastrarrecursosfinanceiros'} className='text-dark'>Cadastrar Recursos Financeiros</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <DOCUMENTO />
                      <br />
                      <Link to={'/cadastrardocumento'} className='text-dark'>Cadastrar Documento</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <PUBLICACAO />
                      <br />
                      <Link to={'/cadastrarpublicacao'} className='text-dark'>Cadastrar Publica????o</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <PUBLICACAO />
                      <br />
                      <Link to={'/cadastratipopublicacao'} className='text-dark'>Cadastrar Tipo Publica????o</Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className='my-4'>
                <h4>Area Altera????o</h4>
                <hr />
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/alterarusuario'} className='text-dark'>Alterar Usuario</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <AREA />
                      <br />
                      <Link to={'/alterarareas'} className='text-dark'>Alterar Areas</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <AGENCIA />
                      <br />
                      <Link to={'/alteraragenciafomento'} className='text-dark'>Alterar Agencia Fomento</Link>
                    </div>
                    
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <RECURSOS />
                      <br />
                      <Link to={'/alterarrecursofinanceiro'} className='text-dark'>Alterar Recurso Financeiro</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <DOCUMENTO />
                      <br />
                      <Link to={'/alterardocumento'} className='text-dark'>Alterar Documento</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <PUBLICACAO />
                      <br />
                      <Link to={'/alterarpublicacao'} className='text-dark'>Alterar Alterar Publica????o</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <PUBLICACAO />
                      <br />
                      <Link to={'/alterartipopublicacao'} className='text-dark'>Alterar Tipo de Publica????o</Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className='my-4'>
                <h4>Consultas</h4>
                <hr />
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/listarusuarios'} className='text-dark'>Listar Usuarios</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/recursosliberados'} className='text-dark'>Recursos Liberados</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta2'} className='text-dark'>Valor total disponibilizado por Grande ??rea</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta3'} className='text-dark'>Valor total disponibilizado para ??rea</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta4'} className='text-dark'>Valor total disponibilizado para Sub??rea</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta5'} className='text-dark'>Quantidade de Publica????es cadastradas por per??odo</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta6'} className='text-dark'>Quantidade de Publica????es por Ag??ncia de Fomento e por per??odo</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta7'} className='text-dark'>Quantidade de publica????es por Grande ??rea e por per??odo</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta8'} className='text-dark'>Publica????es por autor</Link>
                    </div>
                    <div className='col-md-2 col-sm-12 text-center m-2'>
                      <USERS />
                      <br />
                      <Link to={'/consulta9'} className='text-dark'>Exibir todos os as grandes ??reas de conhecimento, suas respectivas ??reas e sub??reas e especialidades
</Link>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/*Sidebar com as op??es escolhidas*/}
            <div className={'col-lg-3 col-md-3 col-sm-3 d-none d-sm-none d-lg-block'}>
            </div>
          </div>
        </div>
      </section>
    )
  }
}