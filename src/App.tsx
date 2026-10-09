import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { ProductModal } from "./components/ProductModal/ProductModal";
import { ProductShelf } from "./components/ProductShelf/ProductShelf";
import { useProducts } from "./hooks/useProducts";
import type { Product } from "./types/product";

function App() {
  const { products, isLoading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />

      <main>
        <Banner />

        {isLoading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <ProductShelf
            title="Produtos relacionados"
            products={products}
            onSelectProduct={setSelectedProduct}
            showTabs
          />
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          key={selectedProduct.productName}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;
