import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/NavBarAdm';
export default class ListagemUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios_cadastrados: []
    }
    this.renderizaUsuarios = this.renderizaUsuarios.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  renderizaUsuarios = (props, index) => {
    return (
      <tbody key={props.cpf_usr}>
        <tr>
          <td>{props.cpf_usr}</td>
          <td>{props.nome}</td>
          <td>{props.Senha}</td>
          <td>{props.Logradouro}</td>
          <td>{props.Numero}</td>
          <td>{props.Bairro}</td>
          <td>{props.Cep}</td>
          <td>{props.Datacad}</td>
          <td>{props.DataSaida}</td>
          <td><button className='btn btn-danger' type='button' onClick={() => this.removeUsuario(index)}>Deletar</button></td>
        </tr>
      </tbody>
    )
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('http://localhost:4000/usuarios')
      .then(response => response.json())
      .then(response => this.setState({ usuarios_cadastrados: response.data }))
      .catch(error => console.error(error))
  }

  alterarusuario = (index, usuario) => {
    let deletado = usuario.splice(index, 1);
    deletado.map((dados) => console.log(dados.cpf_usr))
  }

  removeUsuario = (key) => {
    const copiaUsuarios = [...this.state.usuarios_cadastrados];
    let deletado = copiaUsuarios.splice(key, 1);
    this.setState({ usuarios_cadastrados: copiaUsuarios });

    deletado.map((dados) => console.log(dados.cpf_usr))
  }

  render() {

    return (
      <div>
        <Navbar />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Senha</th>
                    <th>Logradouro</th>
                    <th>Numero</th>
                    <th>Bairro</th>
                    <th>CEP</th>
                    <th>Data Cadastro</th>
                    <th>Data Saida</th>
                    <th>Deletar</th>
                  </tr>
                </thead>
                {this.state.usuarios_cadastrados.map((usuario, index) => this.renderizaUsuarios(usuario, index))}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}