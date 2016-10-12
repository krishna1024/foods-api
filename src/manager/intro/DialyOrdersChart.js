import React from 'react'
import Chart from 'react-c3-component';
import 'c3/c3.css';

export default class DialyOrdersChart extends React.Component {

  render() {
    return (
      <Chart
        config={{
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
            ]
          }
        }}
      />
    );
  }

}
