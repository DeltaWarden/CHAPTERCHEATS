import styles from "./MainPage.module.css";
import arrow from "../../../assets/arrow.svg"
import { useEffect, useState } from "react";
import {
  FaUsers, FaProjectDiagram, FaClock, FaShieldAlt, FaRocket,
  FaHeadset, FaCogs, FaTachometerAlt, FaGamepad, FaServer
} from "react-icons/fa";
import { useRef } from "react";

interface Tariff {
  id: number;
  name: string;
  cpu: string;
  ram: string;
  storage: string;
  description: string;
  price: number;
  region: string;
  category: { id: number; name: string; slug: string };
}
const changingWords = ["ЛУЧШИЕ", "UNDETECT", "DMA"];
const MainPage = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<'game' | 'vds'>('game');

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/servers/tariffs/")
      .then((res) => res.json())
      .then((data: Tariff[]) => setTariffs(data))
      .catch((err) => console.error("Ошибка при загрузке тарифов:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };
    const hero = heroRef.current;
    if (hero) hero.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (hero) hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className={styles.mainPage}>
      <section
        className={styles.hero}
        ref={heroRef}
      >
        <div className={styles.heroContentNew}>
          <div className={styles.heroTextBlock}>
            <div className={styles.heroRadialGlow}></div>
            <div className={styles.heroTextLine1}>
              <span
                className={styles.changingWord}
                key={changingWords[wordIndex]}
              >
                {changingWords[wordIndex]} ЧИТЫ
              </span>
            </div>
            <div className={styles.heroTextLine2}>
              ТОЛЬКО НА CHAPTERCHEATS
            </div>
            <div className={styles.heroTextSub}>
            Мы - лучшие в своём деле. Только проверенные продукты, моментальная доставка, круглосуточная поддержка и регулярные обновления.
            </div>
            <a href="/catalog" className={styles.telegrambutton}>
              Каталог
              <img src={arrow} alt="" />
            </a>
          </div>
          <div className={styles.heroRocketBlock}>
          </div>
        </div>
      </section>
      <section className={styles.whyUs}>
        <h2>Почему выбирают нас?</h2>
        <div className={styles.whyUsSub}>
          Причины почему стоит выбрать наш хостинг!
        </div>
        <div className={styles.reasons}>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>
              <FaShieldAlt className={styles.reasonIcon} />
              <h4>Надёжность</h4>
            </div>
            <p>Гарантированная стабильность, высокая доступность сервисов и защита от DDoS-атак. Ваши проекты всегда под надёжной защитой, а инфраструктура работает без перебоев 24/7.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>
              <FaRocket className={styles.reasonIcon} />
              <h4>Скорость</h4>
            </div>
            <p>Молниеносный запуск, минимальные задержки и современные NVMe SSD. Ваши сервисы работают быстро даже при высокой нагрузке и большом количестве пользователей.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>
              <FaHeadset className={styles.reasonIcon} />
              <h4>Поддержка 24/7</h4>
            </div>
            <p>Оперативная помощь в любое время суток. Мы всегда готовы ответить на ваши вопросы и решить любые технические задачи, чтобы вы могли сосредоточиться на развитии своего проекта.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>
              <FaCogs className={styles.reasonIcon} />
              <h4>Гибкая настройка</h4>
            </div>
            <p>Полный контроль и кастомизация под ваши нужды. Настраивайте серверы и сервисы так, как удобно именно вам, без ограничений и компромиссов.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>
              <FaTachometerAlt className={styles.reasonIcon} />
              <h4>Высокая производительность</h4>
            </div>
            <p>Мощные сервера на базе последних процессоров и NVMe SSD обеспечивают максимальную производительность и стабильную работу ваших проектов.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>
              <FaUsers className={styles.reasonIcon} />
              <h4>Сообщество</h4>
            </div>
            <p>Тысячи довольных клиентов, активное сообщество и множество положительных отзывов. Мы ценим каждого пользователя и всегда открыты к обратной связи.</p>
          </div>
        </div>
      </section>
      <section className={styles.stats}>
        <div className={styles.stat}>
          <FaUsers className={styles.icon} />
          <h3>500+</h3>
          <p>Клиентов</p>
        </div>
        <div className={styles.stat}>
          <FaProjectDiagram className={styles.icon} />
          <h3>1200+</h3>
          <p>Проектов</p>
        </div>
        <div className={styles.stat}>
          <FaClock className={styles.icon} />
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
      </section>
      <section className={styles.catalog}>
        <div className={styles.catalogHeader}>
          <div className={styles.catalogImageBlock}>
            <div className={styles.catalogImageGlow}></div>
            <div className={styles.catalogImageGlow2}></div>
          </div>
          <div className={styles.catalogTextBlock}>
            <h2>Услуги</h2>
            <div className={styles.catalogSub}>Раздел с предоставляемыми услугами</div>
            <div className={styles.catalogCategoryButtons}>
              <button
                className={selectedCategory === 'game' ? styles.catalogCategoryActive : styles.catalogCategoryBtn}
                onClick={() => setSelectedCategory('game')}
              >
                <FaGamepad style={{ marginRight: 10 }} /> GAME
              </button>
              <button
                className={selectedCategory === 'vds' ? styles.catalogCategoryActive : styles.catalogCategoryBtn}
                onClick={() => setSelectedCategory('vds')}
              >
                <FaServer style={{ marginRight: 10 }} /> VDS
              </button>
            </div>
          </div>
        </div>
        <div className={styles.serverGrid}>
          {tariffs.filter(t => t.category && t.category.slug === selectedCategory).map((tariff) => (
            <div key={tariff.id} className={styles.serverCard}>
              <h3>{tariff.name}</h3>
              <p><b>CPU:</b> {tariff.cpu}</p>
              <p><b>RAM:</b> {tariff.ram}</p>
              <p><b>Storage:</b> {tariff.storage}</p>
              <p>{tariff.description}</p>
              <span className={styles.price}>{tariff.price}₽ / мес</span>
              <p><b>Регион:</b> {tariff.region}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
