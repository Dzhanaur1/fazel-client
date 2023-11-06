import React from "react";

import Hero from "./components/Hero";
import HomeGrid from "./components/HomeGrid";
import Feature from "./components/HomeFeature";
import Contact from "./components/Contact";
import Slider from "./components/HomeSlider";
import Title from "./components/Title";
import GallerySlider from "./components/GallerySlider";

export const metadata = {
  title:
    "Купить детские игровые площадки и городки в Краснодаре – компания по благоустройству «Fazel»",
  description:
    "Рекомендуем купить детские игровые городки и площадки от компании «Fazel» в Краснодаре. Осуществляем по желанию Клиента работы по бетонированию и качественную установку под ключ. Предоставляем длительную гарантию и быструю доставку.",
  keywords:
    "детские площадки, спортивные площадки, игровые комплексы, наш двор, детская площадка купить, детские площадки купить, детские игровые площадки, качели, карусели, песочницы, горки, беседки, воркаут, вазоны, скамейки, урны, ограждения, веранды",
  openGraph: {
    images: [`https://fazel-client.vercel.app/hero.webp`],
    title: "Детские игровые и спортивные площадки  - Купить",
    description:
      "Купить детские игровые площадки и городки по лучшей цене.Большой выбор. Доступные цены.",
    url: "https://fazel-client.vercel.app",
    siteName: "Fazel",
    locale: "ru_RU",
    type: "website",
  },
};
const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <HomeGrid />
      <Feature />
      <Contact />
      <Title text={"Популярные товары"} />

      <Slider />
      <Title text={"Наши работы"} />
      <GallerySlider />
    </React.Fragment>
  );
};

export default Home;
