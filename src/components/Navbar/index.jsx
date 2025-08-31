import classnames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import newsIcon from "../../assets/news-icon.svg";
import { CATEGORIES } from "../../constants/categories";
import styles from "./Navbar.module.css";
function Navbar() {
  const [selected, setSelected] = useState("");
  return (
    <nav className={styles.nav}>
      <div className={styles.navIconWrapper}>
        <img src={newsIcon} className={styles.navIcon} alt="" />
        <h1 className={styles.navTitle}>NEWS</h1>
      </div>

      <div className={styles.categories}>
        {CATEGORIES.map((category, index) => (
          <Link
            onClick={() => setSelected(category.name)}
            key={index}
            to={`/${category.slug}`}
            className={classnames(styles.category, {
              [styles.selected]: selected === category.name,
            })}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
