import React from 'react'

const Cart = ({ products, onclear }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {products?.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <button onClick={onclear}>remove all</button>
    </div>
  )
}

export default Cart
