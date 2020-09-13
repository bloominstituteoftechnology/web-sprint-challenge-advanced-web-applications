import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Route, Switch} from 'react-router-dom'
import AddColor from './AddColor'
import Main from './Main'
import SideBar from './SideBar'

function Colors() {
  return (
    <>
      <Row className='mx-0'>
        <Col md='2'>
          <SideBar />
        </Col>
        <Col>
          <Main />
        </Col>
      </Row>
    </>
  )
}

export default Colors
