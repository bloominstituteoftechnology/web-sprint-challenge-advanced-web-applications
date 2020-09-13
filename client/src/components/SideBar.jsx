import React, {useEffect} from 'react'
import '../styles/sidebar.scss'
import ColorTabs from './ColorTabs'
import Row from 'react-bootstrap/Row'

import {useSelector, useDispatch} from 'react-redux'
import {fetchColorApi} from '../redux/actions/colorsActions'

function SideBar() {
  const dispatch = useDispatch()
  const [sideBarColor, setSideBarColor] = React.useState([])
  const colors = useSelector((state) => state.colors.colors)

  useEffect(() => {
    dispatch(fetchColorApi())
    setSideBarColor(colors)
  }, [sideBarColor])

  console.log('colors from sidebar', colors)
  return (
    <>
      <div className='sidebar'>
        {colors?.map((color) => (
          <ColorTabs key={color.id} color={color} />
        ))}
      </div>
    </>
  )
}

export default SideBar
