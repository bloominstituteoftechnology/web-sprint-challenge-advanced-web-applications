import React, {useEffect} from 'react'
import '../styles/sidebar.scss'
import ColorTabs from './ColorTabs'
import Row from 'react-bootstrap/Row'

import {useSelector, useDispatch} from 'react-redux'
import {fetchColorApi} from '../redux/actions/colorsActions'

function SideBar() {
  const colors = useSelector((state) => state.colors.colors)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchColorApi())
  }, [])
  return (
    <>
      <div className='sidebar'>
        <Row>
          {colors.map((color) => (
            <ColorTabs key={color.id} color={color} />
          ))}
        </Row>
      </div>
    </>
  )
}

export default SideBar
