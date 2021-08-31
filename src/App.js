import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  name = "My Name is Ved";
  render() {
    return (
      <div>
        {this.name}
      </div>
    )
  }
}