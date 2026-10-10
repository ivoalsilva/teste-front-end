import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  title: string
  withLines?: boolean
}

export function SectionTitle({ title, withLines = true }: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${withLines ? styles.withLines : ''}`}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}
