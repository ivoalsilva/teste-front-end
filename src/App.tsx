import { useState } from 'react'
import { ProductModal } from './components/ProductModal/ProductModal'
import { ProductShelf } from './components/ProductShelf/ProductShelf'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

function App() {
  const { products, isLoading, error } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <main>
      <h1>Econverse</h1>
      <ProductShelf
        title="Produtos relacionados"
        products={products}
        onSelectProduct={setSelectedProduct}
        showTabs
      />

      {selectedProduct && (
        <ProductModal
          key={selectedProduct.productName}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  )
}

export default App
