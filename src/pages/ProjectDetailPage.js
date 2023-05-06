/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';


import Header from '../parts/Header.js';
import PortfolioDetail from '../parts/PortfolioDetail.js';
import Footer from '../parts/Footer.js';

import Data from '../json/landingPage.json';

export default class ProjectDetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
   let useParams = this.props.location
   console.log(useParams);
    const detailData = Data.portfolio.filter((item) => item.id === `${useParams}`);

    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Header {...this.props} />
        <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
        <Footer />
      </>
    );
  }
}
