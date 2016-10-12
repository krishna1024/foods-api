import React from 'react'
export default class ManageOrders extends React.Component {

  render() {
    return <section>
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content" >
            <span className="card-title">Card Title</span>
            <table className="bordered" >
              <thead>
              <tr>
                <th data-field="id">Name</th>
                <th data-field="name">Item Name</th>
                <th data-field="price">Item Price</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>$3.76</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$7.00</td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }

}
