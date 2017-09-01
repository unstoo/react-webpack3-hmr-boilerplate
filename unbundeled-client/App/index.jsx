import React, { Component } from 'react'
import randomApiResponsePicker from '../randomApiStubChoise.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {    
    return <div>NODE_ENV: {this.props.nodeEnv}</div>
  }
}
