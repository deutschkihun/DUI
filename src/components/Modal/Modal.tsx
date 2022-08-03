import React, { useState } from 'react';
import { useModalContext } from './context/useModalContext';
import close from './utils/close.svg';
import chevron_left from './utils/chevron_left.svg';
import chevron_right from './utils/chevron_right.svg';
import menu1 from './utils/menu1.svg'
import menu2 from './utils/menu2.svg';
import menu3 from './utils/menu3.svg';
import menu4 from './utils/menu4.svg';
import { ButtonHover, ModalFadeIn, ModalFadeOut, SliderLeftToRight, SliderRightToLeft } from './helper/animation';
import styled, { css } from 'styled-components';
import locale from './helper/locale.json';
import "./styles/Modal.scss"

interface Props {
  modalState: string;
}

const ModalComponent = styled.main`
  left: calc(50% - 460px / 2);
  top: calc(50% - 540px / 2);
  background: #ffffff;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04),
    0px 24px 72px rgba(36, 42, 48, 0.22);
  border-radius: 16px;
  width: 460px;
  height: 560px;
  position: absolute;
`;

const ModalToolbar = styled.section`
  padding: 18px 16px 2px;
`;

export const ToolBoxWrapper = styled.div`
  width: 428px;
  height: 30px;
  justify-content: flex-end;
  display: flex;
`;

export const DismissWrapper = styled.div`
  padding: 2px 2px 2px 16px;
  width: 44px;
`;

export const Close = styled.img`
  width: 19.5px;
  height: 19.5px;
  margin: 3.25px;

  &:hover {
    cursor: pointer;
    animation: ${ButtonHover} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
`;

// const ModalSwitch = styled.button`
//   background: #07b419;
//   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.02),
//     inset 0px -1px 0px rgba(0, 0, 0, 0.06),
//     inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
//   border-radius: 8px;
//   border: none;
//   padding: 0px 14px;
//   gap: 6px;
//   width: 80px;
//   height: 40px;

//   &:hover {
//     cursor: pointer;
//     animation: ${ButtonHover} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
//   }
// `;


interface DetailProps {
  name?: string;
  description?: string;
  isDetailOpen: boolean;
}

const DetailContainer = styled.section<DetailProps>`
  animation: ${p =>
    p.isDetailOpen
      ? css`
          ${SliderRightToLeft} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards
        `
      : css`none`};
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px 16px;
  gap: 14px;
`;

const DetailTitle = styled.title`
  display: flex;
  padding: 0px;
  gap: 2px;
  height: 28px;
  font-size: 28px;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #3c4651;
  margin: 2.5px 0px;
`;

const Desc = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #8d96a1;
`;

const Left = styled.img`
  width: 10px;
  height: 16px;
  margin: 6px 9px 6px 0px;

  &:hover {
    cursor: pointer;
    animation: ${ButtonHover} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
`;

const DetailDesc = styled.section`
  padding: 24px 40px;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  text-align: justify;
  overflow-y: auto;
  height: 413px;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 6px;
    padding-left: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #ccc;
    visibility: hidden;
  }
  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`;




interface ContentProps {
  isDetailOpen: boolean;
}

const ContentContainer = styled.section<ContentProps>`
  animation: ${p =>
    !p.isDetailOpen
      ? css`
          ${SliderLeftToRight} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards
        `
      : css`none`};
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 72px;
  padding: 0px 40px 16px;
  gap: 14px;
`;


const ContentBody = styled.div`
  height: 413px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    visibility: hidden;
  }
  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 40px;
  gap: 32px;

  > :hover,
  :hover {
    cursor: pointer;
  }
`;

const Label = styled.label`
  padding: 0px 32px 0px 0px;
  display: flex;
  gap: 14px;
  align-items: center;
`;

const Frame = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 10px;
`;

const LabelContainer = styled.span`
  width: 238px;
`;

const LabelTitle = styled.div`
  gap: 4px;
  font-weight: 600;
  font-size: 15px;
  line-height: 170%;
`;

const LabelDesc = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  color: rgba(36, 42, 48, 0.56);
`;

const Right = styled.img`
  padding: 12px 0px;
  width: 24px;
  height: 48px;
`;

const Detail = ({ name, description, isDetailOpen }: DetailProps) => {
  const { closeDetailModal } = useModalContext();
  return (
    <DetailContainer isDetailOpen={isDetailOpen}>
      <DetailHeader>
        <DetailTitle>
          <Left
            src={chevron_left}
            alt="left"
            onClick={() => closeDetailModal()}
          />
          <Title>
            {name as string} {locale.detail}
          </Title>
        </DetailTitle>
        <Desc>
          {locale.detail} {description as string}
        </Desc>
      </DetailHeader>
      <DetailDesc>{locale.detailDesc}</DetailDesc>
    </DetailContainer>
  );
};

export const Content = ({ isDetailOpen }: ContentProps): JSX.Element => {
  const { openDetailModal } = useModalContext();
  const images = [menu1, menu2, menu3, menu4];

  return (
    <ContentContainer isDetailOpen={isDetailOpen}>
      <ContentHeader>
        <Title>{locale.mainTitle}</Title>
        <Desc>{locale.mainDescription}</Desc>
      </ContentHeader>
      <ContentBody>
        {locale.menus.map((menu, i: React.Key | null | undefined) => (
          <ContentItem key={i} onClick={() => openDetailModal(menu)}>
            <Label>
              <Frame
                style={{ background: menu.background }}
                src={images.find(image => image.includes(menu.img))}
              />
              <LabelContainer>
                <LabelTitle>{menu.title}</LabelTitle>
                <LabelDesc>{menu.description}</LabelDesc>
              </LabelContainer>
            </Label>
            <Right src={chevron_right} alt="right" />
          </ContentItem>
        ))}
      </ContentBody>
    </ContentContainer>
  );
};


const ModalBackground = styled.main<Props>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(217, 217, 217, 0.5);
  z-index: 1;
  transform: scale(1);
  display: ${p => p.modalState === 'init' && css`none`};
  animation: ${p =>
    p.modalState === 'open'
      ? css`
          ${ModalFadeIn} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards
        `
      : p.modalState === 'close'
      ? css`
          ${ModalFadeOut} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards
        `
      : css`none`};
`;


const Modal = (): JSX.Element => {
  const {  isDetailOpen, currentDetailMenu, closeModal, openModal } =
    useModalContext();
    const [modalState, setModalState] = useState('open')
  return (
      <main className='main-container'>
        <ModalComponent>
          <ModalToolbar>
            <ToolBoxWrapper>
              <DismissWrapper>
                <Close src={close} onClick={() => closeModal()} />
              </DismissWrapper>
            </ToolBoxWrapper>
          </ModalToolbar>
          {isDetailOpen ? (
            <Detail
              isDetailOpen={isDetailOpen}
              name={currentDetailMenu.title}
              description={currentDetailMenu.description}
            />
          ) : (
            <Content isDetailOpen={isDetailOpen} />
          )}
        </ModalComponent>
      </main>
  );
};

export default Modal


