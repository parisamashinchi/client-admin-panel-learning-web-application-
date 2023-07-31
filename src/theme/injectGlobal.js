import { createGlobalStyle } from 'styled-components';
import { lighten } from 'utils/colorUtils';
import media from './MediaQuery';

export const themeVar = {
    border: '15px',
    buttonBorderRadius: '7px',
    borderCircle: '50%',
    borderNone: 0,
};
export const palette = {
    white: '#ffffff',
    whiteLowOpacity: 'rgba(255, 255, 255, 0.95)',
    whiteSecond: '#FFFFFFA7 ',
    whiteThird: '#FFFFFF50',
    black: '#000000',
    blackSecond: '#4D4D4D',
    lightBlack: '#1f1f1f',
    orange: '#EBBA16',
    grey: '#686868',
    darkGrey: '#535353',
    darkGreySecondary: '#606060',
    darkGreyTertiary: '#484848',
    whiteGrey: '#F8F8F8',
    darkLightGrey: '#F5F7F8',
    lightGrey: '#e8e8e8',
    lightGreyLowOpacity: 'rgba(232,232,232, 0.33)',
    lightGreySecondary: '#C9C9C9',
    lightGreyTertiary: '#797979',
    lightGreyQuaternary: '#E5E5E5',
    lightGreyQuinary: '#E0E0E0',
    lightGreySenary: '#A2A2A2',
    lightGreySeptenary: '#BABABA',
    lightGreyOctonary: '#F7F7F7',
    lightGreyNinth: '#A0A0A0',
    lightGreyTenth: '#5c5c5c',
    lightGreyEleventh: '#707070',
    lightGreyEleventhLowOpacity: '#70707059',
    lightGreyEleventhLowOpacitySecond: 'rgba(112,112,112,0.54)',
    lightGreyEleventhLowOpacityThird: 'rgba(112,112,112,0.19)',
    lightGreyEleventhLowOpacityFourth: 'rgba(112,112,112,0.35)',
    lightGreyTwelveth: '#696969',
    lightGreyThirteenth: '#c3c3c3',
    lightGreyFourteenth: '#656565',
    lightGreyFifteenth: '#EAEAEA',
    lightGreySixteenth: '#bcbcbc',
    lightGreySeventeenth: '#525252',
    lightGreyEighteenth: '#d3d3d3',
    lightGreyNineteenth: '#cccccc',
    lightGreyTwentieth: '#7070701C',
    lightGreyTwentyFirst: '#5D5D5D',
    lightGreyTwentySecond: '#909090',
    lightGreyTwentyThird: '#B7B7B7',
    lightGreyTwentyThirdLowOpacity: '#B7B7B729',
    lightGreyTwentyFourth: '#DBDBDB',
    lightGreyTwentyFifth: '#5f5f5f',
    lightGreyTwentySixth: '#383838',
    lightGreyTwentySeventh: '#F0F0F0 ',
    lightGreyTwentyEighth: '#ACACAC',
    lightGreyTwentyNinth: '#343434',
    lightGreyThirtieth: '#DDDDDD',
    lightGreyThirtyFirst: '#F5F5F5',
    lightGreyThirtySecond: '#E5E5E5',
    lightGreyThirtySecondLowOpacity: '#E5E5E5EC',
    lightGreyThirtyThird: '#CBCBCB',
    lightGreyThirtyFourth: '#989898',
    lightGreyThirtyFifth: '#969696',
    lightGreyThirtySixth: '#0D0D0D',
    lightGreyThirtySeven: '#767676',
    lightGreyThirtyEighth: '#B2B2B2',
    lightGreyThirtyNinth: '#888888',
    lightGreyFourtieth: '#EDEDED',
    lightGreyFourtyFirst: '#939393',
    lightGreyFourtySecond: '#80808000',
    lightGreyFourtyThird: '#6E6E6E',
    lightGreyFourtyFourth: '#F2F2F2',
    lightGreyFourtyFifth: '#7C7C7C',
    lightGreyFourtySixth: '#868686',
    lightGreyFourtySeventh: '#9D9D9D',
    lightGreyFourtyEighth: '#7C7B7B',
    lightGreyFourtyNinth: '#B9B9B9',
    lightGreyFiftieth: '#626262',
    lightGreyFiftyFirst: '#AAAAAA',
    lightGreyFiftySecond: '#9A9A9A',
    lightGreyFiftyThird: '#777777',
    lightGreyFiftyFourth: '#B5B5B5',
    lightGreyFiftyFifth: '#F2F2F2A7',
    lightGreyFiftySixth: 'rgb(40,40,40)',
    lightGreyFiftySeventh: '#757575',
    lightGreen: '#68d9a0',
    lightGreenSecond: '#D3FFE2',
    lightGreenThird: '#74DBA8',
    darkGreen: '#59B283',
    darkGreenSecond: '#4EA0A0',
    darkGreenThird: '#59B283',
    blueGreen: '#4ea0a0',
    bluishGreen: '#5BC5C9',
    skyBlue: '#5BC5C9',
    darkBlue: '#B8DEDE ',
    grassGreen: '#59b283',
    yellow: '#FFD800',
    darkYellow: '#EBBA16',
    red: '#ff5252',
    boxShadowColor: '#00000029',
};

const GlobalStyle = createGlobalStyle`
@media (max-width: 900px) {
    html.noscroll {
        overflow: hidden;
    }

    body.noscroll {
        overflow: hidden;
    }
}

@font-face {
  font-family: IRANSans;
  src: url('/static/fonts/iransans/eot/IRANSansWeb.eot');
  src: url('/static/fonts/iransans/eot/IRANSansWeb.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/iransans/woff2/IRANSansWeb.woff2') format('woff2'),
       url('/static/fonts/iransans/woff/IRANSansWeb.woff') format('woff'),
       url('/static/fonts/iransans/ttf/IRANSansWeb.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: IRANSans;
  src: url('/static/fonts/iransans/eot/IRANSansWeb_Bold.eot');
  src: url('/static/fonts/iransans/eot/IRANSansWeb_Bold.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/iransans/woff2/IRANSansWeb_Bold.woff2') format('woff2'),
       url('/static/fonts/iransans/woff/IRANSansWeb_Bold.woff') format('woff'),
       url('/static/fonts/iransans/ttf/IRANSansWeb_Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: IRANYekan;
  src: url('/static/fonts/yekan/eot/iranyekanwebregular.eot');
  src: url('/static/fonts/yekan/eot/iranyekanwebregular.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/yekan/woff2/iranyekanwebregular.woff2') format('woff2'),
       url('/static/fonts/yekan/woff/iranyekanwebregular.woff') format('woff'),
       url('/static/fonts/yekan/ttf/iranyekanwebregular.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: IRANYekan;
  src: url('/static/fonts/yekan/eot/iranyekanwebbold.eot');
  src: url('/static/fonts/yekan/eot/iranyekanwebbold.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/yekan/woff2/iranyekanwebbold.woff2') format('woff2'),
       url('/static/fonts/yekan/woff/iranyekanwebbold.woff') format('woff'),
       url('/static/fonts/yekan/ttf/iranyekanwebbold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: IRANYekan;
  src: url('/static/fonts/yekan/eot/iranyekanweblight.eot');
  src: url('/static/fonts/yekan/eot/iranyekanweblight.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/yekan/woff2/iranyekanweblight.woff2') format('woff2'),
       url('/static/fonts/yekan/woff/iranyekanweblight.woff') format('woff'),
       url('/static/fonts/yekan/ttf/iranyekanweblight.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: FontAwesome;
  src: url('/static/fonts/font-awesome/eot/fa-regular-400.eot');
  src: url('/static/fonts/font-awesome/eot/fa-regular-400.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/font-awesome/woff2/fa-regular-400.woff2') format('woff2'),
       url('/static/fonts/font-awesome/woff/fa-regular-400.woff') format('woff'),
       url('/static/fonts/font-awesome/ttf/fa-regular-400.ttf') format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: FontAwesomeSolid;
  src: url('/static/fonts/font-awesome/eot/fa-solid-900.eot');
  src: url('/static/fonts/font-awesome/eot/fa-solid-900.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/font-awesome/woff2/fa-solid-900.woff2') format('woff2'),
       url('/static/fonts/font-awesome/woff/fa-solid-900.woff') format('woff'),
       url('/static/fonts/font-awesome/ttf/fa-solid-900.ttf') format('truetype');
  font-weight: 900;
}
@font-face {
  font-family: Samim;
  src: url('/static/fonts/samim/Samim.eot');
  src: url('/static/fonts/samim/Samim.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/samim/Samim.woff2') format('woff2'),
       url('/static/fonts/samim/Samim.woff') format('woff'),
       url('/static/fonts/samim/Samim.ttf') format('truetype');
  font-weight: normal;
 }


/* ==============================
   1. Common styles
   ============================== */
/*
 * 1.1 Common styles
 */
::selection {
  color: ${palette.white};
  background: ${palette.grey};
}

body {
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  direction: rtl;
}

iframe {
  border: none;
}



img:not([draggable]), embed, object, video {
  max-width: 100%;
  height: auto;
}

img{
  max-width: 100%;
  height: auto;
}

p {
  margin-bottom: 30px;
}

ul{
  list-style: none;
}

button{
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
}

/* ==============================
   3. Typography
   ============================== */
/*
 * 3.1 Typography common styles
 */

 html {
  font-size: 10px;
  line-height: 14px;
  ${media.xxDesktop`font-size: 10px;`};
  ${media.xDesktop`font-size: 9px;`};
 }

body {
  font-family: IRANYekan;
  line-height: 30px;
  color: ${palette.grey};
  min-width: 320px;
  
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.4;
  font-family: IRANYekan;
  font-weight: bold;
  color: ${palette.grey};
}

a {
  color: ${palette.grey};
  &:hover,
  &:focus{
    color: ${lighten(palette.grey, 10)};
    text-decoration: none;
  }
}

/* ==============================
   4. Forms fields
   ============================== */
input[type=email],
input[type=password],
input[type=phone],
input[type=tel],
input[type=text],
textarea {
  color: ${lighten(palette.grey, 30)};
  padding: 6px 12px;
  height: 40px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  appearance: none;
  transition: none;
  width: 100%;
  outline: 0;
  &:focus {
   box-shadow: none;
  }
}
textarea {
  height: auto;
}
input[type=email].input-bg,
input[type=password].input-bg,
input[type=phone].input-bg,
input[type=tel].input-bg,
input[type=text].input-bg,
textarea.input-bg {
  background: ${palette.lightGreyPrimary};
  border: 1px solid ${palette.lightGreyTertiary};
  font-size: 1.2rem;
}

select {
  border-radius: 0;
  width: 100%;
  height: 40px;
  line-height: 1.42857;
  padding: 6px 12px;
  border: 1px solid ${palette.lightGreyTertiary};
  background: ${palette.lightGreyPrimary};
  cursor: pointer;
  color: ${palette.greyPrimary};
  &:focus {
    outline: 0;
  }
}

.form-control {
  border-radius: 0;
  box-shadow: none;
  }
  .form-control :focus {
    box-shadow: none;
  }
.select-icon {
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    display: block;
    pointer-events: none;
    right: 5px;
    z-index: 1;
    font-family: FontAwesomeSolid;
    font-style: normal;
    font-weight: normal;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    font-size: 1.2rem; 
    }
    select {
    border: none;
    font-size: 1.4rem;
    background: none;
    padding: 0 25px 0 0;
    height: auto;
    }
  }

/*
 * 3.2 Blockquote
 */
blockquote {
  background: ${palette.lightGreyPrimary};
  padding: 90px 45px 35px;
  margin-bottom: 30px;
  border: none;
  position: relative;
  font-size: 1.4rem;
  color: ${palette.greyPrimary};

  &:before{
    background: ${palette.black};
    color: ${palette.white};
    content: "“";
    font-size: 3.6rem;
    height: 32px;
    left: 45px;
    line-height: 55px;
    padding-left: 2px;
    position: absolute;
    top: 35px;
    width: 28px;
    text-align: left;
  }

  .blockquote-reverse {
    padding: 90px 45px 35px;
    &:before {
      left: auto;
      right: 45px;
      content: "”";
    }
  }

  p {
    margin-bottom: 15px;
  }

  *:last-child {
    margin-bottom: 0;
  }
}    

 body.mobile-nav-opened {
    height: 100%;
    overflow: hidden !important;
    position: fixed;
    width: 100%;
 }

 /* ==============================
   1. Common Anims
   ============================== */
/*
 * 1.1 Common anims
 */

 .anim-fade-in {
   animation-name: fadeIn;
   animation-duration: 0.5s;
 }

 @keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

 /* ==============================
   1. Other Style
   ============================== */
   .loading-spinner {
        color: transparent;
        cursor: wait;

        &:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 30px;
            height: 30px;
            margin-top: -15px;
            margin-left: -15px;
            border-radius: 50%;
            border: 2px solid transparent;
            border-top-color: ${palette.darkGreenSecond};
            animation: spinner .6s linear infinite;
        }
    }

    .icon-container {
      line-height: 1;
    }
    
    .global-loading {
   position: relative;
    pointer-events: none;
    cursor: wait;
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1100;
    animation-name: fadeIn;
    animation-duration: 0.3s;
    pointer-events: none;
    }
      &::after {
      content: '';
      box-sizing: border-box;
      position: fixed;
      top: 50%;
      left: 50%;
      width: 30px;
      height: 30px;
       z-index: 1110;
      margin-top: -15px;
      margin-left: -15px;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: ${palette.darkGreenSecond};
      animation: spinner .6s linear infinite;
  }
}

 /* ==============================
   1. Antd Dropdown Style
   ============================== */

  .ant-select-dropdown {
    border-radius: 0px;
  }
  .ant-select-dropdown-menu {
    margin: 0px;
    padding: 0px;
  }
  .ant-select-dropdown-menu-item {
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    &:first-child {
        border-radius: 0px;
    }
    &:last-child {
      border-radius: 0px;
    }
  }
.ant-select-dropdown-menu-item-active {
  background: rgba(0, 0, 0, 0.1);
}
.ant-select-dropdown-menu-item-selected {
  background: rgba(0, 0, 0, 0.1);
}

 /* ==============================
   1. Antd Messsage Style
   ============================== */

  
 .anticon {
   position: relative;
   top: 1px;
   margin-right: 0px;
   margin-left: 8px;
   font-size: 1.6rem;
 }


 /* ==============================
   1. NProgress Style
   ============================== */
#nprogress {
  .bar {
    background: ${palette.lightGreen};
  }
  .peg {
    box-shadow: 0 0 10px ${palette.lightGreen}, 0 0 5px ${palette.lightGreen};
  }
  .spinner {
    top: 20px;
    left: 30px;
    right: auto;
  }
  .spinner-icon {

  border-top-color: ${palette.lightGreen};
  border-left-color: ${palette.lightGreen};
}
}

/* ==============================
   1. Antd Grid Gutter PreStyle
   ============================== */
   
    //xs
   .gutter-pre-style-xs-34{
        @media (max-width: 576px) {
              margin-left: -17px;
              margin-right: -17px;
                & > div {
                  padding-left: 17px;
                  padding-right: 17px;
                }
        }
   }
   .gutter-pre-style-xs-32{
        @media (max-width: 576px) {
              margin-left: -16px;
              margin-right: -16px;
                & > div {
                  padding-left: 16px;
                  padding-right: 16px;
                }
        }
   }
   .gutter-pre-style-xs-24{
        @media (max-width: 576px) {
              margin-left: -12px;
              margin-right: -12px;
                & > div {
                  padding-left: 12px;
                  padding-right: 12px;
                }
        }
   }
   .gutter-pre-style-xs-20{
        @media (max-width: 576px) {
              margin-left: -10px;
              margin-right: -10px;
                & > div {
                  padding-left: 10px;
                  padding-right: 10px;
                }
        }
   }
   .gutter-pre-style-xs-14{
        @media (max-width: 576px) {
              margin-left: -7px;
              margin-right: -7px;
                & > div {
                  padding-left: 7px;
                  padding-right: 7px;
                }
        }
   }
   .gutter-pre-style-xs-10{
        @media (max-width: 576px) {
              margin-left: -5px;
              margin-right: -5px;
                & > div {
                  padding-left: 5px;
                  padding-right: 5px;
                }
        }
   }
   
     
   //sm
   .gutter-pre-style-sm-30{
        @media (min-width: 576px) {
              margin-left: -15px;
              margin-right: -15px;
                & > div {
                  padding-left: 15px;
                  padding-right: 15px;
                }
           }
   }
   .gutter-pre-style-sm-20{
        @media (min-width: 576px) {
              margin-left: -10px;
              margin-right: -10px;
                & > div {
                  padding-left: 10px;
                  padding-right: 10px;
                }
           }
   }
   
   //md
   .gutter-pre-style-md-50 {
       @media (min-width: 768px) {
          margin-left: -25px;
          margin-right: -25px;
            & > div {
              padding-left: 25px;
              padding-right: 25px;
            }
       }
   }
   .gutter-pre-style-md-30 {
       @media (min-width: 768px) {
          margin-left: -15px;
          margin-right: -15px;
            & > div {
              padding-left: 15px;
              padding-right: 15px;
            }
       }
   } 
    .gutter-pre-style-md-8 {
       @media (min-width: 768px) {
          margin-left: -4px;
          margin-right: -4px;
            & > div {
              padding-left: 4px;
              padding-right: 4px;
            }
       }
   }
   
      //lg
   .gutter-pre-style-lg-90 {
      @media (min-width: 992px) {
      margin-left: -45px;
      margin-right: -45px;
        & > div {
          padding-left: 45px;
          padding-right: 45px;
        }
      }
   }
   .gutter-pre-style-lg-80 {
      @media (min-width: 992px) {
      margin-left: -40px;
      margin-right: -40px;
        & > div {
          padding-left: 40px;
          padding-right: 40px;
        }
      }
   }
   .gutter-pre-style-lg-50 {
      @media (min-width: 992px) {
      margin-left: -25px;
      margin-right: -25px;
        & > div {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
   }
   .gutter-pre-style-lg-30{
       @media (min-width: 992px) {
          margin-left: -15px;
          margin-right: -15px;
            & > div {
              padding-left: 15px;
              padding-right: 15px;
            }
          }
   }
   
   //xl
   .gutter-pre-style-xl-50{
      @media (min-width: 1200px) {
          margin-left: -25px;
          margin-right: -25px;
            & > div {
              padding-left: 25px;
              padding-right: 25px;
            }
      }
   }
   .gutter-pre-style-xl-12{
        @media (min-width: 1200px) {
              margin-left: -6px;
              margin-right: -6px;
                & > div {
                  padding-left: 6px;
                  padding-right: 6px;
                }
          }
   }
   .gutter-pre-style-xl-16{
        @media (min-width: 1200px) {
              margin-left: -8px;
              margin-right: -8px;
                & > div {
                  padding-left: 8px;
                  padding-right: 8px;
                }
          }
   }
 
   //xxl
   .gutter-pre-style-xxl-50{
       @media (min-width: 1600px) {
          margin-left: -25px;
          margin-right: -25px;
            & > div {
              padding-left: 25px;
              padding-right: 25px;
            }
          }
   }
   .gutter-pre-style-xxl-32{
       @media (min-width: 1600px) {
              margin-left: -16px;
              margin-right: -16px;
                & > div {
                  padding-left: 16px;
                  padding-right: 16px;
                }
              }
   }
   
 .share {
     width: 400px!important;
    .ant-modal-body {
        padding: 40px;
        span {
            font-weight: bold;
        }
     }
     img {
        width: 30px;
        margin: 0px 5px;
        float: left;
        cursor: pointer
     }
      .ant-btn-primary {
        width: 100%;
        background: #69d9a1;
        padding: 15px
      }
      .ant-modal-footer {
        padding: 0
      }
      .ant-input-group {
        margin: 34px 0 0;
      }
      .ant-col-19 , .ant-col-5 {
        padding-right: 0!important;
        padding-left: 0!important;
        button {
            padding: 11px;
            height: 40px;
            border-radius: 0 5px 5px 0;
            color: #333232;
            background: lightgray;
        }
      }
      .ant-modal-close-x  {
        display: none;
      }
      .ant-form-item {
         margin-bottom: 0 
      }
    }  

    html {
        scroll-behavior: smooth;
    } 
    .exam-modal {
        .ant-modal-footer {
            text-align: center 
        }
        .ant-modal-body {
            text-align: center
        }
        .yes-btn {
            background: #59B283;
            border-radius: 7px;
            color: white;
            width: 40%;
            margin: 0 20px;
        }
        .no-btn {
            color: #FFBAA5;
            border: 1px solid #FFBAA5;
            border-radius: 7px;
            background: white;
            width: 40%
        }
    }
    .card-modal{
         width: 600px!important;
         height: 500px!important;
         ${media.phone`
             bottom: 0;
             position: absolute;
             max-width: 100%;
              top: 300px
         `}
        .download-btn {
            color: #5BC5C9;
            border-color: #5BC5C9;
            ${media.phone`
                width: 100%;
                height: 50px;
                border-radius: 9px;
            `}
            span {
               color: #5BC5C9;
               font-size: 1.5rem !important;
            }
           img {
               margin-left: 10px;
               right: 0;
            }
            &:hover {
                
                    img {
                       transition : 1s ease;
                       right: 50px;
                       position: relative;
                     }
                    .title{
                       transition : .3s ease;
                       right: 30px;
                        position: relative;
                        opacity: 0
                   }
            }
         }
         .ant-modal-body {
            padding: 40px;
         }
         
         .ant-modal-content {
            border-radius: 15px;
            background-image: linear-gradient(#ffffff08,#f7f7f7),  url(/static/images/modal-back.png);
            background-size: contain;
            ${media.phone`
                background-size: 100% 100%;
                border-radius: 15px;
                background-repeat: no-repeat;
            `}
        }
        .ant-modal-footer {
            padding: 0; 
            height:60px;
        }
        .ant-btn-primary{
            width: 100%;
            background: #77EDA8;
            border-color: #77EDA8;
            color: black;
            height:60px;
            border-radius: 0 0 15px 0;
            ${media.phone`
                border-radius: 0 ;
            `}
        }
        .cancel-btn {  
            width: 100%;
            background: #EDEDED;
            border-color: #EDEDED;
            color: #818181;
            height:60px;
            border-radius: 0 0 0 15px;
        }
        p {
            font: normal normal normal 14px/28px Samim;
        }
       
`;
export default GlobalStyle;
