// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import News from './components/News'

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div>
       <Navbar/>
       <News/>
      </div>
    )
  }
}
