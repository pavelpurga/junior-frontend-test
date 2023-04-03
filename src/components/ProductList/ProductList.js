import React from 'react'
import './ProductList.css'
import Card from '../Card/Card'
const ProductList = ({ items }) => {
  return (
    <section className="cards">
      <ul className="cards_list">
        {items?.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}

export default ProductList
