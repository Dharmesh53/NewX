import loading from "./1481.gif";
import React, { Component } from 'react'

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="container text-center">
        <img src={loading} alt="..." />
      </div>
    )
  }
}

export default Spinner