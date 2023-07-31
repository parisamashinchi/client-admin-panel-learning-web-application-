import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    .image-wrapper {
        height: 100%;
        flex-shrink: 0;
        img {
            height: 100%;
            width: 400px;
        }
    }
     h1 {
       margin-top: 160px;
       text-align: right;
       font: normal normal bold 25px/92px IRANYekan;
        letter-spacing: 0px;
        color: #5D5D5D;
        margin-bottom: 0;
        line-height: 40px;
     }
      h3 , h5{
        text-align: right;
        color: #4bd6b0;
      }
       h4 {
        text-align: right;
       }
    .description {
        font: normal normal normal 21px/30px IRANYekan;
        color: #484848;
        position: relative;
        font-size: 2rem;
        line-height: 3rem;
        z-index: 1;
        padding: 0;
        text-align: right;
        ${media.xDesktop`
            padding: 0 30px;
        `}
        ${media.desktop`
            font-size: 2rem;
        `}
         ${media.tablet`
            padding-left:10px !important;
            margin: 0!important;   
            width: 100%;
            padding-right: 20px!important;
        `}
        ${media.bigPhone`
            line-height: 3.7rem;
        `}
        ${media.phone`
            font-size: 1.85rem;
             margin-top: 0;
              padding-left:20px !important;
        `}
        ${media.smallPhone`
            font-size: 1.7rem;
             margin-top: 0;
        `}
        &::before {
            content: '“';
            position: absolute;
            right: -60px;
            font-size: 18rem;
            color: #eaeaea;
            font: normal normal bold 90px/0px IRANYekan;
            transform: matrix(-1, 0, 0, -1, 0, 0);
            ${media.tablet`
                top: 2px;
                right: -23px;
                font-size: 5rem;
            `}
            ${media.bigPhone`
                top: 20px;
            `}
        }
    }
    ${media.xDesktop`
        .image-wrapper{
            img{
                width:auto;
                height: 650px;
            }
        }
        .description{
            &::before{
                right: -10px;
            }
        }
    `}
    ${media.desktop`
        .image-wrapper{
            img{
                height: 450px;
            }
        }
        .description{
            margin-left: 0;
            margin-right: -40px;
            padding-left: 30px;
            padding-right: 0;
            &::before{
                right:-10px;
            }
        }
    `}
    ${media.tablet`
        align-items: center;
        .image-wrapper{
            img{
                width: 278px;
                height: 417px;
            }
        }
        .description{
            color: ${palette.black};
        }
    `}
    ${media.smallTablet`
        .image-wrapper{
            margin-right: -50px;
            img{
                width: 239px;
                height: 358px;
            }
        }
        .description{
            margin-right: -40px;
        }
    `}
    ${media.phone`
        .image-wrapper{
            text-align: right;
            margin-right: 20px;
            img{
                width: 70px!important;
                height: 70px!important;
                border-radius: 50%;
                border: 1px solid #D6D6D6;
            }
        }
        .description{
           margin-right: 52px;
           text-align: justify;
            &:before{
               font-size: 5rem;
               right: -35px;
               top: 87px!important;
            }
        }
         h4  {
           margin-top: 20px;
           margin-right: 0!important;
          }
         h5 {
            margin-right: 0!important;
            margin-bottom: 17px;
         }
    `}
    ${media.smallPhone`
        .description{
            &::before{
                font-size: 5rem;
                right: -35px;
                top: 55px;
            }
        }
         h4, h5 {
            text-align: right;
            margin-right: 20px;
         }
    `}
    .ant-col-12,  .ant-col-14, .ant-col-10, .ant-col-4 , .ant-col-8 , .ant-col-18, .ant-col-16 ,.ant-col-xs-16, .ant-col-xl-10 ,.ant-col-xl-12{
        float: right;
    }
   
`;
export default Style;
