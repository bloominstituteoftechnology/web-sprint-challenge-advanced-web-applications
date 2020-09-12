import React, {useState} from 'react'
import Toast from 'react-bootstrap/Toast'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import '../styles/colorTabs.scss'
import Form from 'react-bootstrap/Form'
import {ChromePicker} from 'react-color'

function ColorTabs({color}) {
  const [editColor, setEditColor] = useState(color.code.hex)
  const [colorName, setColorName] = useState(color.color)

  const [showA, setShowA] = useState(true)

  const toggleShowA = () => setShowA(!showA)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  //   const handleShow = () => setShow(true)

  const editModal = () => setShow(true)

  const handleColorChange = (e) => {
    setEditColor(e.hex)
  }
  const handleColorChangeName = (e) => {
    setColorName(e.target.value)
  }

  const handleChangeComplete = () => {
    console.log('handleChangeComplete Done')
  }

  console.log('new', editColor)
  return (
    <div
      style={{
        width: '100%',
        padding: ' 10px 25px',
        backgroundColor: 'transparent',
      }}
      className='sideBarTabs'
    >
      <Toast
        show={showA}
        onClose={toggleShowA}
        delay={3000}
        style={{backgroundColor: editColor}}
      >
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
          <strong className='mr-auto'>{color.color}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body onClick={editModal}>{editColor}</Toast.Body>
      </Toast>

      <Modal
        show={show}
        onHide={handleClose}
        style={{backgroundColor: editColor}}
      >
        <Modal.Header closeButton>
          <Modal.Title>{colorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <ChromePicker
                color={editColor}
                onChange={handleColorChange}
                onChangeComplete={handleChangeComplete}
                name='hex'
              />
            </Col>
            <Col>
              <h3>Color Name</h3>
              <Form>
                <Form.Group>
                  <Form.Control
                    type='text'
                    placeholder='Custome Name'
                    name='color'
                    value={colorName}
                    onChange={handleColorChangeName}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ColorTabs
