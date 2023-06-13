import React from 'react';
import {
  person1Img,
  person2Img,
  person3Img,
  person4Img,
  person5Img,
  person6Img,
  person7Img,
  person8Img,
  person9Img,
  person10Img,
} from '../../../assets/img/AdviceSection/index';
import './Deputy.scss';

const deputy = [
  {
    image: person1Img,
    name: 'Артикова Махсума Исмаиловна',
    job: 'ЎзЛиДЕП',
    address: '1-Буюк Турон округи',
    phoneNumber: '+998 90 188-19-04',
  },

  {
    image: person2Img,
    name: 'Cаидходжаева Малика Хамидовна',
    job: 'ЎзЛиДЕП',
    address: '2-Авросиёб округи',
    phoneNumber: '+998 90 188-19-04',
  },

  {
    image: person3Img,
    name: 'Маманазаров Абдуҳаким Бозорович',
    job: 'ЎзЛиДЕП',
    address: '3-Мавороуннахр',
    phoneNumber: '+90 921-11-21',
  },

  {
    image: person4Img,
    name: 'Рашидова Гулнора Хабибуллаевна',
    job: '«Адолат» СДП',
    address: '4-Ойбек округи',
    phoneNumber: '+97 454-07-91',
  },

  {
    image: person5Img,
    name: 'Хакимов Гуламжан Гафурович',
    job: 'ЎзЛиДЕП',
    address: '5-Фаровон округи',
    phoneNumber: '+90 355-23-45',
  },

  {
    image: person6Img,
    name: 'Каримов Аваз Азизджанович',
    job: 'ЎзХДП',
    address: '7-Авлоний',
    phoneNumber: '+71 233-29-25',
  },

  {
    image: person7Img,
    name: 'Рашидова Умида Анваровна',
    job: 'ЎзМТДП',
    address: '8-Миробод',
    phoneNumber: '+98 361-01-41',
  },

  {
    image: person8Img,
    name: 'Тангириева Феруза Рузметовна',
    job: 'ЎзЛиДЕП',
    address: '12-Наврўз',
    phoneNumber: '97-739-70-70',
  },

  {
    image: person9Img,
    name: 'Матчанов Жасур Матякубович',
    job: 'ЎзМТДП',
    address: '14-Иноқобод',
    phoneNumber: '90-987-00-09',
  },

  {
    image: person10Img,
    name: 'Пулатов Шухрат Абдужаббарович',
    job: 'Экологик партия',
    address: '19-Фурқат',
    phoneNumber: '71-233-29-86',
  },
];

const Deputy = () => {
  return (
    <section className='deputy container'>
      <h2 className='advance__title'>Депутаты районного Кенгаша</h2>
      <div className='deputy__cards'>
        {deputy.map(item => (
          <div className='deputy__card' key={item.image}>
            <div className='deputy__card__img'>
              <img src={item.image} alt='deputy' />
            </div>
            <div className='deputy__card__text'>
              <h4 className='deputy__card__text__name'>{item.name}</h4>
              <p className='deputy__card__text__job'>{item.job}</p>
              <p className='deputy__card__text__address'>{item.address}</p>
              <p className='deputy__card__text__number'>{item.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deputy;
