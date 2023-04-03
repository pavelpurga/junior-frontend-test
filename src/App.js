import ProductList from './components/ProductList/ProductList'
import Navbar from './components/Navbar/Navbar'
import { useProductList } from './components/ProductList/useProductList'
import Filters from './components/FiltersandCategory/Filters'

function App() {
  const { items, filter, updateFilter, resetFilter, updateSearch } = useProductList()
  return (
    <div>
      <Navbar updateSearch={updateSearch} />
      <Filters filter={filter} updateFilter={updateFilter} resetFilter={resetFilter} />
      <ProductList items={items} />
      <ProductList />
    </div>
  )
}

export default App
