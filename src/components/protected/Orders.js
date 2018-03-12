import React, { Component } from 'react'
import * as firebase from 'firebase';
import _ from 'lodash'

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    let orders = firebase.firestore().collection("orders");
    orders.onSnapshot(coll => {
      var newOrders = [];
      coll.forEach(doc => {
        newOrders.push(doc.data());
      });
      this.setState({data: newOrders});
    })
  }

  renderOrders() {
  
  }

  removeOrder(name) {
    let orders = firebase.firestore().collection("orders");

    orders.where("name", "==", name)
    .onSnapshot(coll => {
      coll.forEach(doc => {
        doc.ref.delete().then(() => {
          alert("Document deleted!");
        }).catch((error) => {
          alert("Something happened during deletion");
        })
      })
    })
  }
  

  render () {
    const orders = this.state.data;
    console.log(orders)
    return (
      <div>
        <h1>Orders</h1>
        <ul>
            {_.map(orders, (order, i) => {
              console.log(order);
              return <li key={i}>{order.name} <button onClick={() => this.removeOrder(order.name)}>Remove</button></li>
            })}
          </ul>
      </div>
    )
  }
}

export default Orders;