import React from 'react'
export default class Checkout extends React.Component {

    render() {
        return(<section>
            <div className="row" >
                <div className="col s12">
                    <div className="card ">
                        <div className="card-content ">
                            <span className="card-title">Order information</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#/catering/order" className="btn left" >
                                <i className="material-icons left" >arrow_back</i>
                                Order
                            </a>
                            <a href="#/catering/finish" className="btn right" >
                                Confirm checkout
                                <i className="material-icons right" >arrow_forward</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
    }

}
