import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SideBar from './SideBar'

function Colors() {
  return (
    <>
      <Row>
        <Col md='2'>
          <SideBar />
        </Col>
        <Col style={{backgroundColor: '#99ddbc'}}>Main</Col>
      </Row>
    </>
  )
}

export default Colors
