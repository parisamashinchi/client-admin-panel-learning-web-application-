import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery.js';

const Style = styled.footer`
    .footer-top {
        height: 482px;
        background-color: ${palette.lightGrey};
        .widget {
            display: flex;
            flex-direction: column;
            .title {
                margin-bottom: 30px;
                color: ${palette.lightGreyTertiary};
                font-size: 2.4rem;
            }
            .sub-title {
                a{
                    color: ${palette.lightGreyTertiary};
                    font-size: 1.75rem;
                }
                p {
                    margin-bottom: .5em;
                    width: max-content;
                      ${media.phone`
                         margin: 0 auto;
                    `}
                 }
                .phone {
                    float:left;
                }
            }
            ${media.antDesktop`
              margin-top: 20px;
            `}
            
            ${media.tablet`
                text-align: center;
                &#news-letter{
                    margin-top: 20px;
                    .title{
                        text-align: center;
                        margin-bottom: 20px;
                    }
                }   
            `}
        }
        .footer-nav {
            display: flex;
            img{
                max-width: 125px;
                opacity:.5;
                ${media.xDesktop`
                    max-width: 150px;
                `}
            }
            .nav-list {
                position: relative;
                display: flex;
                list-style: none;
                margin: 0 110px 0 0;
                padding: 0;
                font-weight: bold;
                    ${media.phone`
                        display: block;
                    `}

                &::before {
                    content: '|';
                    position: absolute;
                    width: 1px;
                    right: -54px;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: ${palette.lightGrey};
                    font-size: 1.9rem;
                    font-weight: bold;
                    color: ${palette.lightGreyNinth}
                }

                li {
                    display: flex;
                    align-items: center;

                    a{
                        color: ${palette.lightGreyNinth};
                        font-size: 1.5rem;
                         ${media.phone`
                            margin:0 auto
                        `}
                    }
                    &:not(:last-child){
                        margin-left: 44px;
                        
                        ${media.xxDesktop`
                            margin-left: 27px;
                        `}
                         ${media.phone`
                            margin:0 
                        `}
                     
                    }
                    &:hover{
                        a{
                            color: ${palette.lightGreyTertiary};
                        }
                    }
                }
            }
        }
        .certificate-badge {
            display: flex;
            justify-content: flex-end;
            img{
              height:100px;
            }
           
        }
    }
    .footer-bottom {
        height: 88px;
        background-color: ${palette.darkGrey};
        display: flex;
        align-items: center;
        .copyright{
            .copyright-text {
            color: ${palette.lightGreySecondary};
            font-weight: bold;
            margin: 0;
            font-size: 1.2rem;
            }
            ${media.antDesktop`display: none`};
        }
        .social-nav {
            display: flex;
            list-style: none;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
            margin: 0;
            li {
                margin-right: 45px;
                ${media.desktop`
                    margin-right: 25px;
                `}
                ${media.antDesktop`
                    margin-right: 45px;
                `}
                ${media.phone`
                    margin-right: 35px;
                `}
                ${media.smallPhone`
                    margin-right: 25px;
                `}
                a{
                    display: flex;
                    i{
                    display: flex;
                    align-items: center;
                        svg{
                            width: 20px;
                            height: 20px;
                            fill: ${palette.lightGreySecondary};
                            g{
                               fill: ${palette.lightGreySecondary}
                            }
                        }
                    }                        
                }
            }
        }
    }

    ${media.xDesktop`
        .footer-top{
            .widget{
                .title {
                    margin-bottom: 30px;
                    color: ${palette.lightGreyTertiary};
                }
                .sub-title {
                    color: ${palette.lightGreyTertiary};
                }
            }
            
            .footer-nav{
                .nav-list{
                    margin-right: 50px;

                    &::before{
                        right: -28px;
                    }
                }
            }
        }
    `}
    ${media.desktop`
        .footer-top{
            height: auto;
            .nav-row{
                margin-top: 40px !important;
                .footer-nav{
                    justify-content: center;
                    .nav-list{
                        li{
                            position: relative;
                            a{
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
            .certificate-badge{
                justify-content: center;
                margin: 40px 0;
            }
            .widget{
                .title{
                    margin-bottom: 15px;
                }
                &#news-letter{
                    .title{
                        text-align: center;
                    }
                }
            }
        }
        .footer-bottom{
            .social-nav{
                justify-content: center;
                li{
                    &:first-child{
                        margin-right: 0;
                    }
                }
            }
        }
    `}
    ${media.antDesktop`
        .footer-top{
            .footer-nav{
                .nav-list{
                    margin-right: 0;
                li{
                    :not(:last-child){
                          &::after{
                              content:"|";
                              position: absolute;
                              left: -17px;
                              color: ${palette.lightGreyNinth};
                              ${media.phone`
                                  display:none
                              `}
                          }   
                    } 
                }
                    &::before{
                        display: none;
                    }
                }
                img{
                    display: none;
                }
            }
            .widget{
                text-align: center;
                  ${media.bigPhone`
                    p {
                        margin-bottom: 1em;
                    }
                  `}
            }
        }
    `}
    ${media.tablet`
        .footer-top{
            .widget{
                .sub-title{
                    padding-left: 0;
                }
            }
        }
    `}
    ${media.bigPhone`
        .footer-top{
            .nav-row{
                margin-top: 0 !important;
            }
            .ant-row-flex{
             margin-top: 0 !important;
            }
        }
    `}
   
`;
export default Style;
