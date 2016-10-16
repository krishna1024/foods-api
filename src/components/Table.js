import React from "react"

export default class Table extends React.Component {

  render() {
    return (
      <table>
      <thead>
        <tr>
          { this.props.headers.map( ( header,index ) => {
            return <th key={ index } >{ header.name }</th>;
          } ) }
        </tr>
      </thead>
      <tbody>
      { this.props.rows.map( ( row,index ) => {
        return <tr key={ index } >{
          row.cells.map( ( cell,index ) => {
            return <td key={ index } >{ this.getTdContent(cell) }</td>;
          })
        }</tr>;
      } ) }
      </tbody>
    </table> )

  }

  getTdContent(cell) {
    return cell.link ? <a href={ cell.link } >{ cell.text } </a> : cell.text;
  }

}