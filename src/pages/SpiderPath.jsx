import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import '../App.css';

const SpiderPath = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Спочатку перевіряємо state (якщо перейшли з оновленого футера)
    // 2. Якщо state немає, перевіряємо hash (#homecoming) для сумісності з прямими посиланнями
    const targetId = location.state?.scrollToId || location.hash.replace('#', '');

    if (targetId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="spider-path-page">
      {/*  Збільшена картинка Людини-Павука під хедером */}
      <section className="spider-hero-image">
        <img 
          src="/images/spiderpath/spiderman-black-background.jpg" 
          alt="Людина-Павук" 
        />
      </section>

      {/* ================= ФІЛЬМ 1: Homecoming ================= */}
      <section id="homecoming" className="full-width-movie-section homecoming">
        {/* Біла полоска зі скошеним кутом */}
        <div className="movie-header-banner">
          <h2>Spider-Man: Homecoming (2017)</h2>
        </div>

        {/* Червоний блок на всю ширину */}
        <div className="movie-card-body">
          <div className="movie-content-wrapper">
            <div className="poster-container">
              <img 
                src="/images/spiderpath/homecoming.jpg" 
                alt="Spider-Man: Homecoming Poster" 
              />
            </div>

            <div className="movie-description">
              <p>
                Історія починається з 15-річного Пітера Паркера, який намагається
                звикнути до нового життя після подій у Лейпцигу разом із Месниками.
                Повернувшись до Квінсу, він продовжує ходити до звичайної школи,
                але щовільної хвилини одягає технологічний костюм від Тоні Старка,
                аби допомагати жителям міста у дрібницях.
              </p>
              <p>
                Прагнення довести свою готовність до справжніх місій зіштовхує
                Пітера з Едріаном Туомсом — Стерв'ятником, який торгує зброєю на
                основі інопланетних технологій Читаурі.
              </p>
              <p>
                Головний виклик для хлопця — не лише здолати небезпечного ворога,
                а й зрозуміти, що саме робить його героєм. Коли через ризикований
                вчинок Тоні Старк вилучає високотехнологічний костюм, Пітер
                мусить довести: Людина-павук — це не розробки Stark Industries,
                а його власний свідомий вибір та відповідальність.
              </p>

              <div className="button-wrapper">
                <Button to="/behind-the-scenes" className="cta-button">
                  Поринути в атмосферу фільму
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ФІЛЬМ 2: Far From Home (ВІДДЗЕРКАЛЕНИЙ) ================= */}
      <section id="far-from-home" className="full-width-movie-section far-from-home">
        <div className="movie-header-banner reverse">
          <h2>Spider-Man: Far From Home (2019)</h2>
        </div>

        <div className="movie-card-body reverse">
          <div className="movie-content-wrapper">
            <div className="poster-container">
              <img 
                src="/images/spiderpath/far-from-home.jpg" 
                alt="Spider-Man: Far From Home Poster" 
              />
            </div>

            <div className="movie-description">
              <p>
                Оплакуючи втрату наставника Тоні Старка після подій «Фіналу», Пітер Паркер прагне
                ненадовго поставити супергеройські обов’язки на паузу. Він вирушає на шкільні канікули
                до Європи, сподіваючись на ззвичайне підліткове життя. Проте шкільну поїздку перериває 
                Нік Ф’юрі через нову загрозу — Елементалів, істот із природних стихій.
              </p>
              <p>
                На допомогу приходить Квентін Бек (Містеріо), який видає себе за героя з паралельного 
                всесвіту. Шукаючи нову опору, Пітер бачить у ньому наступника Старка та передає йому 
                контроль над технологічною системою EDITH. Однак за маскою рятівника ховається колишній 
                інженер Stark Industries, який створює вражаючі загрози за допомогою високотехнологічних 
                голограм та дронів.
              </p>
              <p>
                Фільм тонко розкриває теми подолання горя, прийняття спадщини та небезпеки фальшивої 
                реальності. Історія завершується драматичним поворотом: перед смертю Містеріо оприлюднює 
                відео, у якому розкриває справжнє ім'я Людини-павука на весь світ.
              </p>

              <div className="button-wrapper">
                <Button to="/behind-the-scenes" className="cta-button">
                  Поринути в атмосферу фільму
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ФІЛЬМ 3: No Way Home ================= */}
      <section id="no-way-home" className="full-width-movie-section no-way-home">
        <div className="movie-header-banner">
          <h2>Spider-Man: No Way Home (2021)</h2>
        </div>

        <div className="movie-card-body">
          <div className="movie-content-wrapper">
            <div className="poster-container">
              <img 
                src="/images/spiderpath/no-way-home.jpg" 
                alt="Spider-Man: No Way Home Poster" 
              />
            </div>

            <div className="movie-description">
              <p>
                Після викриття особистості Пітера Паркера його життя та долі близьких перетворюються
                на суцільний хаос. Через тиск преси та суспільства Пітер, MJ та Нед втрачають шанс
                вступити до університету, тому Паркер звертається по допомогу до Доктора Стренджа, 
                аби той створив закляття забуття.
              </p>
              <p>
                Проте втручання в ритуал призводить до розриву Мультивсесвіту, випускаючи у їхній світ
                культових антагоністів з інших реальностей: Зеленого Гобліна, Доктора Восьминога, Електро,
                Піщану Людину та Лізарда. Разом із ними на захист світу стають альтернативні Люди-павуки, 
                об'єднуючи досвід кількох поколінь героїв.
              </p>
              <p>
                Фільм стає емоційною кульмінацією трилогії, де через втрату тітки Мей Пітер осягає суть
                фрази про велику відповідальність. Аби зупинити колапс Мультивсесвіту, він іде на найважчу
                жертву — Стрендж створює закляття, яке змушує весь світ назавжди забути про існування
                Пітера Паркера.
              </p>

              <div className="button-wrapper">
                <Button to="/behind-the-scenes" className="cta-button">
                  Поринути в атмосферу фільму
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ФІЛЬМ 4: Brand New Day (ВІДДЗЕРКАЛЕНИЙ) ================= */}
      <section id="brand-new-day" className="full-width-movie-section brand-new-day">
        <div className="movie-header-banner reverse">
          <h2>Spider-Man: Brand New Day</h2>
        </div>

        <div className="movie-card-body reverse">
          <div className="movie-content-wrapper">
            <div className="poster-container">
              <img 
                src="/images/spiderpath/brand-new-day.webp" 
                alt="Spider-Man Brand New Day Poster" 
              />
            </div>

            <div className="movie-description">
              <p>
                Четверта частина відкриває абсолютно нову главу в житті Пітера Паркера. 
                Залишившись без друзів, підтримки Месників та високотехнологічних ресурсів 
                Старка, Пітер починає все з чистого аркуша в маленькій орендованій квартирі 
                в Нью-Йорку. Він зшив собі новий, класичний тканинний костюм і тепер 
                самостійно захищає рідне місто від щоденної злочинності.
              </p>
              <p>
                Сюжет фокусується на дорослішанні героя та його внутрішніх викликах. Замість 
                космічних загроз чи Мультивсесвіту Пітер занурюється у небезпечний кримінальний 
                світ Нью-Йорка, намагаючись втримати баланс між глибокою особистою самотністю та 
                безперервною боротьбою зі злом.
              </p>
              <p>
                Цей фільм повертає персонажа до його класичних корінців із коміксів.       
                Перед глядачами постає дорослий, самостійний та загартований випробуваннями герой,
                який більше не спирається на чиюсь допомогу, а покладається лише на власні сили
                та власне серце.
              </p>

              <div className="button-wrapper">
                <Button to="/behind-the-scenes" className="cta-button">
                  Поринути в атмосферу фільму
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpiderPath;