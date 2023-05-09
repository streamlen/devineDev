/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';


import Header from '../parts/Header.js';
import PortfolioDetail from '../parts/PortfolioDetail.js';
import Footer from '../parts/Footer.js';

import Data from '../json/landingPage.json';

const  ProjectDetailPage = (props)=>{
   window.scrollTo(0, 0);
   let id = props.id;
   console.log(id);
   const detailData = Data.portfolio.filter((item) => item.id === `${id}`);
    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Header location={props.location} />
        <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
        <Footer />
      </>
    );
  }

  export default ProjectDetailPage;