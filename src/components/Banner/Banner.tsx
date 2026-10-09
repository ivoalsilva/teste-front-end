import styles from "./Banner.module.scss";

export function Banner() {
  return (
    <section className={styles.banner} aria-labelledby="banner-title">
      <div className={styles.content}>
        <h1 id="banner-title" className={styles.title}>
          Venha conhecer nossas promoções
        </h1>
        <p className={styles.subtitle}>
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#" className={styles.button}>
          Ver produto
        </a>
      </div>
    </section>
  );
}
