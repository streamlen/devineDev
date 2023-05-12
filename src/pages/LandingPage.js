/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";

import Header from "../parts/Header.js";
import Hero from "../parts/Hero.js";
import Service from "../parts/Service.js";
import Portfolio from "../parts/Portfolio.js";
import Advantage from "../parts/Advantage.js";
import Testimonial from "../parts/Testimonial.js";
import Discuss from "../parts/Discuss.js";
import Footer from "../parts/Footer.js";

import Data from "../json/landingPage.json";

export default function LandingPage(props) {
  window.scrollTo(0, 0);
  const [data, setData] = useState([]);
  const [dataloaded, setDataloaded] = useState(false)

  !dataloaded && (async()=>await fetch(" https://divinedev-api.onrender.com/v1/getreview").then(async (res) => {
    const bro = await res.json();
    if (bro.success) {
      console.log(bro.post);
      setDataloaded(true);
      setData(bro.post);
    } else {
      console.log(bro.message);
    }
  }))();

  return (
    <>
      <Header {...props} />
      <Hero {...props} />
      <Service data={Data.service} />
      <Portfolio data={Data.portfolio} />
      <Advantage data={Data.advantage} />
      <Testimonial data={data} />
      <Discuss />
      <Footer />
    </>
  );
}
