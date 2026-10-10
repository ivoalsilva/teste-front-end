import bebidasIcon from "../../assets/categories/bebidas.png";
import esportesIcon from "../../assets/categories/esportes.png";
import ferramentasIcon from "../../assets/categories/ferramentas.png";
import modaIcon from "../../assets/categories/moda.png";
import saudeIcon from "../../assets/categories/saude.png";
import supermercadoIcon from "../../assets/categories/supermercado.png";
import tecnologiaIcon from "../../assets/categories/tecnologia.png";
import styles from "./Categories.module.scss";

interface Category {
  label: string;
  icon: string;
  active?: boolean;
  // Exceções do Figma, aplicadas só onde o layout difere do padrão
  itemWidth?: number;
  textOffset?: number;
  iconSize?: number;
  iconOffsetY?: number;
}

const CATEGORIES: Category[] = [
  { label: "Tecnologia", icon: tecnologiaIcon, active: true, textOffset: -5 },
  { label: "Supermercado", icon: supermercadoIcon, textOffset: -8 },
  { label: "Bebidas", icon: bebidasIcon, itemWidth: 140 },
  { label: "Ferramentas", icon: ferramentasIcon },
  { label: "Saúde", icon: saudeIcon },
  { label: "Esportes e Fitness", icon: esportesIcon },
  { label: "Moda", icon: modaIcon, iconSize: 63, iconOffsetY: -1.5 },
];

export function Categories() {
  return (
    <section className={styles.categories} aria-label="Compre por categoria">
      <ul className={styles.list}>
        {CATEGORIES.map((category) => (
          <li
            key={category.label}
            className={styles.item}
            style={{ width: category.itemWidth }}
          >
            <a
              href="#"
              className={`${styles.link} ${category.active ? styles.active : ""}`}
            >
              <span className={styles.box}>
                <img
                  className={styles.icon}
                  src={category.icon}
                  alt=""
                  style={{
                    width: category.iconSize,
                    height: category.iconSize,
                    top: category.iconOffsetY,
                  }}
                />
              </span>
              <span
                className={styles.name}
                style={{ left: category.textOffset }}
              >
                {category.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
