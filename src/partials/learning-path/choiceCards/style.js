import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .choice-cards {
        .choice-card-swiper {
            position: relative;
            padding: 0 150px;
            ${media.xDesktop`
                padding: 0 80px;
            `}
            ${media.desktop`
                padding: 0 60px;
            `}
            ${media.tablet`
                padding: 0;
            `}
            .swiper-container {
                overflow: hidden;
                .swiper-wrapper {
                    display: inline-flex;
                    padding: 5px 0;
                    .item-wrapper {
                        overflow: hidden;
                        width: 0;
                    }
                }
                .swiper-button {
                    position: absolute;
                    outline: none;
                    cursor: pointer;
                    &.prev-choice {
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);
                        ${media.xxDesktop`
                            right: 0;
                        `}
                          ${media.tablet`
                            right: -12px;
                            width: 20px;
                        `}
                    }
                    &.next-choice {
                        top: 50%;
                        left: 0px;
                        transform: translateY(-50%);
                        ${media.xxDesktop`
                            left: 0;
                        `}
                        ${media.desktop`
                            left: 27px;
                        `}
                         ${media.tablet`
                            left: -12px;
                            width: 20px;
                        `}
                         ${media.phone`
                            left: 0;
                        `}
                    }
                }
            }
        }

        .choice-card-title {
            text-align: center;
            color: ${palette.darkGreyTertiary};
            font-size: 2.6rem;
            letter-spacing: -1px;
            
            ${media.phone`
               margin-bottom: 10px;
                font-size: 2.4rem;
            `}
        }
    }
     .swiper-button.prev-choice img:hover, .swiper-button.next-choice img:hover{
        transform: scale(1.25, 1.25);
        transition: all .5s;
         ${media.phone`
           transform: none;
           transition: none;
        `}
     }
    
     .swiper-button.prev-choice img:active, .swiper-button.next-choice img:active{
       ${media.phone`
           transform: scale(2, 2);
           transition: all .5s;
       `}
     }
      .swiper-slide-active{
          &:after {
               content: '';
                position: relative;
                border-left: 25px solid transparent;
                border-right: 25px solid transparent;
                border-top: 40px solid #ffff;
                bottom: -30px;
                right: 40%
             }
    }
`;

export default Style;
