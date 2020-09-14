import React from 'react'
import '../styles/main.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'
import FavoriteSideBar from './FavoriteSideBar'

function Main({colors}) {
  return (
    <div className='main'>
      <Row>
        <Col>
          <Row className='main-row'>
            {colors?.map((color) => (
              <div
                key={color.id}
                className='color-card'
                style={{backgroundColor: color.code.hex}}
              >
                <div className='color-card-info'>
                  <h3 data-testid='color'>{color.color}</h3>
                </div>
              </div>
            ))}
          </Row>
        </Col>
        <Col md='2' className='main-favorite'>
          <FavoriteSideBar />
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors.colors,
  }
}

export default connect(mapStateToProps, null)(Main)
