import React from 'react'
import Table from '../../../components/Table.js'
export default class ManageOrders extends React.Component {

  render() {
    return <section>
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content" >
            <span className="card-title">Card Title</span>
              <Table
                headers = {[
                 { name: 'Order number' },
                 { name: 'Placed on' },
                 { name: 'Delivered on' },
                 { name: 'Total Bill' },
                 { name: 'Status' }
                ]}

                rows = {[
                 { cells: [
                   { text: '3699', link: '#/manager/catering/orders/3699' },
                   { text: '18-12-2016' },
                   { text: '18-12-2016' },
                   { text: '$8400' },
                   { text: 'Delivered' }
                 ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699'},
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699'},
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699'},
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699'},
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699'},
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699' },
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699' },
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699' },
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] },{ cells: [
                    { text: '3699' , link: '#/manager/catering/orders/3699' },
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: '$8400' },
                    { text: 'Delivered' }
                  ] }
                ]}

              />
            </div>
          </div>
        </div>
      </div>
    </section>;
  }

}
