import type { FormEvent } from "react";
import styles from "./Newsletter.module.scss";

export function Newsletter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Sem back-end no teste: a validação nativa roda e o envio é interrompido aqui
    event.preventDefault();
  }

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2 id="newsletter-title" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.text}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <label className={styles.field}>
              <span className="visually-hidden">Nome</span>
              <input
                type="text"
                name="name"
                className={styles.input}
                placeholder="Digite seu nome"
                autoComplete="name"
                required
              />
            </label>

            <label className={styles.field}>
              <span className="visually-hidden">E-mail</span>
              <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Digite seu e-mail"
                autoComplete="email"
                required
              />
            </label>

            <button type="submit" className={styles.button}>
              Inscrever
            </button>
          </div>

          <label className={styles.terms}>
            <input
              type="checkbox"
              name="terms"
              className={styles.checkbox}
              required
            />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
}
