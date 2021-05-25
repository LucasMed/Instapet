import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => { return css`animation: ${time} ${fadeInKeyframes} ${type};` }

const scaleDown = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
`;
export const scale = ({ time = "1s", type = "ease" } = {}) => css`animation: ${time} ${scaleDown} ${type}`;

const positionDownKeyFrames = keyframes`
  from {
    margin-top:-100px;
  }
  to {
    margin-top:0;
  }
`;
export const positionDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${positionDownKeyFrames} ${type}`
