import React, { useState } from 'react'
import './Navbar.css'
const Navbar = ({ updateSearch }) => {
  const [searchVisible, setSearchVisible] = useState('')
  const changeSearch = e => {
    setSearchVisible(e.target.value)
    updateSearch(e.target.value)
  }
  return (
    <header className="header">
      <h3 className="header_title">Products</h3>
      <div className="header_search">
        <span className="header_search_image"></span>
        <input
          className="header_search_input"
          type="text"
          placeholder="Search among products"
          value={searchVisible}
          onChange={changeSearch}
        />
      </div>
    </header>
  )
}

export default Navbar
