import React from 'react'
import WizardBreadCrumb from './components/WizardBreadCrumb.js'
export default class Catering extends React.Component {

    constructor(props){
        super(props);
        this.breadCrumb = [
            "select",
            "customize",
            "order",
            "checkout",
        ]
    }
    updateBreadCrumb() {

    }

    render() {
        return (
          <div className="container main-container">
            <section>
                <header>
                    <WizardBreadCrumb
                      stages={
                          [
                              {name: 'Select Menu', id: 'select'},
                              {name: 'Customize Menu', id: 'customize'},
                              {name: 'Place Order', id: 'order'},
                              {name: 'Checkout', id: 'checkout'}
                          ]
                      }
                      currentStage= { this.props.currentState }
                    />
                </header>
                <div>
                    { this.props.children }
                </div>
            </section>
            </div>
        );
    }

}
