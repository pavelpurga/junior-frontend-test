import React from 'react'
import './Card.css'
const Card = ({ item }) => {
  return (
    <li className="cards">
      <section className="card">
        <div className="card_cell_box">
          {item.isLimited && <p className="card_cell card_cell_limited">Limited</p>}
          {item.isNew && <p className="card_cell card_cell_new">New</p>}
        </div>
        <div className={`card_image card_image_${item.categoryType}`}></div>
        <div className="card_content">
          <p className="card_category">{item.categoryName}</p>
          <h2 className="card_text">{item.name}</h2>
          <p className="card_description">{item.description}</p>
          <div className="card_price_box">
            <p className="card_price">{`$${item.price}`}</p>
            <p className="card_discount">{item.discount && `Discount $${item.discount}  per bag`}</p>
          </div>
        </div>
      </section>
    </li>
  )
}

export default Card
