import React from 'react';
import Banner from './Banner';
import About from './About';
import Type from './Type';
import Review from './Review';
import Blog from './Blog';
import reviewers from '../../../public/db.json';
function Index() {
  return (
    <>
      <Banner />
      <About />
      <Type />
      <Review slides={reviewers} />
      <Blog />
    </>
  );
}
export default Index;
