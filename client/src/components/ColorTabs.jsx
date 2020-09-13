import React, {useState, useEffect} from 'react'
import Toast from 'react-bootstrap/Toast'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import '../styles/colorTabs.scss'
import Form from 'react-bootstrap/Form'
import {ChromePicker} from 'react-color'
import * as actions from '../redux/actions/colorsActions'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import {colorsReducer} from '../redux/reducers/colorsReducer'

function ColorTabs({color}) {
  const [editColor, setEditColor] = useState(color.code.hex)
  const [colorName, setColorName] = useState(color.color)
  // const [favoriteStatus, setFavoriteStatus] = useState(favorite)

  const dispatch = useDispatch()

  const [showA, setShowA] = useState(true)
  const favorite = useSelector((state) => state.favorite)

  // const toggleShowA = () => setShowA(!showA)
  const toggleShowA = () => {
    dispatch(actions.deleteColorApi(color.id))
  }

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

  const handleSaveChanges = () => {
    console.log('edit', color.id)
    const test = {
      color: colorName,
      code: {
        hex: editColor,
      },
      id: color.id,
    }
    dispatch(actions.updateColorApi(test))
    setShow(false)
  }

  const handleFavoriteChanges = () => {
    dispatch(actions.toggleFavoriteColor(color.id))
    // setFavoriteStatus(!favoriteStatus)
  }

  useEffect(() => {}, [color])
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
          <small onClick={handleFavoriteChanges} style={{color: 'red'}}>
            {color.favorite ? <AiFillHeart /> : <AiOutlineHeart />}{' '}
          </small>
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
          <Button variant='primary' onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ColorTabs
