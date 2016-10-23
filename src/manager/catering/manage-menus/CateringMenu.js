import React from 'react';
import CateringMenuList from './catering-menus-list/CateringMenusList.js'

export default class CateringMenu extends React.Component {

  render() {
    return <div>{ this.props.children } </div>;
  }
  
}
