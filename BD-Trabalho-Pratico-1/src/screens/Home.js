import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className={'container header'}>
          <div className={'row centralizado'}>
            <div className="col-lg-9 col-md-7 col-sm-5">
              <div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
							</div>
              <Posts />
            </div>

            {/*Sidebar com as opões escolhidas*/}
            <div className={'col-lg-3 col-md-3 col-sm-3 d-none d-sm-none d-lg-block'}>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    )
  }
}