import { useState } from "react";
import type { Product } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./ProductShelf.module.scss";

const TABS = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];

// Largura do card (304) + espaço entre os cards (18)
const CARD_STEP = 322;
const VISIBLE_CARDS = 4;

const arrowIcon = (
  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" aria-hidden="true">
    <path d="M7 1L1.5 6.5L7 12" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

interface ProductShelfProps {
  title: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  showTabs?: boolean;
  showViewAll?: boolean;
}

export function ProductShelf({
  title,
  products,
  onSelectProduct,
  showTabs = false,
  showViewAll = false,
}: ProductShelfProps) {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [firstVisible, setFirstVisible] = useState(0);
  const lastStart = Math.max(products.length - VISIBLE_CARDS, 0);

  function move(direction: 1 | -1) {
    // Limita entre o primeiro card e o último "grupo" possível
    setFirstVisible((current) =>
      Math.min(Math.max(current + direction, 0), lastStart),
    );
  }

  return (
    <section className={styles.shelf}>
      <SectionTitle title={title} />

      {showTabs && (
        <ul className={styles.tabs}>
          {TABS.map((tab) => (
            <li key={tab} className={styles.tabItem}>
              <button
                type="button"
                className={`${styles.tab} ${tab === activeTab ? styles.active : ""}`}
                aria-pressed={tab === activeTab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      )}

      {showViewAll && (
        <a href="#" className={styles.viewAll}>
          Ver todos
        </a>
      )}

      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          aria-label="Ver produtos anteriores"
          disabled={firstVisible === 0}
          onClick={() => move(-1)}
        >
          {arrowIcon}
        </button>

        <div className={styles.viewport}>
          <ul
            className={styles.list}
            style={{ transform: `translateX(-${firstVisible * CARD_STEP}px)` }}
          >
            {products.map((product, index) => {
              const isVisible =
                index >= firstVisible && index < firstVisible + VISIBLE_CARDS;

              return (
                <li
                  key={product.productName}
                  className={`${styles.item} ${isVisible ? styles.visible : ""}`}
                >
                  <ProductCard product={product} onSelect={onSelectProduct} />
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label="Ver próximos produtos"
          disabled={firstVisible === lastStart}
          onClick={() => move(1)}
        >
          {arrowIcon}
        </button>
      </div>
    </section>
  );
}
