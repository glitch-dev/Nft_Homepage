import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 120px;
  position: relative;
  background-color: #f9f9f9;
`;

const BackgroundImg = styled.img`
  position: relative;
  top: 0px;
  left: 0px;
  border-radius:30px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  font-family: AlteHaasGrotesk;
`;

const StyledH1 = styled.h1`
  font-family: SCore;
  font-weight: 400;
  font-size: 58px;
  padding: 0;
  margin: 0;
  margin-bottom: 50px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
`;

const StyledP = styled.p`
  font-family: SCore;
  font-weight: 300;
  font-size: 24px;
  padding: 0;
  margin: 0;
  color: white;
  text-shadow: 1px 1px 2px #000000;
`;


const Main: React.FC = () => {
  return (
    <MainWrapper>
      <Container>
        <BackgroundImg src="/images/main_background.png"/>
        <ContentWrapper>
          <StyledH1>
            아크앤젤 NFT 마켓
          </StyledH1>
          <StyledP>
            글리치 스튜디오의 블록체인 기술로 연결되는 Business Invocation
            <br />
            글리치 스튜디오의 블록체인 기술은 텐센트 출신 창업자가 설립한
            <br />
            중국계 해외투자법인 메타코드의 지원을 받아 개발됩니다.
          </StyledP>
        </ContentWrapper>
      </Container>
    </MainWrapper>

  );
};

export default Main;
