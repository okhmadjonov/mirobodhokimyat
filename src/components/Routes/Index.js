import About from "../../pages/AboutSection/AboutHokimyat/AboutHokimyat";
import Contact from "../../pages/AboutSection/Contact/Contact";
import Division from "../../pages/AboutSection/Division/Division";
import Management from "../../pages/AboutSection/Management/Management";
import Order from "../../pages/AboutSection/Order/Order";
import Structure from "../../pages/AboutSection/Structure/Structure";
import TargetTaskFunction from "../../pages/AboutSection/TargetTaskFunction/TargetTaskFunction";
import Vacancy from "../../pages/AboutSection/Vacancy/Vacancy";
import Deputy from "../../pages/AdviceSection/Deputy/Deputy";
import DeputySPA from "../../pages/AdviceSection/DeputySPA/DeputySPA";
import Documents from "../../pages/AdviceSection/Documents/Documents";
import Hakim from "../../pages/AdviceSection/Hakim/Hakim";
import GeneralInfo from "../../pages/AreaSection";
import MapMirobot from "../../pages/AreaSection/MapMirobot/MapMirobot";
import FaqOne from "../../pages/ServiceSection/FaqOne/FaqOne";
import FaqTwo from "../../pages/ServiceSection/FaqTwo/FaqTwo";
import OpenSource from "../../pages/ServiceSection/OpenSourceOne/OpenSource";

export const AboutSection = [
  { id: 6, path: "/about/hokimyat", element: <About />, name: "О хокимияте" },

  {
    id: 5,
    path: "/about/target_task",
    element: <TargetTaskFunction />,
    name: "Цели, задачи и функции",
  },
  {
    id: 2,
    path: "/about/management",
    element: <Management />,
    name: "Руководство",
  },
  {
    id: 3,
    path: "/about/order",
    element: <Order />,
    name: "Порядок приема граждан",
  },
  {
    id: 1,
    path: "/about/division",
    element: <Division />,
    name: "Подразделения",
  },

  {
    id: 4,
    path: "/about/structure",
    element: <Structure />,
    name: "Стркуктура",
  },

  { id: 7, path: "/about/vacancy", element: <Vacancy />, name: "Вакансии" },
];

export const AdviceSection = [
  {
    id: 1,
    path: "/council/devputy",
    element: <Deputy />,
    name: "Депутаты районного Кенгаша ",
  },
  {
    id: 3,
    path: "/council/documents",
    element: <Documents />,
    name: "Принятые документы",
  },
  { id: 4, path: "/council/assistants", element: <Hakim />, name: "" },
];

export const ServiceSection = [
  {
    id: 1,
    path: "/service/faq",
    element: <FaqOne />,
    name: "Часто задавемые вопросы",
  },
  {
    id: 2,
    path: "/service/faq_two",
    element: <FaqTwo />,
    name: "Нормативные документы",
  },
  {
    id: 3,
    path: "/service/open_data",
    element: <OpenSource />,
    name: "Открытые данные",
  },
];

export const AreaSection = [
  {
    id: 1,
    path: "/area/info",
    element: <GeneralInfo />,
    name: "Общая информация",
  },
  {
    id: 2,
    path: "/area/map",
    element: <MapMirobot />,
    name: "Карта района",
  },
  // {id: , path: "/area/" ,element :  , name: ""},
];
