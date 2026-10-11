import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Newsletter.module.scss'

export function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Sem back-end no teste: só chega aqui se a validação nativa passar
    event.preventDefault()
    event.currentTarget.reset()
    setIsSubscribed(true)
  }

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2 id="newsletter-title" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.text}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onChange={() => setIsSubscribed(false)}
        >
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

          <div className={styles.bottom}>
            <label className={styles.terms}>
              <input type="checkbox" name="terms" className={styles.checkbox} required />
              Aceito os termos e condições
            </label>

            <p className={styles.success} role="status">
              {isSubscribed && 'Inscrição realizada com sucesso!'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
