import { keyframes } from 'styled-components';

export const ModalFadeIn = keyframes`
     0% {
        transform:scale(0);
        opacity:0;
      }
      100% {
        transform:scale(1);
        opacity:1;
      }
`;

export const ModalFadeOut = keyframes`
      0% {
        transform:scale(1);
        opacity:1;
      }
      100% {
        transform:scale(0);
        opacity:0;
      }
`;

export const SliderRightToLeft = keyframes`
      0% {
        transform: translateX(30px);
        opacity:0;
      }
      100% {
        transform: translateX(0px);
        opacity:1;
      }
`;

export const SliderLeftToRight = keyframes`
      0% {
        transform: translateX(-30px);
        opacity:0;
      }
      100% {
        transform: translateX(0px);
        opacity:1;
      }
`;

export const ButtonHover = keyframes`
      0% {
        transform: scale(1)
      }
      100% {
        transform: scale(1.4)
      }
`;

export const ItemHover = keyframes`
      0% {
        transform: scale(1)
      }
      100% {
        transform: scale(1.2)
      }
`;
