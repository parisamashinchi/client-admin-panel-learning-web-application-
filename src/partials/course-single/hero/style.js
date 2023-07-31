import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
      background: transparent linear-gradient(73deg, #68D9A0 0%, #358484 100%) 0% 0% no-repeat padding-box;
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
      //     background:  url(${({ background }) => background})  no-repeat;
      //     // transform: skew(-20deg);
      //     // transform-origin:top;
      //     // clip-path: polygon(0 0, 100% 0%, calc(100% - 200px) 100%, 0% 100%);
      //     transform: skew(-18deg) rotate(0deg) translateY(0%) translateX(-100px);
      //     border-radius: 0 0 50px 0;
      //     background-size: 100% 100%;
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
    
    // ${media.bigPhone`
    //     background: ${({ mobileThumbnail }) => `url(${mobileThumbnail})`} no-repeat;
    //     background-size: contain;
    //     background-position-y: 50px;
    // `}
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
     .ant-col-1 ,.ant-col-2, .ant-col-10, .ant-col-8 , .ant-col-9 , .ant-col-12 , .ant-col-13 ,.ant-col-16, .ant-col-20 , .ant-col-24,.ant-col-xxl-1, .ant-col-xxl-2, .ant-col-xxl-3, .ant-col-xxl-4, .ant-col-xxl-5, .ant-col-xxl-6, .ant-col-xxl-7, .ant-col-xxl-8, .ant-col-xxl-9, .ant-col-xxl-10, .ant-col-xxl-11, .ant-col-xxl-12, .ant-col-xxl-13, .ant-col-xxl-14, .ant-col-xxl-15, .ant-col-xxl-16, .ant-col-xxl-17, .ant-col-xxl-18, .ant-col-xxl-19, .ant-col-xxl-20, .ant-col-xxl-21, .ant-col-xxl-22, .ant-col-xxl-23, .ant-col-xxl-24{
        float: right;
        color: white;
        h1 {
            color: white;
            width: 450px;
            margin-top: 50px;
            font-size: 34px;
            ${media.tablet`
              width: 100%;
              font-size: 25px;
              margin-top: 150px;
              padding-left: 25px;
           `}
        }
        p {
          width: 400px;
          font-size: 15px;
          line-height: 23px;
           ${media.tablet`
              width: 100%;
              padding-left: 10px;
              font-size: 14px;
           `}
        }
        
        .price, .deadline {
            color: white;
            font-size: 17px;
            margin-top: 0;
            margin-bottom: 0.5em;
             ${media.tablet`
              font-size: 14px;
           `}
        }
        .toman {
            font-size: 12px
        }
        .countdown {
            margin-bottom: 45px;
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
            .deadline {
                padding-right: 22px;
                padding-left: 10px;x
                width: auto
            }
        }
        .divider {
            width: 3px;
            height: 1.9em;
            background-color: #f2a347;
            margin-bottom: 40px;
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
            img {
                opacity: 0;
                right: -20px; 
                color: white;
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
                    right: 40px;x
                     position: relative;
                }
                .title {
                  transition: .3s ease;
                  right: 50px;
                  opacity: 0
                }
             }
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
                 right: 0!important;
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
                         ${media.tablet`
                            left: -12px;
                         `}
               }
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
                top: 180px;
                right: 20%;
                width: 220px;
                height: 50px;
                z-index: 0;
                p {
                    margin-top: 14px;
                    color: gray;
                    left: 20%;
                    position: relative;
                    width: 100%;
                      ${media.phone`
                        left: -15px;
                      `}
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
          .play-sign &:before {
                width: 118px;
                height: 118px;
                background: #FFFFFF 0% 0% no-repeat padding-box;
                border-radius: 59px;
                opacity: 0.3;
            }
    }
   
    .ant-anchor-wrapper{
        background: none;
        margin: 0;
        overflow: unset;
        padding-left: 0;
        .ant-anchor-ink{
            display: none;
        }
        .ant-anchor-link{
            padding: initial;
            .ant-anchor-link-title{
                overflow: visible;
            }
        }
        .ant-anchor{
            padding-left: 0;
        }
    }
    
  
    .hero {
        .hero-wrapper {
            display: flex;
            position: relative;
            z-index: 1;
            flex-direction: column;
            align-items: center;
            width: 1050px;
            margin: 0 auto;
            text-align: center;
            padding: 50px 0;
            .title {
                color: ${palette.white};
                font-size: 3rem;
            }
            .description {
                color: ${palette.white};
                font-size: 1.8rem;
                font-weight: bold;
                ${media.tablet`
                    margin-bottom: 0;
                `}
            }
            .buttons {
                display: flex;
                button {
                    border-radius: 11px;
                    padding: 0;
                    span{
                        font-size: 1.7rem !important;
                    }
                    &.course-title-button {
                        background: transparent;
                        border: 2px solid ${palette.white};
                        span{
                           color: ${palette.white};
                        }
                        &:hover {
                            background: ${palette.white};
                            span{
                                color: ${palette.black};
                            }
                        }
                    }
                    &.course-register-button {
                        background: ${palette.yellow};
                        &:hover {
                            background: ${palette.black};
                            span {
                                color: ${palette.yellow};
                            }
                        }
                        span{
                            color: ${palette.black};
                        }
                    }
                }
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
             
        }
    }
    .mobile-buttons{
        display: none;
        
    }

    ${media.xDesktop`
        .hero{
            .hero-wrapper{
                width: 900px;
                .play-sign {
                    button {
                        svg {
                            width: 60px;
                            height: 60px;
                        }
                    }
                }
            }
        }
    `}
    ${media.desktop`
        .hero{
            .hero-wrapper{
                width: 700px;
                .buttons{
                    button{
                        width: 260px;
                    }
                }
            }
        }
    `}
    ${media.antDesktop`
        .hero{
            .hero-wrapper{
                padding-top: 140px;
            }
        }
    `}
    ${media.tablet`
        .mobile-buttons{
            display: block;
            order: 2;
            position: relative;
            z-index: 2;
            &.fixed {
              position: fixed;
              top: 50px;
              left: 0;
            }
            .button{
                padding: 0;
                width: 100%;
                height: 60px;
                border-radius: 0;
                span{
                    font-size: 1.9rem !important;
                }
                &.course-register-button{
                    background: ${palette.yellow};
                    span{
                        color: ${palette.darkGreyTertiary};
                    }
                }
                &.course-title-button{
                    background: ${palette.lightGreyFifteenth};
                    border-color: ${palette.lightGreyFifteenth};
                    span{
                        color: ${palette.lightGreyFourteenth}
                    }
                }
            }
        }
        .hero{
            .hero-wrapper{
                width: auto;
                padding-right: 25px;
                padding-left: 25px;
                .buttons{
                    display: none;
                    button{
                        width: 200px;
                    }
                }
                .events{
                    order: 1;
                    .event-title{
                        &:after{
                            left: 10%;
                        }
                    }
                }
            }
        }
    `}
    ${media.bigPhone`
        .hero{
            .hero-wrapper{
                padding-right: 0;
                padding-left: 0;
                .events{
                    .event-title{
                        &:after{
                            height: 20px;
                        }
                    }
                }
                .play-sign{
                    button{
                        svg{
                            width:60px;
                            height: 60px;
                        }
                    }
                }
                .buttons{
                    button{
                        width: 180px;
                    }
                }
            }
        }
    `}
    ${media.phone`
        .hero{
            .hero-wrapper{
                padding-top: 100px;
                padding-bottom: 40px;
                .events{
                    .event-title{
                        &:after{
                            height: 17px;
                        }
                    }
                }
                .events{
                    .event-title{
                        display: flex;
                        justify-content: center;
                        &:after{
                            left: 8%;
                        }
                    }
                }
            }
        }
    `}
    .countdown-item {
        padding-right: 0!important;
          padding-left: 0!important
    }
    .hide {
      display: none;
    }
    
     .property {
        padding:10px;
        float:right;
        position:relative;
        bottom:0 ; 
        p {
            font-size: 1rem;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 15px;
            width: 100%;
            margin-right: 10px;
            padding-left:0;
            ${media.tablet`
               font-size: .9rem;
            `}
        }
     }
    .ant-divider {
      background: #e8e8e85e;
    }
     .description {
        text-align: justify;
     }
`;

export default Style;
