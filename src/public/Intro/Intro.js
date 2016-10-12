import React from 'react'
import Welcome from '../components/Welcome.js'
import Services from '../components/Services.js'
export default class Intro extends React.Component {

  render() {
    return (
      <div>
        <Welcome/>
        <Services/>
      </div>
    );
  }

}

