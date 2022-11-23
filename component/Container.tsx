import styled from 'styled-components';

interface ContainerProps {
  position?: string;
  flexDirection?: string;
  textAlign?: string;
  alignItems?: string;
  overflow?: string;
}

const Container = styled.div<ContainerProps>`
  width: calc(100% - 230px);
  max-width: 1630px;
  min-width: 1630px;
  display: flex;
  position: relative;
  margin: 30px 115px;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
`;

export const ContainerWithoutMargin = styled.div<ContainerProps>`
  width: calc(100% - 230px);
  max-width: 1690px;
  min-width: 1600px;
  display: flex;
  position: relative;
  margin: 30px;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
`;

export default Container;
