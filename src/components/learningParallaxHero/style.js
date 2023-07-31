import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    margin-top:100px;
    .ant-col-xl-13 {
        float: right;
    }
    .intro-video {
        background: linear-gradient( #68D9A088,#68D9A0), url(${({ thumbnail }) => thumbnail});
       ${media.phone`
           background: url(${({ thumbnail_mobile }) => thumbnail_mobile}) no-repeat;
           background-size: 100% 100%;
           height: 220px;
            border-radius: 0;
            border-radius: 0;
             top: -40px;
        `}
        background-size: 100% 100%;
        position: relative;
        ${media.bigPhone`
            background-attachment: scroll;
        `}
        border-radius: 10px;
        height: 400px;
        z-index:1;
    }
  
        .hero-title {
            color: ${palette.black};
            font-size: 2.5rem;
            margin-bottom: 0;
            text-align: right;
            padding: 20px 40px;
            ${media.desktop`
                font-size: 4.8rem;
            `};
            ${media.tablet`
                font-size: 2.5rem;
            `};
            ${media.phone`
                font-size: 2.5rem;
                  padding: 0 44px;
                  text-align: center;
            `}
        }
        .hero-description {
            color: ${palette.gray};
            font-size: 1.5rem;
            text-align: center;
            line-height: 1.8;
            padding: 0 40px;
            text-align: right;
            ${media.desktop`
                font-size: 1.7rem;
                width: 650px;
                line-height: 1.9;
            `};
            ${media.tablet`
                width: auto;
            `};
            ${media.phone`
                font-size: 1.6rem;
                 padding:10px 30px;
                 margin-bottom: 20px;
                 text-align: center;
            `}
        }
        .children {
            width: 100%;
            margin-top: 35px;
        }
    
    .play-sign {
        margin-top:165px;
        text-align: center;
        ${media.phone`
            margin-top:80px;
        `}
    }
     .description {
        color: ${palette.white};
        font-size: 1.8rem;
        font-weight: bold;
        ${media.tablet`
           margin-bottom: 0;
        `}
      
      }
      .play-sign {
            position: absolute;
            right: 45%;
            width: 70px;
            height: 70px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border-radius: 47px;
            transition: width, height, transform 1s;
            z-index: 999;
            box-shadow: 1px 1px 0px 10px #ffffff59;
            &:hover {
                width: 200px;
                border-radius: 20px;
                transform: matrix(1, 0, 0, 1, 0, 0);
                right: 35%;
                img {
                    right: 20px;
                    position: absolute;
                    transform: none;
                    width: 20px;
                }
                .hide {
                    display: block;
                    color: gray;
                    text-align: center;
                    font-size: 14px;
                    position: relative;
                    font-weight: bold;
                    top: 20px;
                    left: 100px;
                    width: 400px;
                }
            }
            img {
                top: 37%;
                right: 33%;
                position: absolute;
                width: 20px;
            }
            .hide {
              display: none;
             
          }
            ${media.phone`
                right: 21%;
                width: 220px;
                height: 50px;
                z-index: 0;
                border-radius: 7px
                p {
                    margin-top: 10px;
                    color: gray;
                    left: 20%;
                    position: relative;
                    width: 100%;
                      ${media.phone`
                        left: -7px;
                      `}
                }
                img{
                    top: 30%;
                    right: 12%;
                }
                &:hover {
                   border-radius: 10px;
                   right: 21%;
                    width: 220px;
                    img{
                    right: 12%!important;
                    }
                }
            `}
      }
     
    
   
      
`;
export default Style;
