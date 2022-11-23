import React from 'react';
import styled from 'styled-components';
import { ContainerWithoutMargin } from './Container';

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  top: 120px;
  font-family: SCore;
  color: #717171;
  bakcgournd-color: white;
  display: flex;
  justify-content: center;
`;

const FooterArea = styled.div`
  display: flex;
`;

const FooterCardList = styled.div`
  display: flex;
  margin-right: 50px;
`;

const FooterCardWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterCardIcon = styled.img`
  margin-bottom: 10px;
`;

const FooterCardTitle = styled.div`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
`;

const FooterCardDesc = styled.div`
  width: 270px;
  font-weight: 200;
  font-size: 20px;
  line-height: 28px;
  word-break: keep-all;
  text-align: center;
`;

const FooterPartition = styled.img`
`;

const FooterContactWrapper = styled.div`
  width: 500px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;
  font-size: 19px;
  line-height: 18px;
  white-space: nowrap;
  > span {
    font-weight: 600;
    font-size: 23px;
  }
`;

const FooterCard = () => {
  return (
    <FooterCardWrapper>
      <FooterCardIcon src="/images/icons/money.png" alt="payment settings" />
      <FooterCardTitle>결제 설정</FooterCardTitle>
      <FooterCardDesc>원하는 결제 수단을 설정한 후 이 링크를 클릭해 NFT 마켓에 연결하세요.</FooterCardDesc>
    </FooterCardWrapper>
  );
}

const Footer = () => {
  return (
    <FooterWrapper>
      <ContainerWithoutMargin>
        <FooterArea>
          <FooterCardList>
            <FooterCard />
            <FooterCard />
            <FooterCard />
            <FooterCard />
          </FooterCardList>
          <FooterPartition src="/images/footer_partition.png" alt="footer partition"/>
          <FooterContactWrapper>
            <span>CONTACT</span>
            <br />
            <br />
            <br />
            T.051-941-1055 / F.051-941-1054
            <br />
            <br />
            입사지원 및 채용문의: glitch@glitch.co.kr
            <br />
            <br />
            All copyrights reserved @ 2022 - Developed by GLTICHSTUDIO
          </FooterContactWrapper>
        </FooterArea>
      </ContainerWithoutMargin>
    </FooterWrapper>
  );
};

export default Footer;
