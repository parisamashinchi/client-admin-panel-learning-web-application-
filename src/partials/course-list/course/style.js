import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    margin-top: 36px;
    .title-img {
        display: none;
    }
    ${media.phone`
       margin-top: 15px;
   `}
     .ant-col-12, .ant-col-8 {
        height: 100%;
      }
      .ant-col-8 , .ant-col-16 , .ant-col-6, .ant-col-2 , .ant-col-22 {
        float :right
      } 
       .card-thumb-package {
        padding: 0 5px;
        height: 250px;
        border-radius: 15px;
    }
    .link {
         width: 35px;
         height: 35px;
         background: #59B283;
         border-radius: 50%;
         text-align: center;
         top: -115px;
         left: 20px;
         z-index: 999;
         position: relative;
         i {
            width: 15px;
            color: white;
            margin: 0 auto;
            top: 10px;
         }
      }
       .course-image-wrapper {
            position: relative;
            border-radius: 0 30px 30px 0;
            overflow: hidden;
            width: auto;
            height:250px;
            .course-image {
                flex-shrink: 0;
                height:100%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
                &:hover{
                    .course-preview {
                        opacity: 1;
                        i{
                            transform: translateY(0);
                        }
                        h6{
                            transform: translateY(0);
                            opacity: 1;
                            transition-delay: 0.2s;
                        }
                    }
                }
                .course-preview {
                    opacity: 0;
                    position: absolute;
                    border-radius: 14px;
                    overflow: hidden;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.68);
                    cursor: pointer;
                    transition: opacity 0.3s;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    i{
                        transform: translateY(30px);
                         transition: all 0.3s ease-in-out;
                    }
                    h6 {
                        opacity: 0;
                        margin-top: 10px;
                        color: ${palette.white};
                        font-size: 2.1rem;
                        font-weight: bold;
                        transition: all 0.3s ease-in-out;
                        transform: translateY(30px);
                        margin-bottom: 0;
                    }
                    ${media.tablet`
                        display: none;
                    `}
                }
            }
        } 
      
    .column-container {
        padding: 20px;
        background: white;
        border-radius: 30px 0  0 30px;
        box-shadow: 0 2px 10px #dedddd, 0 0 5px #f7f7f7;
        border-right: 4px solid #04ddb0;
        &:first-child {
            padding-right: 0;
        }
        &:last-child {
            padding-left: 0;
        }
       
        .course {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-basis: 100%;
            height:250px;
             ${media.phone`
                padding: 10px;
            `}
             ${media.bigPhone`
                padding:0 25px;
            `}
             ${media.smallPhone`
              padding: 10px;
            `}
            .course-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                 padding-right: 30px;
                 padding-left: 30px;
                 padding-top:30px;
                 ${media.phone`
                   padding-right: 5px;
                 padding-left: 5px;
                  padding-top:17px;
                `}
                .course-title {
                    display: inline-block;
                    width: 100%;
                    h1 {
                        display: inline;
                        font-size: 1.7rem;
                        font-weight: bold;
                        margin: 0;
                        color: ${palette.darkGreyTertiary};
                        margin-right:10px;
                    }
                    img {
                        top: -3px;
                        position: relative;
                     }
                }
             
            }
            .course-detail {
                display: flex;
                flex-direction: column;
                height: 130px;
                 padding-right: 20px;
                 padding-left: 10px;
                ${media.phone`
                   height: auto;
                `}
                .course-description {
                    font-size: 1.4rem;
                    line-height: 2.76rem;
                    font-weight: normal;
                    color: ${palette.darkGreySecondary};
                    margin-bottom: 0;
                    padding:0 16px;
                }
            }
            .course-footer {
                padding: 10px 20px 10px 10px;
               position:relative;
               bottom:0;
                display: flex;
                justify-content: space-between;
                background-color: #E8FCF8;
                 height:70px;
                 border-radius: 0 0 0 30px;
                .level-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .level-title {
                        padding: 0;
                        margin: 0;
                        margin-right: 11px;
                        font-size: 1.2rem;
                        font-weight: normal;
                    }
                    .level {
                        width: 20px;
                    }
                }
                .tag-container {
                    display: flex;
                    align-items: center;
                    ${media.phone`
                        max-width: 300px;
                    `}
                    .tag {
                        margin-right: 10px;
                        padding: 0 10px;
                        line-height: 20px;
                        border-radius: 12px;
                        font-size: 1rem;
                    }
                }
                .certificate-badge {
                    position: relative;
                    flex-shrink: 0;
                    .madrak {
                         width: 30px;
                         height: auto;
                         margin-top: 10px;
                    }
                    img {
                       height: 25px;
                        width: 90px;
                    }
                    span {
                        color: black;
                         margin: 0 -5px;
                        font-size: 10px;
                        font-weight: bold;
                        top: 10px;
                        position: relative
                    }
                    &:first-child{
                     &::before {
                        display:none;
                     }
                    }
                  
                    &::before {
                        position: absolute;
                        content: '';
                        right: -10px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 2px;
                        height: 14px;
                        background-color: ${palette.lightGreySeptenary};
                    }
                }
            }
        }
    }
    .mobile-course-footer{
        display: none;
    }

    ${media.xxDesktop`
        .column-container{
            padding: 0px;
            .course{
                .course-detail{
                    .course-description{
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                }
        }
    `};
    ${media.xDesktop`
        .column-container{
            display: flex;
            align-items: center;
            .course{
                .course-detail{
                    .course-description{
                        line-height: 3rem;
                    }
                }                
            }
        }
        
    `};
    ${media.desktop`
        .course-image-wrapper{
            height: 170px;
            min-width: 170px;
         }
        .column-container{
            .course{
                .course-footer{
                    height: 40px;
                }
            }
        }
    `};
    ${media.tablet`
        .course-image-wrapper{
             height: 170px;
             min-width: 170px;
             border-radius: 30px 30px 0 0;
              height: 170px
        
         }
        .column-container{
            .course{
                display: block;
                .course-footer{
                    display: none;
                }
                .course-header{
                    display: block;
                }
                .course-detail{
                    padding-left: 10px;
                    .course-description{
                        line-height: 3.3rem;
                        margin-top: 0;
                        margin-bottom: 0;
                    }
                }
                .certificate-badge{
                        margin-top: 10px;
                        &::before{
                            display: none;
                        }
                }
            }
        
        .mobile-course-footer{
            border: 1px solid ${palette.lightGrey};
            padding: 5px 20px 5px 10px;
            display: flex;
            justify-content: space-between;
            border-radius: 4px;
            .level-container {
                display: flex;
                justify-content: center;
                align-items: center;
                .level-title {
                    padding: 0;
                    margin: 0;
                    margin-right: 11px;
                    font-weight: normal;
                    font-size: 1.5rem;
                }
            }
            .tag-container {
                display: flex;
                align-items: center;
                .tag {
                    margin-right: 10px;
                    padding: 7px 25px;
                    border-radius: 500px;
                    font-weight: normal;
                    background-color: ${palette.lightGreenSecond};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;
                    white-space: nowrap;
                }
            }
        }
    `}
    ${media.smallTablet`
        .column-container{
            padding-right: 25px;
            display: flex;
            align-items: center;
            .course{
                .course-detail{
                    .course-description{
                        line-height: 3.6rem;
                    }
                }
            }
        }
    `}
    ${media.bigPhone`
        .column-container{
            display: block;
            padding-right: 0;
            padding-left: 0;
            &:first-child{
                padding-right: 0px;
            }
        }
        .mobile-course-footer{
            padding: 10px;
            display: flex;
            flex-direction: column;
            height: 80px;
            border: none;
             ${media.bigPhone`
                padding:0 25px;
            `}
            ${media.smallPhone`
              padding: 10px;
            `}
            .level-container{
                display: flex;
                justify-content: flex-start;
            }
            .tag-container{
                margin-top: 12px;
                .tag{
                    margin-right: 0;
                    margin-left: 10px;
                }
            }
        }
    `}
    ${media.phone`
        .mobile-course-footer{
            background-color: #E8FCF8;
            border-radius: 0 0 30px 30px;
            box-shadow: 0 5px 10px #dedddd, 0 0 5px #f7f7f7;
            .tag-container{
                max-width: 300px;
            }
        }
        .title {
            display: inline-block!important;
        }
        .title-eng {
           display: inline-block!important;
          
           font-weight: normal!important;
        }
        .title-img {
            margin-left:20px;
            display: inline-block;
        }
        .column-container {
            border-radius: 0;
            border-top: 4px solid #04ddb0;
            border-right:0;
            .course{
                height:100px
            }
        }
        .course-image-wrapper {
            img {
                height: 170px
            }
        }
        .course-detail{
           display: none!important;
        }
        .level {
            width: 100%;
            padding: 20px 0;
            .level-title {
                color: #707070;
                margin-right:40px;
                 ${media.phone`
                      margin-right:20px;
                 `}
            }
            .level-text {
                color: black; 
                font-weight: bold; 
            }
         }
    `}
    ${media.smallPhone`
        .mobile-course-footer{
            .tag-container{
                max-width: 270px;
                .tag{
                    padding: 7px 21px;
                }
            }
        }
    `}
     
     
`;
export default Style;
