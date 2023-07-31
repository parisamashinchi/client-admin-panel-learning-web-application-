import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    width: 100%;
    // height: ${({ medium }) => (medium ? `540px` : `786px`)};
    background: linear-gradient( ${({path })=>  path ?'#848e89b5,#4c4e4ed9': '180deg, rgba(255,255,255,1) 0%, rgba(75,214,176,0.500437675070028) 100%'}), 
     url(${({ image , path  }) => path ? image :''});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid #ffe51e;
    ${({path })=>  path ? '': 'margin-top: 72px;'};
    ${media.bigPhone`
        background-attachment: scroll;
        url(${({ mobileThumbnail }) => mobileThumbnail});
        border: none;
    `}
      ${media.tablet`
         ${({path })=>  path ? '': 'margin-top: 32px;'};
      `}
     ${media.phone`
          height: ${({ medium }) => (medium ? `540px` : `786px`)};
          background: ${({path })=>  path ? 'linear-gradient(#848e89b5,#4c4e4ed9)' : 'rgba(210,249,239,.85)'};
        url(${({ mobileThumbnail }) => mobileThumbnail});
     `}
     .promotion-wrapper , .responsive-padding-wrapper {
        height: 100%;
     }
    .content {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
          ${({path })=>  !path && 'position: relative;'};
          ${({path })=>  !path && 'top: -320px;'};
         ${media.phone`
           ${({path })=>  !path && 'top: -235px!important;'};
           position:relative;
        `}
        ${media.bigPhone`
           ${({path })=>  !path && 'top: 0;'};
        `}
        ${media.tablet`
           ${({path })=>  !path && 'top: -170px;'};
        `}
        .title {
            text-align: center;
            color: black ;
            font-weight: bold;
            font-size: 36px;
            margin: 0px;
            margin-bottom: 6px;
            margin-top: 20px;
            ${media.desktop`
                font-size: 6.5rem;
            `}
            ${media.tablet`
                font-size: 5.8rem;
            `}
            ${media.bigPhone`
                font-size: 5rem;
            `}
            ${media.phone`
                font-size: 26px;
            `}
        }
        .description {
            color: black;
            font-weight: normal;
            font-size: 20px;
            margin-bottom: 60px;
            text-align: center;
            max-width: 1010px;
              opacity: 0.8;
            ${media.desktop`
                font-size: 2.9rem;
            `}
            ${media.bigPhone`
                font-size: 2.4rem;
            `}
            ${media.phone`
                font-size: 15px;
            `}
        }
    }
    .btn-more {
        padding: 17px 55px;
        background-color: #ffe51e ;
        border-radius: 10px;
        color: #000;
        font-size: 1.7rem;
        font-weight: bold;
        transition: background-color 0.3s;
        width: 160px;
         ${({path })=>  !path && 'top: -50px;'};
         ${({path })=>  !path && 'position: relative'};
         ${media.phone`
           ${({path })=>  !path && 'bottom:0!important'};
           position: relative;
            ${({path })=>  !path && 'height:70px'};
             ${({path })=>  !path && 'position: absolute;'};
            ${({path })=>  !path && ' background-color: #ffe51e;'};
        `}
         ${media.tablet`
          ${({path })=>  !path ?' top: -66px;' : 'top: -9px'};
            
         `}
        &:hover {
           opacity: 0.8
        }
           
    }
    ${media.xxxDesktop`
      ${({path })=>  path ? '   height: 500px; ': '   height: 368px; width: 1130px; margin: 50px auto;    border-radius: 15px; '};
       .btn-more {
        ${({path })=>  path ? '   padding: 10px 35px;': '    padding: 10px ; '};
        text-align: center;
       }
    `};
    ${media.xDesktop`
        ${({path })=>  path ? '   height: 400px; ': '   height: 491px; '};
        .btn-more {padding: 12px 40px;}
    `};
    ${media.desktop`
        height: 405px;
        .promotion-wrapper {
             ${({path })=>  path ? '': 'margin-top:auto; height: 100%;'};
        }
        .btn-more {padding: 0px 35px;}
        .content{
            .title{
                text-align: center; 
            }
            .description{
                 ${({path })=>  path ? 'margin-bottom: 30px': 'margin-bottom: 0 ; padding: 0 15px;'};
            
            }
        }
        .btn-more{
            width: 100%;
            border-radius: 0;
            display: flex;
            justify-content: center;
            margin-top: auto;
        }
    `};
     ${media.desktop`
        height: 350px;
        .btn-more {padding: 20px 35px;}
    `}
     ${media.tablet`
        height: 250px;
         width:100%;
         margin: 50px 0 70px;
           border-radius: 0px;
    `}
    input{
        width: 400px!important;
         ${media.phone`
               width: 340px!important;
               border-radius: 10px;
           `}
        background-color: white!important;
        color: gray!important;
        text-align: center;
        height: 60px!important;
    }
    .ant-form {
        ${media.bigPhone`
         width: 100%;
         .ant-form-item {
            margin : 0 auto
         }
         .btn-more {
            bottom: -75px;
            position: relative;
            height: 50px;
            padding: 18px;
            top: inherit;
            span {
                font-size: 1.8rem!important;
            }
         }
      `}
      ${media.smallPhone`
      .btn-more {
        bottom: -75px;
        }
      `}
      }
    .ant-form-item-control{
        text-align: center;
    }
   video {
      object-fit: cover;
      width: 100vw;
      height: 368px;
      position: relative;
      top: 20px;
      left: 0;
      z-index: -1;
       border-radius: 15px;
       ${media.tablet`
           height: 390px;
       `}
       ${media.phone`
          height: 250px;
          top: 0px;
          border-radius: 0px;
       `}
      
    }
    .responsive-padding-wrapper {
     ${media.phone`padding:0; height:100%`};
    }
    .icon {
        width: 110px;
         ${media.phone` width: 90px`};
    }
`;
export default Style;
