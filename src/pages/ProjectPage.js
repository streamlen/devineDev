/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from '../parts/Header.js';
import HeroPortfolio from '../parts/HeroPortfolio.js';
import Discuss from '../parts/Discuss.js';
import Footer from '../parts/Footer.js';
import AllPortfolio from '../parts/AllPortfolio.js';

import Data from '../json/landingPage.json';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <HeroPortfolio {...this.props} />
        <AllPortfolio data={Data.portfolio} />
        <Discuss {...this.props} />
        <Footer />
      </>
    );
  }
}
