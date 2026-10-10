import facebookIcon from '../../assets/icons/facebook.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import logo from '../../assets/logo.svg'
import styles from './Footer.module.scss'

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: instagramIcon },
  { label: 'Facebook', icon: facebookIcon },
  { label: 'LinkedIn', icon: linkedinIcon },
]

const LINK_GROUPS = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.about}>
            {/* Mesmo logo do header: no Figma tem 164 × 48, aqui mantém a proporção (≈ 49.5 de altura) */}
            <img src={logo} alt="Econverse" width={164} />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <ul className={styles.social}>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a href="#" aria-label={social.label}>
                  <img src={social.icon} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <span className={styles.divider} aria-hidden="true" />

        <nav className={styles.links} aria-label="Links institucionais">
          {LINK_GROUPS.map((group) => (
            <div key={group.title} className={styles.group}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              <ul className={styles.groupList}>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <p className={styles.copyright}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  )
}
