import React from 'react';
import styled from 'styled-components';
import Policy from '../src/policy';

interface modalProps {
  open: boolean;
  closeAction: () => void;
  data: string;
}

interface modalDivProps {
  open: boolean;
}

const ModalDiv = styled.div<modalDivProps>`
  display: ${props => (props.open ? 'flex' : 'none')};
  position: fixed;
  align-items: center;
  animation: modal-bg-show 0.3s;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.6);
  > button {
    ouline: none;
    cursor: pointer;
    border: 0;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalSection = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: modal-show 0.3s;
  overflow: hidden;
  > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }
`;

const ModalMain = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
  max-height: 700px;
  overflow: scroll;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  border: 0;
  background-color: transparent;
`;

const Modal = (props: modalProps) => {
  const { open, closeAction, data } = props;
  if (data == 'pp') {
    return (
      <ModalDiv open={open}>
        {open ? (
          <ModalSection>
            <header>
              {Policy.pp.header}
              <CloseButton className="close" onClick={closeAction}>
                &times;
              </CloseButton>
            </header>
            <ModalMain>{Policy.pp.data}</ModalMain>
          </ModalSection>
        ) : null}
      </ModalDiv>
    );
  }
  return (
    <ModalDiv open={open}>
      {open ? (
        <ModalSection>
          <header>
            <CloseButton className="close" onClick={closeAction}>
              &times;
            </CloseButton>
          </header>
          <ModalMain></ModalMain>
        </ModalSection>
      ) : null}
    </ModalDiv>
  );
};

export default Modal;
