import './PlacesItem.scss';
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
} from '../../../../../assets/img/AreaSection/index';
import { useParams } from 'react-router-dom';

function PlacesItem() {
  const params = useParams();
  const card = [
    {
      id: 1,
      img: city1Img,
      title: 'Ташкентские Куранты',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 2,
      img: city2Img,
      title: 'Ташкентская Телебашня',
      subTitle: 'Ташкентская Телебашня',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 3,
      img: city3Img,
      title: 'Центр Просвещения',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 4,
      img: city4Img,
      title: 'Парк',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 5,
      img: city5Img,
      title: 'Дворец международных форумов',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 6,
      img: city6Img,
      title: 'Мирабадский базар',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 7,
      img: city7Img,
      title: 'Дворец международных форумов',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 8,
      img: city8Img,
      title: 'Ташкентские Куранты',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
    {
      id: 9,
      img: city9Img,
      title: 'Ташкентские кафе',
      subTitle: 'ул. Амир-Темур, д. 109 (Юнус-Абадский р-н) на карте',
      desc:
        'Символ Ташкента — высокая башня, в которой есть большие куранты. Он был построен в 1947 году и начал работать 30 апреля того же года.Существует удивительная история о Башнях-близнецах, когда И.А. Айзенштейн, часовщик и житель Ташкента, привёз механизм башенных часов из Германии после Второй мировой войны в качестве трофея. Эти часы висели на башне мэрии в городе Алленштайн в Восточной Пруссии. Ратуша была разрушена, но механизм часов восстановлен. Айзенштейн выдвинул идею построить часовую башню в Ташкенте. Идея была принята городской администрацией, которая затем объявила конкурс, который включал различные проекты для городской башни с часами, которые будут построены, и первая башня была построена согласно проекту победителя.В 2009 году здесь была возведена вторая башня, точная копия первой. Сегодня комплекс состоит из двух башен, которые охватывают эстетику прошлого и динамичного настоящего. Оба сочетают в себе современные и традиционные элементы узбекского искусства.Что посмотреть В недавно построенных ташкентских башнях-близнецах находится выставочный зал, в котором выставлены старинные и современные ювелирные украшения, мастерски созданные представителями династий ремёсел. Старый комплекс Twin Clock Tower предлагает посетителям уникальные образцы традиционного узбекского искусства и антиквариата. Она включает в себя красочную коллекцию этнографической одежды, сюзане, резных изделий из дерева мастеров ташкентской и кокандской школ, керамику, картины и гончарные изделия, изготовленные различными узбекскими художественными школами. Кроме того, в Башнях-близнецах находится выставка работ современных художников и дизайнеров XXI века. К ним относятся ткани, сюзанна и одежда, изготовленные молодыми мастерами с использованием восстановленных древних технологий. Лучшие образцы национального ремесленного искусства, антиквариат, ювелирные изделия и работы современных художников находятся в обеих Башнях-близнецах Ташкента.',
      tel: '(+998) 71-202-3570, (+998) 99-852-0001',
      workTime: 'с 10:00 до 20:00 (без выходных)',
    },
  ];

  return (
    <section className='container'>
      <h2 className='title '>Интересные места</h2>
      <div className='placesSinglePage '>
        <div className='placesSinglePage__left'>
          <div className='placesSinglePage__left__img'>
            <img src={card[params.id - 1].img} alt='' />
          </div>
          <div className='placesSinglePage__left__text'>
            <div className='placesSinglePage__left__text__inside'>
              <span>Адрес</span>
              <p>{card[params.id - 1].subTitle}</p>
            </div>
            <div className='placesSinglePage__left__text__inside'>
              <span>Телефон</span>
              <p>{card[params.id - 1].tel}</p>
            </div>
            <div className='placesSinglePage__left__text__inside'>
              <span>Режим работы</span>
              <p>{card[params.id - 1].workTime}</p>
            </div>
          </div>
        </div>
        <div className='placesSinglePage__right'>
          <h3 className='placesSinglePage__right__title'>
            {card[params.id - 1].title}
          </h3>
          <p className='placesSinglePage__right__subTitle'>
            {card[params.id - 1].desc}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlacesItem;
