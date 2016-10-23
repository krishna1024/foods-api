import React from 'react';
import Table from '../../../../components/Table.js'
import Toggle from '../../../../components/Toggle.js'
import { Link } from 'react-router'

export default class CateringMenusList extends React.Component {

  render() {
    return <section>
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content" >
              <span className="card-title">Catering menus</span>
              <Link className="btn pink white-text right" to="/manager/catering/menus/new" >New</Link>
              <Table
                headers = {[
                  { name: 'Name' },
                  { name: 'Placed on' },
                  { name: 'Delivered on' },
                  { name: 'Published' },
                  { name: 'View' }
                ]}
                rows = {[
                  { cells: [
                    { text: 'Simple' },
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: <Toggle onText="" offText="" ></Toggle> },
                    { text: <Link to="manager/catering/menus/3434" >View/Edit</Link> }
                  ] },{ cells: [
                    { text: 'Simple'},
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: <Toggle onText="" offText="" ></Toggle> },
                    { text: <Link to="manager/catering/menus/3434" >View/Edit</Link> }
                  ] },{ cells: [
                    { text: 'Simple'},
                    { text: '18-12-2016' },
                    { text: '18-12-2016' },
                    { text: <Toggle onText="" offText="" ></Toggle> },
                    { text: <Link to="manager/catering/menus/3434" >View/Edit</Link> }
                  ] },{ cells: [
                    { text: 'Simple'},
                    { text: '18-12-2016' },
                    { text: 'View/Edit' },
                    { text: <Toggle onText="" offText="" ></Toggle> },
                    { text: <Link to="manager/catering/menus/3434" >View/Edit</Link> }
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
