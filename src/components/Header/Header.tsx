import logo from '../../assets/logo.svg'
import boxIcon from '../../assets/icons/box.svg'
import cardIcon from '../../assets/icons/card.svg'
import cartIcon from '../../assets/icons/cart.svg'
import crownIcon from '../../assets/icons/crown.svg'
import heartIcon from '../../assets/icons/heart.svg'
import searchIcon from '../../assets/icons/search.svg'
import shieldIcon from '../../assets/icons/shield.svg'
import truckIcon from '../../assets/icons/truck.svg'
import userIcon from '../../assets/icons/user.svg'
import styles from './Header.module.scss'

const BENEFITS = [
  {
    icon: shieldIcon,
    content: (
      <>
        Compra <strong>100% segura</strong>
      </>
    ),
  },
  {
    icon: truckIcon,
    content: (
      <>
        <strong>Frete grátis</strong> acima de R$ 200
      </>
    ),
  },
  {
    icon: cardIcon,
    content: (
      <>
        <strong>Parcele</strong> suas compras
      </>
    ),
  },
]

const ACTIONS = [
  { icon: boxIcon, label: 'Meus pedidos' },
  { icon: heartIcon, label: 'Favoritos' },
  { icon: userIcon, label: 'Minha conta' },
  { icon: cartIcon, label: 'Carrinho' },
]

const CATEGORIES = [
  { label: 'Todas categorias' },
  { label: 'Supermercado' },
  { label: 'Livros' },
  { label: 'Moda' },
  { label: 'Lançamentos' },
  { label: 'Ofertas do dia', highlight: true },
]

export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.benefits}>
        {BENEFITS.map((benefit) => (
          <li key={benefit.icon} className={styles.benefit}>
            <img src={benefit.icon} alt="" />
            <span>{benefit.content}</span>
          </li>
        ))}
      </ul>

      <div className={styles.main}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Econverse" width={139} />
        </a>

        <form className={styles.search} role="search" onSubmit={(event) => event.preventDefault()}>
          <input
            type="search"
            name="q"
            className={styles.searchInput}
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />

          <button type="submit" className={styles.searchButton} aria-label="Buscar">
            <img src={searchIcon} alt="" />
          </button>
        </form>

        <ul className={styles.actions}>
          {ACTIONS.map((action) => (
            <li key={action.label}>
              <a href="#" className={styles.action} aria-label={action.label}>
                <img src={action.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className={styles.menu} aria-label="Categorias">
        <ul className={styles.menuList}>
          {CATEGORIES.map((category) => (
            <li key={category.label}>
              <a
                href="#"
                className={`${styles.menuLink} ${category.highlight ? styles.highlight : ''}`}
              >
                {category.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className={`${styles.menuLink} ${styles.subscription}`}>
              <img src={crownIcon} alt="" />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
