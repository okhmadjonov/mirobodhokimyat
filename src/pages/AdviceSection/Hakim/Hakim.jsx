import './Hakim.scss';
import { person11Img } from '../../../assets/img/AdviceSection/index';

const data = [
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
  {
    img: person11Img,
    name: 'Махмудов Зайниддин Мухаммаджон',
    description:
      'Миробод тумани "Ойбек" маҳалласида тадбиркорликни ривожлантириш, аҳоли бандлигини таъминлаш ва камбағалликни қисқартириш масалалари бўйича туман ҳокимининг ёрдамчиси',
    phoneNumber: '+998 90-317-07-07',
  },
];

const Hakim = () => {
  return (
    <section className='hakim container'>
      <h2 className='advance__title'>
        Тошкент шаҳар Миробод тумани бўйича Ҳоким ёрдамчилари
      </h2>

      <div className='hakim__cards'>
        {data.map(item => (
          <div className='hakim__cards__card'>
            <div className='card__img'>
              <img src={item.img} alt='' />
            </div>
            <div className='card__text'>
              <h4 className='card__text__title'>{item.name}</h4>
              <p className='card__text__subTitle'>{item.description}</p>
              <p className='card__text__number'>{item.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hakim;
