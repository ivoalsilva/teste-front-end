import styles from "./PartnerBanners.module.scss";

const PARTNERS = [
  {
    id: 1,
    title: "Parceiros",
    text: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Parceiros",
    text: "Lorem ipsum dolor sit amet, consectetur",
  },
];

export function PartnerBanners() {
  return (
    <section className={styles.partners} aria-label="Parceiros">
      {PARTNERS.map((partner) => (
        <article key={partner.id} className={styles.card}>
          <h2 className={styles.title}>{partner.title}</h2>
          <p className={styles.text}>{partner.text}</p>
          <a href="#" className={styles.button}>
            Confira
          </a>
        </article>
      ))}
    </section>
  );
}
