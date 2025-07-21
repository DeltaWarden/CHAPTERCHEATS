import React from "react";
import styles from "./Footer.module.css";
import { FaTelegram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.leftBlock}>
          <div className={styles.logo}>
            COIL
            <span 
              className={styles.glowText} 
              data-text="HOST"
            >
              HOST
            </span>
          </div>
          <p className={styles.description}>
            Мы создаём надёжную и безопасную платформу, чтобы каждый мог наслаждаться игрой без ограничений и задержек.
          </p>
          <div className={styles.socials}>
            <a
              href="https://t.me/yourchannel"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className={styles.centerBlock}>
          <h3
            className={`${styles.navTitle} ${styles.glowText}`}
            data-text="НАВИГАЦИЯ"
          >
            НАВИГАЦИЯ
          </h3>
          <nav className={styles.navColumns}>
            <ul className={styles.navList}>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/catalog">Каталог</a>
              </li>
              <li>
                <a href="/services">Услуги</a>
              </li>
            </ul>
            <ul className={styles.navList}>
              <li>
                <a href="/agreement">Соглашение</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/support">Поддержка</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.rightBlock}>
          <h3
            className={`${styles.paymentTitle} ${styles.glowText}`}
            data-text="ОПЛАТА"
          >
            ОПЛАТА
          </h3>
          <img
            className={styles.paymentImage}
            src="https://uls-mason.ru/wp-content/uploads/2021/12/oplata-uslug-spb-thai-kartami-visa-mastercard-mir-maestro-1536x290-3-1.png"
            alt="Способы оплаты Visa, Mir, Crypto"
          />
        </div>
      </div>

      <div className={`${styles.bottomLine} ${styles.glowText}`} data-text="© 2025 coilhost - coilhost@gmail.com">
        <p>© 2025 coilhost - coilhost@gmail.com</p>
        <a href="/privacy-policy" data-text="Политика сайта и обработка персональных данных">
          Политика сайта и обработка персональных данных
        </a>
      </div>
    </footer>
  );
};

export default Footer;
