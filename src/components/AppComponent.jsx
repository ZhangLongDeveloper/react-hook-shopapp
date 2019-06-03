import React, { useState } from 'react'
import CardComponent from './CardComponent'
import _ from 'lodash'
const AppComponent = ({ data, increment, decrement, addToShop, addItem }) => {
  return (
    <div className="container">
      {data.map((it, i) => (
        <CardComponent
          increment={increment}
          decrement={decrement}
          addToShop={addToShop}
          addItem={addItem}
          id={i}
          it={it}
          key={it.key + i}
        />
      ))}
    </div>
  )
}

export default AppComponent
