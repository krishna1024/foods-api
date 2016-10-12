import React from 'react'
import Navbar from './layout/Navbar.js';
import Footer from './layout/Footer.js';

export default class Manager extends React.Component {

  render() {
    return (
      <section>
        <Navbar title="Manange foods"/>
          <div className="container main-container">
            { this.props.children }
          </div>
        <Footer/>
      </section>
    );
  }

}
