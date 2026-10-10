import { useEffect, useId, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import styles from './ProductModal.module.scss'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { productName, descriptionShort, photo, price } = product
  const [quantity, setQuantity] = useState(1)
  const titleId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    // Trava o scroll da página enquanto o modal está aberto
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    // Fecha só se o clique foi no fundo escuro, não dentro do modal
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.close}
          aria-label="Fechar"
          onClick={onClose}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <img className={styles.image} src={photo} alt={productName} />

        <div className={styles.info}>
          <div className={styles.heading}>
            <h2 id={titleId} className={styles.name}>
              {productName}
            </h2>
            <p className={styles.price}>{formatPrice(price)}</p>
          </div>

          <div className={styles.details}>
            <p className={styles.description}>{descriptionShort}</p>
            <a href="#" className={styles.link}>
              Veja mais detalhes do produto &gt;
            </a>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button
                type="button"
                className={styles.quantityButton}
                aria-label="Diminuir quantidade"
                disabled={quantity === 1}
                onClick={() => setQuantity((current) => current - 1)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M0 7H14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              <span className={styles.quantityValue} aria-live="polite">
                {String(quantity).padStart(2, '0')}
              </span>

              <button
                type="button"
                className={styles.quantityButton}
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((current) => current + 1)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M0 7H14M7 0V14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            <button type="button" className={styles.buyButton}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
