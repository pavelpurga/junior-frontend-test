import ProductList from './components/ProductList/ProductList'
import Navbar from './components/Navbar/Navbar'
import { useProductList } from './components/ProductList/useProductList'

function App() {
  const { updateSearch } = useProductList()
  return (
    <div>
      <Navbar updateSearch={updateSearch} />
      <ProductList />
    </div>
  )
}

export default App
