import '../DeputySPA/Deputy.scss';
import './Deputy.scss';
import { adviceSPA } from '../../../assets/img/AdviceSection/index';
import { person1Img } from '../../../assets/img/AdviceSection/index';

const DeputySPA = () => {
  return (
    <section className='container deputySpa'>
      <h2 className='advance__title'>Депутаты районного Кенгаша</h2>
      <div className='deputySpa__block'>
        <div className='deputySpa__block__left'>
          <div className='deputySpa__block__left__cards'>
            <div className='deputy__card deputySpa__block__left__cards__card'>
              <div className='deputy__card__img'>
                <img src={person1Img} alt='deputy' />
              </div>
              <div className='deputy__card__text'>
                <h4 className='deputy__card__text__name'>
                  Артикова Махсума Исмаиловна
                </h4>
                <p className='deputy__card__text__job'>ЎзЛиДЕП</p>
                <p className='deputy__card__text__address'>
                  1-Буюк Турон округи
                </p>
                <p className='deputy__card__text__number'>+998 90-317-07-07</p>
              </div>
            </div>

            <ul className='cards__text'>
              <li>
                <h4>Туғилган жойи</h4>
                <p>Тошкент шахри</p>
              </li>
              <li>
                <h4>Маълумоти (қайси ОТМ тамомлаган), мутахассислиги</h4>
                <p>
                  Тошкент халклар дустлиги халк хужалиги институти, Тошкент
                  давлат юридик институти, хуқуқшунос
                </p>
              </li>
              <li>
                <h4>Эгаллаб турган лавозими</h4>
                <p>
                  Тошкент шахар Миробод туманида хусусий амалиёт билан
                  шуғулланувчи нотариус
                </p>
              </li>
              <li>
                <h4>Доимий комиссияга аъзолиги</h4>
                <p>
                  Халқ депутатлари Миробод туман Кенгашининг суд-ҳуқуқ
                  масалалари ва коррупцияга қарши курашиш масалалари бўйича
                  доимий комиссияси раиси
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='deputySpa__block__right'>
          <img src={adviceSPA} alt='' />
        </div>
      </div>
    </section>
  );
};

export default DeputySPA;
