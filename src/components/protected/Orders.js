import React, { Component } from 'react'
import {firestore} from '../../config/constants'

export default class Orders extends Component {

  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
    
  }
  

  render () {
    return (
      <div>
        Dashboard. This is a protected route. You can only see this if you're authed.
      </div>
    )
  }
}