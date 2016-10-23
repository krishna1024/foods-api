import React from 'react';

export default class Toggle extends React.Component {

  render() {
    return   <div className="switch">
      <label>
        { this.props.offText }
        <input type="checkbox" />
          <span className="lever"></span>
          { this.props.onText }
      </label>
    </div>;
  }

}
