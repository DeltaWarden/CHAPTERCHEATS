import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";
import lang from "../../assets/lang.svg";
import supbut from "../../assets/supbut.svg";
import search from "../../assets/search.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const language = "Russian";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.container} ${scrolled ? styles.containerScrolled : ""}`}>
        <div className={styles.logo}>
          <img src={Logo} alt="ChapterCheats Logo" className={styles.logoImage} />
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <Link
            to="/"
            className={`${styles.navItem} ${location.pathname === "/" ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Главная
          </Link>
          <Link
            to="/catalog"
            className={`${styles.navItem} ${location.pathname === "/catalog" ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Каталог
          </Link>
          <Link
            to="/market"
            className={`${styles.navItem} ${location.pathname === "/market" ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Маркет
          </Link>
          <Link
            to="/drivers"
            className={`${styles.navItem} ${location.pathname === "/drivers" ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Драйвера
          </Link>
          <div className={styles.support}>
            <Link to="/support" onClick={() => setMenuOpen(false)}>Поддержка</Link>
            <img src={supbut} alt="" />
          </div>
          <div className={styles.search}>
            <img src={search} alt="" />
            <Link to="/search" onClick={() => setMenuOpen(false)}>Поиск</Link>
          </div>
          <div className={styles.lang}>
            <img src={lang} alt="" />
            <Link to="/support" onClick={() => setMenuOpen(false)}>{language}</Link>
          </div>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
