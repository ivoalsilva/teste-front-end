import { ProductShelf } from "./components/ProductShelf/ProductShelf";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Econverse</h1>
      <ProductShelf
        title="Produtos relacionados"
        products={products}
        onSelectProduct={(product) => console.log(product)}
        showTabs
      />
    </main>
  );
}

export default App;
