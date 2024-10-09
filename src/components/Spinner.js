import React, { Component } from 'react'
import Loading from './Laoding.gif.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Loading} alt='Loading'/>
      </div>
    )
  }
}
