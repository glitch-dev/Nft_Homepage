import type { NextPage } from 'next';
import react from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import Main from '../component/sections/Main';
import Shop from '../component/sections/Shop';
import Footer from '../component/Footer';

const BodyWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
`;

const Home: NextPage = () => {
  return (
    <BodyWrapper>
      <Header />
      <Main />
      <Shop />
      <Footer />
    </BodyWrapper>
  );
};

export default Home;
