import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const { productName, photo, price } = product

  // A API não fornece preço antigo; valor ilustrativo para seguir o layout
  const oldPrice = Math.round(price * 1.1)

  return (
    <article className={styles.card} onClick={() => onSelect(product)}>
      <img className={styles.image} src={photo} alt={productName} loading="lazy" />

      <h3 className={styles.name}>{productName}</h3>

      <p className={styles.oldPrice}>{formatPrice(oldPrice)}</p>
      <p className={styles.price}>{formatPrice(price)}</p>
      <p className={styles.installments}>ou 2x de {formatPrice(price / 2)} sem juros</p>
      <p className={styles.shipping}>Frete grátis</p>

      <button type="button" className={styles.button}>
        Comprar
      </button>
    </article>
  )
}
