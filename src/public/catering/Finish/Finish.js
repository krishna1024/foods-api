import React from 'react'
import "./_finish.scss"
import table from "./table.png";
export default class Finish extends React.Component {

    render() {
        return <section className="order-success container main-container">
            <h5 className="center green-text" >Your order has been placed successfully</h5>
            <h5 className="center green-text" ><i className="material-icons">check_circle</i></h5>
            <img src={ table } />
        </section>;
    }

}

