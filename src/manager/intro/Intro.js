import React from 'react'
import DialyOrdersChart from "./DialyOrdersChart.js"
import PendingOrderChart from "./PendingOrdersChart.js"


import 'c3/c3.css';

export default class Intro extends React.Component {

  render() {
    return (
      <section>
        <div className="row" >
          <div className="col s12" >
            <div className="card">
              <div className="card-content">
                <span className="card-title">Catering orders</span>
                <a
                  href="#/manager/catering/orders"
                  className="btn pink right">
                  View orders
                </a>
                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                <div className="row" >
                  <div className="col s12 m6" >
                    <DialyOrdersChart/>
                    <h5 className="purple-text" >Received today  <span>20</span></h5>
                  </div>
                  <div className="col s12 m6" >
                    <PendingOrderChart/>
                    <ul className="collection">
                      <li className="collection-item purble-text">
                        Total recevied
                        <span>500</span>
                        <a href="#" className="right">View</a>
                      </li>
                      <li className="collection-item crayon-text">
                        Total served
                        <span>500</span>
                        <a href="#" className="right">View</a>
                      </li>
                      <li className="collection-item pink-text"><i className="material-icons left">alarm_on</i>Pending <span>50</span>
                        <a href="#" className="right">View</a>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col s6" >
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div className="col s6" >
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
