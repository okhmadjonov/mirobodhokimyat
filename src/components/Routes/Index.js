import React from "react";
import DeputySPA from "../../pages/AdviceSection/DeputySPA/DeputySPA";
import LastNews from "../../pages/PressCenter/LastNews/LastNews";
const Statistics = React.lazy(() =>
  import("../../pages/PressCenter/Statistics/Statistics")
);
const VideoGallery = React.lazy(() =>
  import("../../pages/PressCenter/VideoGallery/VideoGallery")
);
const Infographics = React.lazy(() =>
  import("../../pages/PressCenter/Infographics/Infographics")
);
const Division = React.lazy(() =>
  import("../../pages/AboutSection/Division/Division")
);
const Management = React.lazy(() =>
  import("../../pages/AboutSection/Management/Management")
);
const Order = React.lazy(() => import("../../pages/AboutSection/Order/Order"));
const Structure = React.lazy(() =>
  import("../../pages/AboutSection/Structure/Structure")
);
const TargetTaskFunction = React.lazy(() =>
  import("../../pages/AboutSection/TargetTaskFunction/TargetTaskFunction")
);
const Vacancy = React.lazy(() =>
  import("../../pages/AboutSection/Vacancy/Vacancy")
);
const Deputy = React.lazy(() =>
  import("../../pages/AdviceSection/Deputy/Deputy")
);
const Documents = React.lazy(() =>
  import("../../pages/AdviceSection/Documents/Documents")
);
const Hakim = React.lazy(() => import("../../pages/AdviceSection/Hakim/Hakim"));
const GeneralInfo = React.lazy(() => import("../../pages/AreaSection"));
const AllPlaces = React.lazy(() =>
  import("../../pages/AreaSection/Interesting/AllPlaces/AllPlaces")
);
const PlacesItem = React.lazy(() =>
  import("../../pages/AreaSection/Interesting/AllPlaces/Components/PlacesItem")
);
const MapMirobot = React.lazy(() =>
  import("../../pages/AreaSection/MapMirobot/MapMirobot")
);
const MassMedia = React.lazy(() =>
  import("../../pages/PressCenter/MassMedia/MassMedia")
);
const News = React.lazy(() => import("../../pages/PressCenter/News/News"));
const FaqOne = React.lazy(() =>
  import("../../pages/ServiceSection/FaqOne/FaqOne")
);
const FaqTwo = React.lazy(() =>
  import("../../pages/ServiceSection/FaqTwo/FaqTwo")
);
const OpenSource = React.lazy(() =>
  import("../../pages/ServiceSection/OpenSourceOne/OpenSource")
);
const About = React.lazy(() =>
  import("../../pages/AboutSection/AboutHokimyat/AboutHokimyat")
);
const Photogallery = React.lazy(() =>
  import("../../pages/PressCenter/Photogallery/Photogallery")
);

export const AboutSection = [
  {
    id: 6,
    path: "/about/hokimyat",
    element: <About />,
    name: "navbar.about.hokimyat",
  },

  {
    id: 5,
    path: "/about/target_task",
    element: <TargetTaskFunction />,
    name: "navbar.about.target_task",
  },
  {
    id: 2,
    path: "/about/management",
    element: <Management />,
    name: "navbar.about.management",
  },
  {
    id: 3,
    path: "/about/order",
    element: <Order />,
    name: "navbar.about.order",
  },
  {
    id: 1,
    path: "/about/division",
    element: <Division />,
    name: "navbar.about.division",
  },

  {
    id: 4,
    path: "/about/structure",
    element: <Structure />,
    name: "navbar.about.structure",
  },

  {
    id: 7,
    path: "/about/vacancy",
    element: <Vacancy />,
    name: "navbar.about.vacancy",
  },
];

export const AdviceSection = [
  {
    id: 1,
    path: "/council/devputy",
    element: <Deputy />,
    name: "navbar.council.deputy",
  },
  {
    id: 3,
    path: "/council/documents",
    element: <Documents />,
    name: "navbar.council.documents",
  },
  { id: 4, path: "/council/assistants", element: <Hakim />, name: "" },
  { id: 5, path: "/council/deputy/:id", element: <DeputySPA /> },
];

export const ServiceSection = [
  {
    id: 1,
    path: "/service/faq",
    element: <FaqOne />,
    name: "navbar.service.faq",
  },
  {
    id: 2,
    path: "/service/faq_two",
    element: <FaqTwo />,
    name: "navbar.service.faq_two",
  },
  {
    id: 3,
    path: "/service/open_data",
    element: <OpenSource />,
    name: "navbar.service.open_data",
  },
];

export const AreaSection = [
  {
    id: 1,
    path: "/area/info",
    element: <GeneralInfo />,
    name: "navbar.area.info",
  },
  {
    id: 3,
    path: "/area/interesting-places",
    element: <AllPlaces />,
    name: "navbar.area.interesting_places",
  },
  {
    id: 4,
    path: "/area/interesting-places/:id",
    element: <PlacesItem />,
  },
  {
    id: 2,
    path: "/area/map",
    element: <MapMirobot />,
    name: "navbar.area.map",
  },
];

export const PressCenterSection = [
  {
    id: 1,
    path: "/press_center/news",
    element: <News />,
    name: "navbar.press_center.news",
  },
  {
    id: 2,
    path: "/press_center/massmedia",
    element: <MassMedia />,
    name: "navbar.press_center.massmedia",
  },

  {
    id: 3,
    path: "/press_center/statistics",
    element: <Statistics />,
    name: "navbar.press_center.statistics",
  },
  {
    id: 4,
    path: "/press_center/infographics",
    element: <Infographics />,
    name: "navbar.press_center.infographics",
  },

  {
    id: 6,
    path: "/press_center/videoGallery",
    element: <VideoGallery />,
    name: "navbar.press_center.videoGallery",
  },
  {
    id: 5,
    path: "/press_center/photogallery",
    element: <Photogallery />,
    name: "Фотогалерея",
  },
  {
    id: 6,
    path: "/press_center/news/:id",
    element: <LastNews />,
  },
  // {id: , path: "/area/" ,element :  , name: ""},
];
