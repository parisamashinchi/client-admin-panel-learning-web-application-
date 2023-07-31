import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    height: 472px;
    padding: 5px 0;
    .card-wrapper {
        position: relative;
        height: 100%;
        overflow: hidden;
        border-radius: 15px;
       box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        background: white;
         &:hover{
              .card-thumb {
                  img{
                      transform: scale(1.2, 1.2); 
                     ${media.phone`
                        transform: none
                     `}
                   }
                   ${media.phone`
                      transform: none;
                  `}
              }
              .card-detail {
                  background: white;
                  transform: translate(0,-5px);
                  .card-title{
                        color: #1cdcb5;
                  }
              }
              .card-text {
                  ${media.phone`
                      transform: none;
                  `}
              }
          }
         
        .card-thumb {
              overflow: hidden;
              text-align: center;
                height: 250px;
                border-bottom: 5px solid #1cdcb5;
            ${media.phone`height: 65%`};
            img{
              height: 250px;
              object-fit: cover;
               transition: all 300ms ease-in-out;
              ${media.xxxDesktop`width: 100%`};
            }
        }
        .card-thumb-package {
            padding: 0 5px; 
            height: 250px;  
            border-radius: 15px;
            object-fit: cover
        }
        .card-detail {
            overflow: hidden;
            height: 25%;
            width: 100%;
            background: white;
            transition: all .5s;
            padding: 0 30px;
            ${media.phone` height: 25%;`};
            img {
                margin:20px 10px;
            }
            .card-text{
                height: 70px;
                   ${media.phone` height: 90px;`};
            }
            .card-title {
                font-size: 1.5rem;
                font-weight: bold;
                color: ${palette.grey};
                padding: 0!important;
                margin: 17px 0 10px 0;
                ${media.xxDesktop`padding: 18px 15px 0 15px;`};
                ${media.xDesktop`padding-top: 10px;`};
           
            }
            .teacher-name {
                font-size: 1.2rem;
                font-weight: bold;
                margin: 0px;
                padding: 0!important;
                line-height: 1.08rem;
                color: #ababab;
                ${media.xxDesktop`padding: 2px 15px 0 15px;`};
                ${media.xDesktop`padding-top: 5px;`};
                ${media.phone`padding-top: 0px;`};
            }
            .package-card {
                position: relative;
                font-size: 1.2rem;
                font-weight: normal;
                margin-top: 12px;
                padding: 0 10px 0 0;
                ${media.phone` 
                    margin-top: 0;
                `}
             }
           
        }
         .card-duration {
                position: relative;
                font-size: 1.2rem;
                font-weight: normal;
                color: ${palette.grey};
                margin: 0px;
                margin-top: 20px;
                padding: 0 24px 0 24px;
                background: #E8FCF8;
               
                ${media.xxDesktop`
                    padding: 0 10px 0 10px;
                    margin-top: 0;
                    padding-top: 7px;
                    &::before {
                        width: calc(100% - 20px);
                        right: 10px;
                    }
                `};
                ${media.xDesktop`
                    margin-top: 14px;
                    &::before {
                        top: 0px;
                    }
                `};
                 ${media.tablet`
                     margin-top: 5px;
                 `}
                 ${media.phone`
                    padding:10px 15px;
                 `}
                 .madrak {
                    float:left;
                    font-weight:bold
                 }
            }
        .card-preview {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // background-color: rgba(0, 0, 0, 0.68);
            border-radius: 20px;
            cursor: pointer;
            transition: opacity 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            i {
                transition: transform 0.3s ease-in-out;
                transform: translateY(30px);
            }
            h6 {
                transition: all 0.3s ease-in-out;
                margin-top: 15px;
                color: ${palette.white};
                font-size: 2.1rem;
                font-weight: bold;
                transform: translateY(30px);
                opacity: 0;
            }
        }
        &:hover {
            .card-preview {
                opacity: 1;
                i {
                    transform: translateY(0);
                }
                h6 {
                    opacity: 1;
                    transform: translateY(0);
                    transition-delay: 0.2s;
                }
            }
        }
    }
    ${media.xxxDesktop`height: 410px;`};
    ${media.xxDesktop`height: 393px;`};
    ${media.xDesktop`height: 350px;`};
    ${media.phone`height: 360px;`};
     .tag-container {
         position: absolute;
         top: 10px;
         left: 10px;
         z-index: 1;
         ${media.phone`
           max-width: 300px;
          `}
          .tag {
             padding: 0px 20px;
             border-radius: 7px;
             font-size: 1.2rem;
             font-weight: normal;
             background-color: ${palette.lightGreenSecond};
             width: auto;
             margin: 10px;
            }
      }
      .card-wrapper-package {
          box-shadow: none;
          .card-detail {
            box-shadow: 0 1px 2px rgb(0 0 0 / 11%);
            border: 1px solid #80808024;
            height: 120px;
            border-radius: 10px;
             ${media.phone`
                 height: 87px;
            `}
          }  
      }
      .link {
         width: 35px;
         height: 35px;
         background: #59B283;
         border-radius: 50%;
         text-align: center;
         top: -140px;
         left: 20px;
         z-index: 999;
         position: relative;
         img {
            width: 15px;
         }
      } 
      .ant-col-12, .ant-col-8 {
        height: 260px
      }   
      .ant-col-4, .ant-col-20 {
            float:right;
       }
     .card-special-course {
        &:hover {
            .card-text {
                transform: translateY(-10%); 
            }
            .card-thumb {
                background: #68D9A0;
                transform: translateY(-5%); 
                .card-special-course-btn {
                     opacity: 1;
                 }
                 img {
                   transform: none!important; 
                    z-index: -1;
                    opacity: .2;
                 }
             }
        }
      
         .card-special-course-btn {
                top: -140px;
                background: white;
                color: black;
                border: white;
                opacity: 0;
          }
        }
     }
`;
export default Style;
