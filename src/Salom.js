import React, { useState } from 'react'

const Salom = () => {
  const items = ['New york', 'Paris', 'London', 'Egypt', 'Arabia', 'Uzbekistan']
  const [indexValue, setIndexValue] = useState(0)
  return (
    <>
      <h1>No list</h1>
      <ul className='list-group'>
        {items.map((item, index) => (
          <li className={indexValue == index ? 'list-group-item' : ''} key={item} onClick={setIndexValue()}>{item}</li>
        ))}
      </ul>
    </>

  )
}

export default Salom