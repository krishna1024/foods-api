import React from 'react'
export default class Welcome extends React.Component {

  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center green-text">Foods Catering</h1>
          <div className="row center">
            <h5 className="header col s12 light">An Application made with HTTP JSON API and Redux with React</h5>
          </div>
          <div className="row center">
            <a href="#/catering/select" id="download-button"
               className="btn-large waves-effect waves-light green">Select Menu</a>
          </div>
          <br/><br/>
        </div>
      </div>
    )
  }

}
