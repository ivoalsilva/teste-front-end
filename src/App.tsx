import { useState } from "react";
import styles from "./App.module.scss";
import { Banner } from "./components/Banner/Banner";
import { Brands } from "./components/Brands/Brands";
import { Categories } from "./components/Categories/Categories";
import { Header } from "./components/Header/Header";
import { PartnerBanners } from "./components/PartnerBanners/PartnerBanners";
import { ProductModal } from "./components/ProductModal/ProductModal";
import { ProductShelf } from "./components/ProductShelf/ProductShelf";
import { useProducts } from "./hooks/useProducts";
import type { Product } from "./types/product";
import { Newsletter } from "./components/Newsletter/Newsletter";

function App() {
  const { products, isLoading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function renderShelf(options: { showTabs?: boolean; showViewAll?: boolean }) {
    if (isLoading) return <p>Carregando produtos...</p>;
    if (error) return <p>{error}</p>;

    return (
      <ProductShelf
        title="Produtos relacionados"
        products={products}
        onSelectProduct={setSelectedProduct}
        {...options}
      />
    );
  }

  return (
    <>
      <Header />

      <main>
        <Banner />

        <div className={styles.sections}>
          <Categories />
          {renderShelf({ showTabs: true })}
          <PartnerBanners />
          {renderShelf({ showViewAll: true })}
          <PartnerBanners />
          <Brands />
          {renderShelf({ showViewAll: true })}
          <Newsletter />
        </div>
      </main>

      {/* Footer */}

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
