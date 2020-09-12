import React, {useState, useEffect} from 'react'
import {apiAuth} from '../utils/auth'
import Bubbles from './Bubbles'
import CardColors from './CardColors'
import ColorList from './ColorList'

const BubblePage = () => {
  const [colorList, setColorList] = useState([])

  useEffect(() => {
    apiAuth()
      .get('/colors')
      .then((res) => setColorList(res.data))
  }, [])

  console.log('colors', colorList)
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      {/* <Bubbles colors={colorList} /> */}

      {colorList.map((color) => (
        <CardColors key={color.id} colors={color} />
      ))}
    </>
  )
}

export default BubblePage
