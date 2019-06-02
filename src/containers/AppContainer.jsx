import React, { useState, useEffect } from 'react'
import AppComponent from '../components/AppComponent'
import Header from '../components/Header'

const AppContainer = () => {
  const initialState = [
    { name: 'i Phone', price: 500, key: 'iphone', count: 1 },
    { name: 'Galaxy', price: 400, key: 'galaxy', count: 1 },
    { name: 'Xiaomi', price: 560, key: 'xiaomi', count: 1 },
    { name: 'Lenovo', price: 700, key: 'LG', count: 1 },
    { name: 'Macbook', price: 1500, key: 'macbook', count: 1 },
    { name: 'Macbook', price: 1500, key: 'macbook', count: 1 },
  ]
  const [items, setItems] = useState([...initialState])

  const increment = index => {
    setItems(prevState => {
      const mutable = prevState.map((it, i) => {
        const obj = { ...it }
        if (index === i) {
          obj.count = obj.count + 1
        }
        return obj
      })
      return [...mutable]
    })
  }

  const decrement = index => {
    setItems(prevState => {
      const minus = prevState.map((it, i) => {
        const obj1 = { ...it }
        if (index === i && obj1.count > 1) {
          obj1.count = obj1.count - 1
        }
        return obj1
      })
      return [...minus]
    })
  }
  const addToShop = index => {}
  return (
    <div>
      <Header />
      <AppComponent
        data={items}
        increment={increment}
        decrement={decrement}
        addToShop={addToShop}
      />
    </div>
  )
}

export default AppContainer
