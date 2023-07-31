import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    background-image: url('/static/images/Union 1.png');    
    background-size:cover;
    background-repeat: no-repeat;  
    padding: 50px 0 ;
    text-align: center;
    h1 {
        font-size: 3.9rem;
        color: #13deb5;
        text-align: center;
        margin-bottom: 30px;
    }
    h2 {
       margin-top: 150px;
    }
    .price-card-section {
        position: relative;
        ${media.phone`
            max-height: 570px;
            width: 100%!important;
        `}
        .price-card-container {
            overflow: hidden;
            position: relative;
            overflow-x: auto;
            display: flex;
            padding-bottom: 18px;
            .price-card-wrapper {
                display: flex;
                justify-content: center;
                direction: rtl;
                margin: 0 auto;
            }
        }
    }
    .swiper-container {
        overflow: hidden;
        padding: 15px 0;
        .swiper-wrapper {
            .swiper-slide {
                padding: 0 12px;
                width: 400px!important;
                 ${media.phone`
                       width: 100%!important;
                `}
            }
        }
        .swiper-button {
            position: absolute;
            outline: none;
            cursor: pointer;
            svg{
                width: 20px
                }
            &.prev-choice {
                top: 50%;
                right: -43px;
                transform: translateY(-50%);
                ${media.xxDesktop`
                    right: -31px;
                `}
                ${media.xDesktop`
                    right: -30px;
                `}
                ${media.desktop`
                    right: 18px;
                `}
                ${media.tablet`
                    right: 5px;
                `}
                ${media.phone`
                    right: -17px;
                `}
            }
            &.next-choice {
                top: 50%;
                left: -43px;
                transform: translateY(-50%);
                ${media.xxDesktop`
                    left: -31px;
                `}
                ${media.xDesktop`
                    left: -30px;
                `}
                ${media.desktop`
                    left: 18px;
                `}
                ${media.tablet`
                    left: 5px;
                `}
                ${media.phone`
                    left: -17px;
                `}
            }
            &.next-choice, &.prev-choice {
                path{
                    fill: #e4e4e4;
                }
            }
        }
    }
    .swiper-container .swiper-button svg {
         ${media.phone`
             width: 13px;
         `}
    }
    .price-sentences {
          ${media.phone`
             display: none
         `}
    }
`;
export default Style;
