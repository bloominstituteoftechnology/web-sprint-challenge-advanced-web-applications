import React, {useState} from 'react'
import '../styles/addcolor.scss'
import SideBar from './SideBar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import {PhotoshopPicker} from 'react-color'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useDispatch} from 'react-redux'
import * as actions from '../redux/actions/colorsActions'
import {useHistory} from 'react-router-dom'

function AddColor() {
  const [editColor, setEditColor] = useState('')
  const [colorName, setColorName] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const handleColorChange = (e) => {
    setEditColor(e.hex)
  }

  const handleColorName = (e) => {
    setColorName(e.target.value)
  }

  const handleChangeComplete = () => {
    console.log('handleChangeComplete Done')
  }

  const handleAddNewColor = (e) => {
    e.preventDefault()
    const newColor = {
      color: colorName,
      code: {
        hex: editColor,
      },
      id: Date.now(),
      favorite: false,
    }
    dispatch(actions.addNewColorApi(newColor))
    history.push('/colors')
  }
  return (
    <>
      <Row className='mx-0'>
        <Col md='2'>
          <SideBar />
        </Col>
        <h1 className='add-color-title'>New Color</h1>

        <Col md='4'>
          <div className='addcolor-card'>
            <PhotoshopPicker
              color={editColor}
              onChange={handleColorChange}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        </Col>

        <Col className='addcolor d-flex  align-items-center'>
          <div
            className='addcolor-box d-flex  align-items-center justify-content-center flex-column'
            style={{backgroundColor: editColor}}
          >
            <h4>{editColor}</h4>
            <form className='add-form' onSubmit={handleAddNewColor}>
              <Form.Group className='add-form'>
                <Form.Control
                  className='add-form'
                  type='text'
                  name='color'
                  value={colorName}
                  placeholder='Color Name'
                  onChange={handleColorName}
                />
              </Form.Group>
              <Button type='submit' block>
                Save Color
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AddColor
