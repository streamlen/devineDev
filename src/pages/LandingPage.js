/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from '../parts/Header.js';
import Hero from '../parts/Hero.js';
import Service from '../parts/Service.js';
import Portfolio from '../parts/Portfolio.js';
import Advantage from '../parts/Advantage.js';
import Testimonial from '../parts/Testimonial.js';
import Discuss from '../parts/Discuss.js';
import Footer from '../parts/Footer.js';

import Data from '../json/landingPage.json';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero {...this.props} />
        <Service data={Data.service} />
        <Portfolio data={Data.portfolio} />
        <Advantage data={Data.advantage} />
        <Testimonial data={Data.testimonial} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
