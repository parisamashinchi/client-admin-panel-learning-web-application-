import styled from 'styled-components';
import media from 'theme/MediaQuery';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    position: relative;
    .fixed-background {
        background-position: right top;
        background-size: 100%;
        position: absolute;
        right: -250px;
        width: 800px;
        height: 1000px;
        z-index: 0;
        top: -100px;
    }
    .two-column-detail {
        margin: 100px 0;
        background: white;
        border-radius: 10px;
        .image {
            display: flex;
            justify-content: flex-start;
            img {
                max-width: 100%;
                height: auto;
                object-fit: cover;
                margin: 60px;
                border-radius: 6px;
                ${media.phone`
                    margin:0;
                `}
            }
             ${media.phone`
                margin-top: 10px;
            `}
        }
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 90px!important;
            h1 {
                color: ${palette.darkGreyTertiary};
                font-size: 3rem;
            }
            p {
                color: ${palette.lightGreySeventeenth};
                margin-top: 10px;
            }
            ${media.antDesktop`
                padding-right: 0;
            `}
        }
    }
    ${media.xxDesktop`
        // .fixed-background{
        //     right: -455px;
        // }
    `}
    ${media.xDesktop`
        .fixed-background{
            right: -650px;
        }
    `}
    ${media.desktop`
        padding-right: 40px;
        padding-left: 40px;
        .fixed-background{
            max-width: 800px;
            height: 800px;
            right: -400px;
        }
        .two-column-detail{
            .image{
                justify-content: center;
            }
        }
    `}
    ${media.antDesktop`
        .fixed-background{
            right: -200px;
            top: -65px;
            background-size: 100%;
            width: 800px;
        }
        .two-column-detail{
            padding-top: 100px;
            padding-bottom: 50px;
            .content{
                text-align: center;
                margin-top: 50px;
            }
        }
    `}
    ${media.tablet`
        .fixed-background{
            right: -250px;
            width: 700px;
            height: 700px;
        }
    `}
    ${media.bigPhone`
        padding-left: 25px;
        padding-right: 25px;
        .fixed-background{
            right: -340px;
        }
    `}
    ${media.phone`
        .fixed-background{
              // background: #F8F8F8;
              right: 0;
              height:755px;
              width: 100%;
        }
        .two-column-detail{
            padding-top: 50px;
            margin: 20px;
            .image{
                display: block;
                text-align: center;
                img {
                    height: 200px;
                    width: 100%;
                    border-radius: 9px;
                }
            }
           .content {
              margin-top: 10px;
              padding: 0 !important;
              h1 {
                margin: 0;
                font-size: 3rem;
              }
           }
           p {
               font-size: 13px;
               line-height: 23px;
               margin: 0px;
               text-align: justify;
            }
        }
       
    `}
`;

export default Style;
