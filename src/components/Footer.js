import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">Greeting: {props.name}</div>
    );
  }
}