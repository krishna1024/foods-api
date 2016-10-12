import React from 'react'
export default class Welcome extends React.Component {

  render() {
    return (
      <nav className="green" role="navigation">
        <div className="nav-wrapper container main-container">
          <a id="logo-container" href="#" className="brand-logo">
            <i className="material-icons">restaurant</i> { this.props.title }
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Search Cusines</a></li>
            <li><a href="#">Catering</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Search Cusines</a></li>
            <li><a href="#">Catering</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }

}
