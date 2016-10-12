import React from 'react'
export default class CustomizeMenu extends React.Component {

  render() {
    return <section>
      <div className="row">
        <div className="col s8 ">
          <div className="card ">
            <div className="card-content ">
              <span className="card-title">Silver Rate card</span>
              <div>
                <input id="people" type="text"/>
                <label htmlFor="people">Number of people</label>
              </div>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#/catering/select" className="btn"><i className="material-icons left">arrow_back</i>Select Menu
              </a>
            </div>
          </div>
        </div>
        <div className="col s4 ">
          <div className="card ">
            <div className="card-content ">
              <span className="card-title thin">Silver Rate card</span>
              <ul className="collection">
                <li className="collection-item">Rice <span className="left">10g x </span></li>
                <li className="collection-item">Pappu <span className="left">10g x </span></li>
                <li className="collection-item">Curd <span className="left">10g x </span></li>
                <li className="collection-item">Kaja <span className="left">10g x </span></li>
              </ul>

            </div>
            <div className="card-action center">
              <a href="#/catering/order" className="btn">
                Place order
                <i className="material-icons right">arrow_forward</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}
