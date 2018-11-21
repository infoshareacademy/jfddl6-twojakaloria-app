import React from 'react'
import Button from './Button'
import { Row, Col } from 'react-flexbox-grid'

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col lg={1}>        <Button
          label={'s'}
        /></Col>
          <Col lg={1}><Button
          label={'a'}
        /></Col>
          <Col lg={1}><Button
          label={'a'}

        /></Col>
        </Row>

        
        
      </div>

    )
  }
}


export default Dashboard