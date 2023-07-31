import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
      background: transparent linear-gradient(73deg, #90CCCC 0%, #358484 100%) 0% 0% no-repeat padding-box;
      height: 600px;
      width: 100%;
      overflow: hidden;
       ${media.phone`
         height: 400px
      `}
      &:before{
          // content: "";
          // position: absolute;
          // top: 80px;
          // left: 0;
          // width: 900px;
          // height: 555px;
          // background:  url(${({ background }) => background})  no-repeat;
          // // transform: skew(-20deg);
          // // transform-origin:top;
          // clip-path: polygon(0 0, 100% 0%, calc(100% - 200px) 100%, 0% 100%);
          // border-radius: 0 0 50px 0;
          // background-size: 100% 100%;
           ${media.phone`
               background: ${({ mobileThumbnail }) => `url(${mobileThumbnail})`} no-repeat;
              transform: none;
               height: 390px;
               top:0px;
              width: 100%;
              content: "";
              position: absolute;
              margin-top: 50px;
              background-size: 100%;
           `}
        }
        .skew {
          width: 900px;
          transform: skew(-16deg, 0);
          overflow:hidden;
          position:relative;
          border-radius: 0 0 40px;
          ${media.xxxDesktop`
            left: -15px
          `}
           ${media.xxDesktop`
              left: 50px;
           `}
            img{
                float: left;
                transform : skew(16deg, 0);
                position : relative;
                left: 80px;
                 ${media.xxxDesktop`
                   width: 900px;
                   max-width: inherit;
                   left: 82px;
                `}
            }
       }
           .ant-col-1 ,.ant-col-2, .ant-col-10, .ant-col-8 , .ant-col-9 , .ant-col-12 , .ant-col-13 , .ant-col-16, .ant-col-20 , .ant-col-24,.ant-col-xxl-1, .ant-col-xxl-2, .ant-col-xxl-3, .ant-col-xxl-4, .ant-col-xxl-5, .ant-col-xxl-6, .ant-col-xxl-7, .ant-col-xxl-8, .ant-col-xxl-9, .ant-col-xxl-10, .ant-col-xxl-11, .ant-col-xxl-12, .ant-col-xxl-13, .ant-col-xxl-14, .ant-col-xxl-15, .ant-col-xxl-16, .ant-col-xxl-17, .ant-col-xxl-18, .ant-col-xxl-19, .ant-col-xxl-20, .ant-col-xxl-21, .ant-col-xxl-22, .ant-col-xxl-23, .ant-col-xxl-24{
            float: right;
            color: white;
            h1 {
                color: white;
                width: 450px;
                margin-top: 50px;
                ${media.tablet`
                  width: 100%;
                  font-size: 25px;
                  margin-top: 70px;
                  padding-left: 35px;
               `}
            }
            p {
              width: 400px;
               ${media.tablet`
                  width: 100%;
                  padding-left: 20px;
                  font-size: 14px;
               `}
            }
            
            h3 {
                color: white;
                font-size: 17px;
                 ${media.tablet`
                  font-size: 14px;
               `}
                .toman {
                    font-size: 12px;
                    margin:10px;
                }
            }
            .countdown {
                margin-bottom: 60px;
                top: 15px;
                position: relative;
                .number {
                  font-size: 20px;
                   ${media.tablet`
                     font-size: 15px;
                  `}
                 }
                .text {
                    font-size: 10px;
                    line-height: 10px;
                }
                 h3 {
                    padding-right: 22px;
                    padding-left: 10px;
                }
            }
            .divider {
                width: 3px;
                height: 1.9em;
                background-color: #f2a347;
            }
            .course-register-button{
                 background-color: #ffe51e;
                 margin-left:10px;
                 width: 180px;
                 border-radius: 11px;
                 ${media.tablet`
                     width: 120px;
                  `}
                  img {
                    opacity: 0;
                    right: -20px;
                    font-weight: bold; 
                     width: 15px;
                  }
                  .title {
                     right: -10px;
                     position: relative;
                  }
                  &:hover {
                    img {
                        transition: .3s ease;
                        opacity: 1!important;
                        right: 25px;
                        position: relative;
                    }
                    .title {
                      transition: .3s ease;
                      right: 50px;
                      opacity: 0
                    }
                 }
             }
            .course-title-button{
                background-color: transparent;
                border: 1px solid white;
                color: white;
                width: 180px;
                border-radius: 11px;
                margin-bottom: 20px;
                ${media.tablet`
                 width: 120px;
              `}
            }
        .share-btn{
            background-color: transparent;
            border: 1px solid white;
            height: 45px;
            color: white;
            padding: 10px;
            border-radius: 11px;
             i {
                font-size:20px;
                margin: 0;
                color: white;
            }
            &:hover {
                background-color: #5FC1A4;
                i {
                    color: white;
                }
            }
        }
        .play-sign {
            position: absolute;
            top: 250px;
            width: 70px;
            height: 70px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border-radius: 47px;
            transition: width ease-in-out 0.3s;
            z-index: 999;
            box-shadow: 1px 1px 0px 10px #ffffff59;
            margin: 0 auto;
            ${media.xxxDesktop`
                right: 35px;
           `}
            ${media.xxDesktop`
                 right: 20px;
           `}
            ${media.phone`
                 border-radius: 8px;
                 margin: 0 auto;
                 position: relative;
             `}
            &:hover {
                width: 220px;
                border-radius: 20px;
                .hide {
                    display: block;
                    color: gray;
                    text-align: center;
                    font-size: 16px;
                    top: 20px;
                    left: 70px;
                    position: relative;
                    font-weight: bold;
                }
            }
             &:before {
                width: 118px;
                height: 118px;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                border-radius: 59px;
                opacity: 0.3;
            }
            button {
                width: 100%;
            }
            img {
                top: 37%;
                right: 22px;
                position: absolute;
                width: 20px;
            }
              ${media.phone`
                margin-top: 100px;
                right: 0;
                width: 220px;
                height: 50px;
                z-index: 0;
                 top: 100px;
                p {
                    margin-top: 0px;
                    color: gray;
                    left: 20%;
                    position: relative;
                    width: 100%;
                    padding: 10px;
                    left: -10px;
                }
                img{
                    top: 30%;
                     ${media.phone`
                        right: 12%;
                     `}
                }
                &:hover {
                   border-radius: 10px;
                }
           `}
         }
          
             .countdown-item {
                padding-right: 0!important;
                padding-left: 0!important
            }
            .hide {
              display: none;
            }
            
             .property {
                padding:10px;
                span {
                    font-size: 1rem;
                    font-weight: bold;
                }
             }
             .ant-anchor-link{
                padding: initial;
             .ant-anchor-link-title{
                    overflow: visible;
              }
           }
       }
    .hero-container {
        width: 1100px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        padding: 80px 0 110px;
        ${media.xDesktop`
            width: 900px;
        `}
        ${media.desktop`
            width: 650px;
        `}
        ${media.tablet`
            width:100%;
            padding: 100px 0 30px;
        `}
        .statistics {
            .hero-list {
                ${media.tablet`
                    padding-right: 0;
                `}
                .col {
                    text-align: left;
                    ${media.tablet`
                        width: 100%;
                        text-align: center;
                        &:nth-child(2){
                            display: none;
                        }
                    `}
                }
                .hero-list-item {
                    display: flex;
                    color: ${palette.white};
                    align-items: center;
                    margin-bottom: 15px;
                    .hero-list-title {
                        font-size: 2.2rem;
                        font-weight: bold;
                        position: relative;
                        line-height: 1.5;
                        ${media.tablet`
                            font-weight: normal;
                        `}
                        ${media.phone`
                            font-size: 2rem;    
                        `}
                        &:after {
                            content: '';
                            position: absolute;
                            height: 17px;
                            width: 2px;
                            background: ${palette.white};
                            top: 50%;
                            left: -86px;
                            transform: translateY(-50%);
                            ${media.tablet`
                                display: none;
                            `}
                        }
                        .mobile-separator-line{
                            display: none;
                            ${media.tablet`
                                display: inline-block;
                                height: 10px;
                                width: 2px;
                                background: ${palette.white};
                                margin: 0 20px;
                            `}
                        }
                        ${media.xDesktop`
                            &:after{
                                left: -71px;
                            }
                        `}
                        ${media.desktop`
                            &:after{
                                left: -50px;
                            }
                        `}
                        ${media.tablet`
                            &:after{
                                left: -20px;
                            }
                        `}
                    }
                    .mobile-hero-list-number{
                        display: none;
                        ${media.tablet`
                            display: inline-block;
                        `}
                    }
                    .hero-list-number-wrapper {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        .hero-list-number {
                            font-size: 2.4rem;
                            letter-spacing: 1px;
                        }
                    }
                }
            }
        }
        }
        .design-package {
            ${media.tablet`
                margin-top: 10px;
            `}
            .design-package-container {
                display: flex;
                justify-content: center;
                margin-top: 5px;
                ${media.tablet`
                    justify-content: center;
                `}
                .design-package-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .play-sign {
                        background: none;
                        border: none;
                        cursor: pointer;
                        outline: none;
                        img {
                            width: 55px;
                            height: 55px;
                            border-radius: 50%;
                            transition: all 0.5s ease;
                            opacity: 0.8;
                        }
                        &:hover {
                            img {
                                opacity: 1;
                            }
                        }
                    }
                    .package-design-title {
                        font-size: 3rem;
                        color: ${palette.white};
                        letter-spacing: 0.5px;
                        margin-top: 25px;
                        margin-bottom: 20px;
                        text-align: center;
                        ${media.tablet`
                            font-weight: normal;
                        `}
                    }
                    .package-design-description {
                        font-size: 1.6rem;
                        color: ${palette.white};
                        text-align: center;
                    }
                    .register-button {
                        padding: 8px 90px;
                        border-radius: 11px;
                        background: ${palette.yellow};
                        span {
                            color: ${palette.black};
                        }
                        &:hover {
                            background: ${palette.black};
                            span {
                                color: ${palette.yellow};
                            }
                        }
                        ${media.tablet`
                            display: none;
                        `}
                    }
                }
            }
        }
    }
    .hero-responsive-button{
        display: none;
        overflow: hidden;
        ${media.tablet`
            display: block;
            width:100%;
            border-radius: 0;
            position: relative;
            z-index: 1;
            padding-top: 20px;
            padding-bottom: 20px;
            background: ${palette.yellow};
            span{
                color: ${palette.black};
                font-size: 2rem !important;
            }
        `}
    }
     .events {
                width: 100%;
                margin-top: 30px;
                .events-container{
                    width: 500px;
                    margin: 0 auto;
                    ${media.tablet`
                        width: 100%;
                        padding: 0 20px;
                    `}
                    ${media.bigPhone`
                        padding: 0 10px;
                    `}
                    ${media.phone`
                        padding: 0;
                    `}
                    .event-title {
                        color: ${palette.white};
                        position: relative;
                        font-size: 16px;
                            text-align: center;
                        span {
                            &:first-child {
                                font-size: 3.45rem;
                            }
                            &:last-child {
                                font-size: 1.5rem;
                                margin-right: 10px;
                                vertical-align: top;
                                line-height: 1.5;
                                display: inline-block;
                                text-align: right;
                                font-weight: bold;
                            }
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            left: 22px;
                            height: 20px;
                            width: 2px;
                            background: ${palette.white};
                            top: 50%;
                            transform: translateY(-50%);
                            ${media.smallPhone`
                                display: none;
                            `}
                        }
                    }
                    .countdown {
                        color: ${palette.white};
                        .number {
                            font-size: 3rem;
                        }
                        .text {
                            font-size: 1.1rem;
                            line-height: 20px;
                        }
                    }
                }
            }
     .original-price {
        text-align: center;
        padding: 10px;
         &:after {
            text-align: center;
            content: '';
            position: absolute;
            top: 22%;
            left: 0;
            height: 1px;
            width: 100%;
            background: #fa0220;
            width: 104px;
        } 
     }
     .discount-price {
        padding-right: 102px;
     }    
`;
export default Style;
