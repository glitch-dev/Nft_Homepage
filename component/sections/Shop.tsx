import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Container from '../Container';

interface cardProps {
  name: string;
  image: string;
  price: string;
  time: string;
  decoType: string;
  heartCount: number;
}

interface cardListProps {
  cardItems: cardProps[];
}

interface backgroundProps {
  backgroundColor?: string;
}

interface categoryProps extends backgroundProps{
  krName: string;
  enName: string;
  list: cardProps[];
}

const characterList = [
  {
    name: "에리스 SSR",
    image: "sc1.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 3274,
  },
  {
    name: "하나비 SSR",
    image: "sc2.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 2389,
  },
  {
    name: "레이시아 SSR",
    image: "sc3.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 1756
  },
  {
    name: "베르밀리 SR",
    image: "sc4.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "silver",
    heartCount: 2481,
  },
  {
    name: "리오나 SR",
    image: "sc5.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "silver",
    heartCount: 4314,
  },
];

const shipList = [
  {
    name: "아르미온 T8",
    image: "ss1.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 1125,
  },
  {
    name: "갤리온 T8",
    image: "ss2.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 824,
  },
  {
    name: "캐러밸 SSR",
    image: "ss3.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 167,
  },
  {
    name: "코그 T8",
    image: "ss4.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "silver",
    heartCount: 241,
  },
  {
    name: "???? T8",
    image: "ss5.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "silver",
    heartCount: 436,
  },
];

const gremlinList = [
  {
    name: "버섯 SR",
    image: "sg1.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 689,
  },
  {
    name: "고양이 SR",
    image: "sg2.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 997,
  },
  {
    name: "거북이 SR",
    image: "sg3.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "gold",
    heartCount: 517,
  },
  {
    name: "병아리 SR",
    image: "sg4.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "silver",
    heartCount: 468,
  },
  {
    name: "드래곤 SR",
    image: "sg5.png",
    price: "999,999,999",
    time: "24:99:99",
    decoType: "silver",
    heartCount: 1729,
  },
];

const categories = [
  {
    krName: '캐릭터',
    enName: 'CHARACTERS',
    backgroundColor: '#F9F9F9',
    list: characterList,
  }, 
  {
    krName: '함선',
    enName: 'SHIPS',
    backgroundColor: '#E6E6E6',
    list: shipList,
  },
  {
    krName: '그렘린',
    enName: 'GREMLIN',
    backgroundColor: '#F9F9F9',
    list: gremlinList,
  },
];

const CardWrapper = styled.div`
  width: 322px;
  height: 391px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const CardBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const CardInnerWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 270px;
`;

const CardImageDeco = styled.img`
  width: 270px;
  position: absolute;
  top: 215px;
`;

const CardDescArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const CardDesc = styled.div`
  margin-left: 15px;
  font-family: SCore;
  font-weight: 400;
  font-size: 17px;
  > span {
    font-family: SCore;
    font-weight: 500;
    font-size: 17px;
  }
`;

const CardTime = styled.div`
  position: absolute;
  top: 205px;
  right: 10px;
  font-family: SCore;
  font-weight: 500;
  font-size: 17px;
  color: white;
`;

const CardHeartArea = styled.div`
  font-family: SCore;
  font-weight: 200;
  font-size: 15px;
  color: #434343;
  margin-right: 10px;
`;

const CardHeart = styled.img``;

const Card: React.FC<cardProps> = props => {
  const { image, decoType, time, name, price, heartCount } = props;
  return (
    <CardWrapper>
      <CardBackgroundImage src="images/card_frame.png" alt="card frame" />
      <CardInnerWrapper>
        <CardImage src={`images/items/${image}`} alt="item" />
        <CardImageDeco src={`images/deco_${decoType}.png`} alt="card deco" />
        <CardTime>{time}</CardTime>
        <CardDescArea>
          <CardDesc>
            {name}
            <br />
            <span>{price} &#8361;</span>
          </CardDesc>
          <CardHeartArea>
            {heartCount}&nbsp;
            <CardHeart src="images/icons/heart.png" alt="card heart" />
          </CardHeartArea>
        </CardDescArea>
      </CardInnerWrapper>
    </CardWrapper>
  );
};

const CardListWrapper = styled.div`
  display: flex;
`;

const CardList: React.FC<cardListProps> = props => {
  const { cardItems } = props;
  return (
    <CardListWrapper>
      {cardItems.map(cardItem => <Card key={`card-item-${cardItem.name}`} {...cardItem}/>)}
    </CardListWrapper>
  )
};

const CategoryWrapper = styled.div<backgroundProps>`
  width: 100%;
  background-color: ${props=>props.backgroundColor};
  display: flex;
  justify-content: center;
`;

const CategoryListWrapper = styled.div``;

const CategoryTitleWrapper = styled.div`
  padding: 30px 0 60px 0;
  display: flex;
  align-items: center;
  font-family: SCore;
`;

const CategoryTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
`;

const CategoryEnTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #818181;
`;

const SeeAllWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 45px 0 35px 0;
  > span {
    font-family: Score;
    font-weight: 500;
    font-size: 15px;
    color: #818181;
    cursor: pointer;
  }
  > img {
    cursor: pointer
  }
`;

const Category: React.FC<categoryProps> = props => {
  const { krName, enName, backgroundColor, list } = props;
  return (
    <CategoryWrapper backgroundColor={backgroundColor}>
      <Container flexDirection="column">
        <CategoryTitleWrapper>
          <CategoryTitle>{krName}&nbsp;</CategoryTitle>
          <CategoryEnTitle>{enName}</CategoryEnTitle>
        </CategoryTitleWrapper>
        <CategoryListWrapper>
          <CardList cardItems={list}/>
        </CategoryListWrapper>
        <SeeAllWrapper>
          <span onClick={() => {alert('준비중인 기능입니다.')}}>전체보기&nbsp;</span>
          <img src="/images/icons/blue_arrow.png" />
        </SeeAllWrapper>
      </Container>
    </CategoryWrapper>
  );
};

const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 120px;
`;

const Shop = () => {
  return (
    <ShopWrapper>
      {categories.map((category) => <Category key={`category-${category.enName}`} {...category} />)}
    </ShopWrapper>
  );
};

export default Shop;