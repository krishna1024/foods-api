import React from 'react'
import Navbar from './layout/Navbar.js'
import Footer from './layout/Footer.js'

export default class Public extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <Navbar title="Foods"/>
                </header>
                  <div>
                      { this.props.children }
                  </div>
                <Footer/>
            </div>
        );
    }

}