import React, {Component} from 'react'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
  Alert
} from 'reactstrap'

import * as lodash from 'lodash';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coffees: {}
    };
  }

  componentDidMount() {
    this.getCoffees();
  }

  getCoffees() {
    fetch('somehitng')
      .then(results => results.json())
      .then(results => this.setState({coffees: results}));
  }

  handleClick(coffee) {
    const order = {
      name: coffee.data.name
    };
    fetch('nothing', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(order)
      })
      .then(function (response) {
        console.log(JSON.stringify(response));
        alert("Placed order: " + response)
      });
  }

  getCoffeesJsx(coffees) {
    if (!lodash.isEmpty(coffees)) {
      let coffeeList = coffees
        .coffees
        .map((coffee) => {
          return (
            <Card body>
              <CardTitle>{coffee.data.name}</CardTitle>
              <CardText>{coffee.data.description}</CardText>
              <CardText>Price: ${coffee.data.price}</CardText>
              <button onClick={() => this.handleClick(coffee)}>Order</button>
            </Card>
          );
        })
      return (
        <Row>
          <Col sm="6">
            {coffeeList}
          </Col>

        </Row>
      );
    }
  }

  render() {
    let coffees = null;
    if (!!this.state.coffees) {
      coffees = {
        ...this.state.coffees
      };
    }

    return (
      <div>
        {this.getCoffeesJsx(coffees)}

      </div>
    )
  }
}