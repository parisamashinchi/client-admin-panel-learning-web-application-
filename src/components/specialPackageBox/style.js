import styled from 'styled-components';
import media from 'theme/MediaQuery';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    background: url('/static/images/hero-image.png') no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: hidden;
    ${({ noBackground }) => (noBackground ? `background: none;` : ``)};
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(-0.25turn , ${({ path }) => (path ? `#4EA0A0 0%` : `${palette.lightGreen}`)},
         ${({ path }) => (path ? ` #68D9A0 100%` : `${palette.blueGreen}`)}
          );
        
        opacity: 0.9;
        ${({ noBackground }) => (noBackground ? `display: none;` : ``)};
    }
    .package-box {
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 90px 0;
        .design-package {
            .design-package-wrapper {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                h1 {
                    color: ${({ noBackground , path}) => (noBackground  ? `#383838` : `${palette.white}`)};
                    font-size: 3rem;
                     ${media.tablet`
                           font-size: 2.5rem;
                     `};
                }
                p {
                    color: ${({ noBackground, path }) => (noBackground ? `${palette.lightGreyFourtyThird}` : `${palette.white}`)};
                }
                .price-box {
                    background: ${({ noBackground }) => (noBackground ? `${palette.lightGreyFourtyFourth}` : `${palette.white}`)};
                    display: inline-flex;
                    border-radius: 7px;
                    padding-left: 28px;
                    .discount {
                        display: inline-block;
                        border-radius: 0 7px 7px 0;
                        background: ${palette.red};
                        color: ${palette.white};
                        padding: 5px;
                        line-height: 1;
                        .number {
                            font-size: 2.5rem;
                            font-weight: bold;
                        }
                        .text {
                            font-size: 1.1rem;
                        }
                    }
                    .discounted-price {
                        display: flex;
                        align-items: center;
                        margin-right: 12px;
                        .price {
                            color: ${palette.lightGreen};
                            font-size: 2.2rem;
                            letter-spacing: 1px;
                            ${media.phone`
                                font-weight: 700;
                            `};
                           
                        }
                        .unit {
                            font-size: 1.3rem;
                            margin-right: 5px;
                            color: ${palette.lightGreyTwentyFirst};
                            font-weight: bold;
                        }
                    }
                    .old-price {
                        display: flex;
                        align-items: center;
                        margin-right: 20px;
                        position: relative;
                        padding: 0 5px;
                        .price {
                            color: ${palette.lightGreyNineteenth};
                            font-size: 2.2rem;
                            letter-spacing: 1px;
                             ${media.phone`
                                font-weight: 700;
                            `};
                        }
                        .unit {
                            color: ${palette.lightGreyNineteenth};
                            font-size: 1.3rem;
                            margin-right: 5px;
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 100%;
                            height: 1px;
                            background: ${palette.lightGreyNineteenth};
                            transform: translate(-50%, -50%);
                        }
                    }
                    ${media.xDesktop`
                        padding-left: 10px;
                        .discount{
                            padding: 8px 5px;
                        }
                        .discounted-price, .old-price{
                            margin-right: 12px;
                        }
                    `}
                    ${media.desktop`
                        .discounted-price, .old-price{
                            margin-right: 12px;
                        }
                    `}
                     ${media.tablet`
                            padding-left: 0;
                            margin-right:30px;
                            .discount{
                              width: 50px;
                             }
                      `}
                      ${media.tablet`
                        margin-right:0px;
                      `}
                }
            }
            .more-info-button {
                margin-top: 42px;
                border-radius: 15px;
                background: #ffe51e;
                color:#686868;
                padding: ${({ path }) => (path ? '10px 50px' : '10px 60px' )};
                transition: all 0.5s ease;
                font-size:${({ path }) => (path ? ' 1.4rem' : ' 1.6rem' )};
                font-weight:${({ path }) => (path ? ' bold' : ' normal' )};
             
                img {
                    opacity: 0;
                    right: -20px;
                    position: relative;
                    width: 15px;
                }
                 .title {
                        color: ${({ golden }) => (golden ? `${palette.darkGreySecondary}` : ` ${palette.darkGreySecondary}`)};
                        font-size: 1.5rem !important;
                        right: -12px;
                        position : relative;
                         ${media.phone`
                            left: 10px;
                            right: auto;
                        `}
                    }
                &:hover {
                     width: 215px;
                     img {
                          opacity: 1;
                          transition: .5s ease;
                          right: 50px;
                     }
                     .title, .special-title {
                         transition: 2s ease;
                         right: 80px;
                         opacity: 0;
                         display: none;
                     }
                }
            }
        }
        .card-boxes {
            .swiper-container {
                overflow: hidden;
                .swiper-wrapper {
                    display: flex;
                    padding: 5px 0;
                    ${media.xxDesktop`
                        display: inline-flex;
                    `}
                    .swiper-slide {
                        &:first-child {
                            .card-box-item {
                                button {
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ${media.desktop`
        .package-box{
            .card-boxes{
                .swiper-container{
                    .swiper-wrapper{
                        display: inline-flex;
                    }
                }
            }
        }
    `}
    ${media.tablet`
        .package-box{
            padding: 20px;
            .design-package{
                text-align: center;
                padding-right: 0!important;
                padding-left: 0!important;
                .design-package-wrapper{
                    align-items: center;
                     .price-box {
                           width:  ${({ path }) => (path ? '235px;  ' : '215px;  ' )};
                           .discount {
                                width: 35px;
                                .number {
                                    font-size: 1rem;
                                 }
                                 .text {
                                    font-size: .9rem;
                                 }
                            }
                           .price {
                             font-size: 1.5rem!important;
                           }
                           .unit {
                             font-size: .7rem!important;
                           }
                      }
                }
            }
            .card-boxes{
                margin-top: 40px;
            }
        }
    `}
`;
export default Style;
