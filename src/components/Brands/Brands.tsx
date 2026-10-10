import logo from "../../assets/logo.svg";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./Brands.module.scss";

// O layout mostra 5 marcas, todas com o logo da Econverse
const BRANDS = [1, 2, 3, 4, 5];

export function Brands() {
  return (
    <section>
      <SectionTitle title="Navegue por marcas" withLines={false} />

      <ul className={styles.list}>
        {BRANDS.map((brand) => (
          <li key={brand}>
            <a href="#" className={styles.brand}>
              <img src={logo} alt="Econverse" width={117} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
