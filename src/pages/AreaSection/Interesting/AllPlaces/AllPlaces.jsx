import './AllPlaces.scss';
import {
  city1Img,
  city2Img,
  city3Img,
  city4Img,
  city5Img,
  city6Img,
  city7Img,
  city8Img,
  city9Img,
} from '../../../../assets/img/AreaSection/index';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const AllPlaces = () => {
  const [activeNav, setActiveNav] = useState(false);

  const card = [
    {
      id: 1,
      img: city1Img,
      title: 'Ташкентские Куранты',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
    {
      id: 2,
      img: city2Img,
      title: 'Ташкентская Телебашня',
      subTitle: 'Ташкентская Телебашня',
    },
    {
      id: 3,
      img: city3Img,
      title: 'Центр Просвещения',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
    {
      id: 4,
      img: city4Img,
      title: 'Парк',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
    {
      id: 5,
      img: city5Img,
      title: 'Дворец международных форумов',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
    {
      id: 6,
      img: city6Img,
      title: 'Мирабадский базар',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
    {
      id: 7,
      img: city7Img,
      title: 'Дворец международных форумов',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
    {
      id: 8,
      img: city8Img,
      title: 'Ташкентские Куранты',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
    {
      id: 9,
      img: city9Img,
      title: 'Ташкентские кафе',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
    },
  ];

  const nav = [
    { id: 1, title: 'Все место' },
    { id: 2, title: 'Парки и зоны отдыха' },
    { id: 3, title: 'Для граждан' },
    { id: 4, title: 'Для бизнеса' },
    { id: 5, title: 'Для туристов' },
  ];

  return (
    <section className='allPlaces container'>
      <h2 className='allPlaces__title'>Интересные места</h2>
      <nav className='allPlaces__nav'>
        {nav?.map(item => (
          <li
            onClick={() => setActiveNav(item.id)}
            className={`${activeNav === item.id ? 'activeLi' : ''}`}
          >
            {item.title}
          </li>
        ))}
      </nav>
      <div className='allPlaces__cards'>
        {card?.map(item => (
          <NavLink to={`${item.id}`}>
            <div className='cards__card'>
              <div className='cards__card__img'>
                <img src={item.img} alt='' />
              </div>
              <div className='cards__card__text'>
                <h4 className='text__title'>{item.title}</h4>
                <p className='text__subTitle'>{item.subTitle}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default AllPlaces;
