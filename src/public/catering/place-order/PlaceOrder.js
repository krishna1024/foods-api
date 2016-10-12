import React from 'react'
export default class PlaceOrder extends React.Component {

    render() {
        return <section>
            <div className="row" >
                <div className="col s8 ">
                    <div className="card ">
                        <div className="card-content ">
                            <span className="card-title">Order information</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#/catering/customize" className="btn" ><i className="material-icons left">arrow_back</i>Customize menu</a>
                        </div>
                    </div>
                </div>
                <div className="col s4 ">
                    <div className="card ">
                        <div className="card-content ">
                            <span className="card-title">Your Order</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#/catering/checkout" className="btn">
                                Proceed to checkout
                                <i className="material-icons right" >arrow_forward</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }

}
