import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    background: url(${({ thumbnail }) => thumbnail}) no-repeat;
   ${media.phone`
       background: url(${({ thumbnail_mobile }) => thumbnail_mobile}) no-repeat;
       background-size: 100% 100%;
    `}
    background-size: 100% 100%;
    position: relative;
    ${media.bigPhone`
        background-attachment: scroll;
    `}
     ${media.tablet`
      height:auto;
    `}
    &:after {
        content: '';
        position: absolute;
        background: ${({ backgroundColor }) => backgroundColor || palette.black};
        opacity: 0.38;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .hero {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: ${({ size }) => {
            switch (size) {
                case 'small':
                    return `90px 0`;
                case 'medium':
                    return `105px 0`;
                default:
                    return `140px 0`;
            }
        }};
        text-align: center;
          ${media.tablet`
              padding :80px 0;
           `}
        .hero-title {
            color: ${palette.white};
            font-size: 4rem;
            margin-bottom: 0;
            text-align: center;
            ${media.desktop`
                font-size: 4.8rem;
            `};
            ${media.tablet`
                font-size: 4.5rem;
            `};
            ${media.bigPhone`
                font-size: 4rem;
            `}
        }
        .hero-description {
            color: ${palette.white};
            font-size: 1.8rem;
            width: 760px;
            margin: 12px auto 0;
            text-align: center;
            line-height: 1.8;
            ${media.desktop`
                font-size: 1.7rem;
                width: 650px;
                line-height: 1.9;
            `};
            ${media.tablet`
                width: auto;
            `};
            ${media.phone`
                font-size: 1.6rem;
            `}
        }
        .children {
            width: 100%;
            margin-top: 35px;
        }
    }
    .play-sign {
        margin-top:50px;
    }
     .description {
                color: ${palette.white};
                font-size: 1.8rem;
                font-weight: bold;
                ${media.tablet`
                    margin-bottom: 0;
                `}
            }
`;
export default Style;
