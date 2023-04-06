import React, { useEffect, useState } from 'react'
import './Filters.css'
const Filters = ({ filter, updateFilter, resetFilter }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetch('/api/category')
      .then(res => res.json())
      .then(categories => setCategories(categories))
      .catch(err => {
        console.log(err)
      })
    return () => {
      setCategories([])
    }
  }, [])
  const handleFilterIsNewUpdater = () => updateFilter({ isNew: !filter.isNew })
  const handleFilterIsLimitedUpdater = () => updateFilter({ isLimited: !filter.isLimited })
  const handleCategorySelect = categoryId => (updateFilter({ category: [categoryId] }), setSelectedCategory(categoryId))
  const handleCategoryAll = () => (resetFilter(), setSelectedCategory('All'))
  return (
    <section className="filters">
      <div className="filters_box">
        <div className="filters_title">
          <span className="filters_title_image"></span>
          <h2 className="filters_title_text">Filters</h2>
        </div>
        <div className="filters_unit">
          <div className="filters_category category">
            <h2 className="category_text">Category</h2>
            <div className="category_category">
              <button
                className={`category_button ${selectedCategory === 'All' ? 'category_button_active' : ''} `}
                onClick={handleCategoryAll}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category_button ${selectedCategory === category.id ? 'category_button_active' : ''}`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="filters_status status">
            <h2 className="status_text">Status</h2>
            <div className="status_unit">
              <div>
                <input
                  className="status_checkbox"
                  id="is_limited"
                  type="checkbox"
                  onChange={handleFilterIsLimitedUpdater}
                  checked={filter.isLimited}
                />
                <label htmlFor="is_limited">Limited</label>
              </div>
              <div>
                <input
                  className="status_checkbox"
                  id="is_new"
                  type="checkbox"
                  onChange={handleFilterIsNewUpdater}
                  checked={filter.isNew}
                />
                <label htmlFor="is_new">New</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filters
