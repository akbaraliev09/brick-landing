import VideoPlayer from './VideoPlayer.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div>
          <SectionTitle>О нас</SectionTitle>
          <h2 className="about__title">10 лет на рынке</h2>
          <div className="about__text">
            <p>
              Если Вы хотите купить облицовочный кирпич в Актобе, тогда Вы обратились точно по адресу. У нас есть кирпич
              различного цвета и размера. Мы на рынке облицовочного кирпича более 10 лет! Мы - прямые поставщики
              Украинского завода "ЕВРОТОН", "Белая Церковь" и также поставщики ведущих Российских кирпичных заводов
              таких как "ТМ Ликолор", "НЗКМ кирпичный завод", "Копыловская керамика", "Брянский кирпичный завод", "КЗ
              Красная Гвардия". Наша команда - это молодые современные лица, которые помогут подобрать оптимальный
              дизайн, выполнят полный подсчет кирпича от и до.
            </p>
            <p>
              Подберем кирпич для Вашего дома в соответствии
              <br />
              ЦЕНА=КАЧЕСТВО!!
            </p>
          </div>
        </div>

        <div className="about__media">
          <p className="about__caption">Широкий ассортимент, сотни довольных клиентов!</p>
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
}
