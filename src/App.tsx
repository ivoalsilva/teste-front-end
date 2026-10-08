import { ProductCard } from "./components/ProductCard/ProductCard";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Econverse</h1>
      <div style={{ display: "flex", gap: 20, padding: 40, flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.productName}
            product={product}
            onSelect={(selected) => console.log(selected)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
