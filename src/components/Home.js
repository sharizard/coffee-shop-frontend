import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row, Alert } from 'reactstrap'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.getCoffees();
  }

  getCoffees() {
    fetch('https://randomuser.me/api/')
    .then(results => results.json())
    .then(results => this.setState({ person: results }));
  }

  addOrder(order) {
    fetch('https://api.github.com/gists', {
      method: 'post',
      body: JSON.stringify(order)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      // noe
    });
  }

  render () {
    const style = {
      border: "1px solid"
    }
    return (
      <div>
        <Row>
          <Col sm="6">
            <Card body className={style}>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}