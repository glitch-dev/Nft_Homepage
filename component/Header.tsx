import React, { useState, useCallback, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ContainerWithoutMargin } from '../component/Container';

interface menuItemProps {
  name: string;
  path: string;
  action?: MouseEventHandler;
}

const LogoWrapper = styled.div`
  position: relative;
  margin-right: 25px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <a href="#">
        <img src="/images/company_logo.png" alt="company logo"/>
      </a>
    </LogoWrapper>
  );
};

const LanguageWrapper = styled.div`
  position: relative;
  margin-right: 580px; 
`;

const Language = () => {
  return (
    <LanguageWrapper>
      <img src="/images/lang_partition.png" alt="language select" />
    </LanguageWrapper>
  )
};

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-between;
  width: 540px;
  padding: 0 20px;
  height: 58px;
  background: #3E4CFF;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  > input {
    color: #c7c7c7;
    background: none;
    border: none;
    outline: none;
    font-family: SCore;
    font-weight: 400;
    font-size: 20px;
    font-weight: 200;
    ::placeholder {
      color: #c7c7c7;
      opacity: 1;
    }
  }
  > img {
    height: 50%;
    aspect-ratio: 1/1;
  }
`;

const Search = () => {
  return (
    <SearchWrapper>
      <input placeholder="검색하기"/>
      <img src="/images/icons/search.png" alt="search icon" onClick={() => {alert('준비중인 기능입니다.')}} />
    </SearchWrapper>
  );
};

const sections: menuItemProps[] = [
  { name: '홈', path: '#' },
  { name: '상품탐색', path: '#', action: () => {alert('준비중인 기능입니다.')} },
  { name: '고객센터', path: '#', action: () => {alert('준비중인 기능입니다.')} },
  { name: '장바구니', path: '#', action: () => {alert('준비중인 기능입니다.')} },
];

const MenuItemWrapper = styled.div`
  width: 100px;
  color: #676767;
  font-family: Score;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: center;
  > a {
    color: inherit;
    text-decoration: none;
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
`;

const MenuItem: React.FC<menuItemProps> = props => {
  const { name, path, action = () => {} } = props;
  return (
    <MenuItemWrapper onClick={action}>
      <a href={path}>{name}</a>
    </MenuItemWrapper>
  );
};

const Menu = () => {
  return (
    <MenuWrapper>
      {sections.map(section => <MenuItem key={`menu-item-${section.name}`} {...section}/>)}
    </MenuWrapper>
  )
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 118px;
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 6px 3px rgb(0 0 0 / 6%);
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <ContainerWithoutMargin alignItems='center'>
        <Logo />
        <Language />
        <Search />
        <Menu />
      </ContainerWithoutMargin>
    </HeaderWrapper>
  );
};

export default Header;
