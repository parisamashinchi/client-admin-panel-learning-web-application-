import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
      background: white;
      height: 600px;
      width: 100%;
      padding: 0;
      margin: 0;
       ${media.phone`
         height: 427px
      `}
      .counter {
            background: #FEF6B1;
            padding: 10px;
            float: right;
            width: 100%;
            margin-top: 20px;
        }
        .countdown {
            color: black;
            width: 300px;
            margin:0 auto;
            font-size: 14px;
            height: 47px;
            .countdown-item {
                text-align: center;
            }
            .gutter-pre-style-xs-24 {
                margin-right: 0!important;
            }
            .number {
                font-size: 16px;
                ${media.phone`
                font-size: 20px;
             `}
            }
            .text {
                font-size: 10px;
                line-height: 10px;
            }
            h3 {
                margin-top: 10px!important;
            }
        }
   
     .ant-col-4 , .ant-col-8, .ant-col-8 , ant-col-9 , .ant-col-12 , .ant-col-16 , .ant-col-20 , .ant-col-24{
        float: right;
        color: white;
       
        h1 , p, h3{
            color: black;
        }
        h1 {
            font-size: 20px;
            text-align: center;
            margin-top: 20px;
            padding: 0 30px;
             ${media.phone`
                font-size: 25px;
             `}
        }
        p {
            padding: 0 30px;
            margin: 0;
             ${media.phone`
                text-align: center;
                font-size: 13px;
             `}
        }
        h3 {
            font-size: 17px;
            text-align: center;
            margin-top: 20px;
        }
        
        
        .divider {
            width: 3px;
            height: 1.9em;
            background-color: #f2a347;
            margin: 10px;
             ${media.phone`
                 margin: 0 15px;
                display: inline-block;
             `}
        }
        .course-register-button{
             background-color: #ffe51e;
             margin-left:10px;
             width: 180px;
             border-radius: 11px;
        }
        .course-title-button{
            background-color: transparent;
            border: 1px solid white;
            color: white;
            width: 180px;
            border-radius: 11px;
            margin-bottom: 0px;
        }
    }
    .share-btn{
            background-color: white;
            height: 70px;
            text-align: center;
            padding: 20px;
            span {
                color: #959595;
                border-bottom: 1px solid #959595;
            }
            i {
                font-size:20px;
                color: #959595;
                border-bottom: none
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
            .play-sign {
                margin-top: 35px;
                svg path {
                    fill: #676767;
                }
                button {
                    background: transparent;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    svg {
                        transition: all 0.5s ease;
                        border-radius: 100%;
                        width: 66px;
                        height: 66px;
                        opacity: 0.8;
                    }
                    &:hover {
                        svg {
                            opacity: 1;
                        }
                    }
                }
                 // button:hover {
                 //    transform: scale(1.2);
                 //    transition: transform 1s;
                 // }
                 //
                
                button::after {
                  content: '';
                  border-radius: 100%;
                  border: 6px solid #00FFCB;
                  position: absolute;
                  z-index: -1;
                  left: 50%;
                  margin-top: 23px;
                  transform: translate(-50%, -40%);
                  animation: ring 1.5s infinite;
                     :hover {
                        animation: none;
                     }
                       
                }
                @keyframes ring {
                  0% {
                    width: 50px;
                    height: 50px;
                    opacity: 1;
                  }
                  100% {
                    width: 100px;
                    height: 100px;
                    opacity: 0;
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
                        font-size: 15px!important;
                    }
                }
                &.course-title-button{
                    background: ${palette.lightGreyFifteenth};
                    border-color: ${palette.lightGreyFifteenth};
                    span{
                        color: ${palette.lightGreyFourteenth};
                        font-size: 15px!important;
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
        .title{
            display: inline-block;
            font-size: 18px!important; 
            margin-top: 40px!important;
        }
        .title-eng{
            display: inline-block;
            font-size: 18px!important; 
            font-family:open-sans;
            margin-right: 66px;
            margin-top: 0!important;
            font-weight: normal;
            top: -10px;
            position: relative;
        }
        .title-img {
            margin-right: 42px;
            margin-top: 25px;
        }
        .description {
            color: #707070!important;
         }
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
    .play-sign:hover  {
        img {
             right: 15%;
        }
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
     .property {
        padding:10px;
        span {
            font-size: 1rem;
            font-weight: bold;
        }
     }
  .responsive-padding-wrapper {
    padding: 0;
  }
  .price {
    position: relative;
    top: 0;
  }
  .original-price {
        text-align: center;
        padding: 10px;
         &:after {
            text-align: center;
            content: '';
            position: absolute;
            top: 41%;
            right: 31%;
            height: 1px;
            width: 100%;
            background: #3e3838;
            width: 79px;
        } 
     } 
     .level {
        background-color: #E2F6F2;
        width: 100%;
        padding: 20px;
        .level-title {
           color: #707070;
           margin-right:40px;
        }
        .level-text {
           color: black; 
           font-weight: bold; 
        }
      }
`;

export default Style;
