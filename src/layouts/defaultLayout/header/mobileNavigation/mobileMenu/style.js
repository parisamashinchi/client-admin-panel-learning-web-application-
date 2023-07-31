import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import { Col } from 'antd';
import media from 'theme/MediaQuery';

export const Style = styled.div`
    display: flex;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: ${palette.lightBlack};
    ${({ open }) => (open ? `transition-delay: 0s; visibility: visible; opacity: 1;` : 'transition-delay: 0s;')}
    ${({ ios }) => (ios ? 'min-height: 100vh;' : '')}
    .item1 {
        transition-delay: 0.1s;
    }
    .item2 {
        transition-delay: 0.2s;
    }
    .item3 {
        transition-delay: 0.3s;
    }
    .item4 {
        transition-delay: 0.4s;
    }
    .item5 {
        transition-delay: 0.5s;
    }
    .item6 {
        transition-delay: 0.6s;
    }
    .item7 {
        transition-delay: 0.7s;
    }
`;

export const NavWrapper = styled.nav`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: auto;
    border-top: 1px solid ${palette.darkLightGreyPrimary};
    border-bottom: 1px solid ${palette.darkLightGreyPrimary};
    padding: 0 27px 15px;
    .close-icon {
        position: absolute;
        top: 15px;
        left: -15px;
        background: transparent;
        border: none;
        outline: none;
        .anticon {
            font-size: 3rem;
            font-weight: bold;
            color: ${palette.white};
            margin-left: 0;
        }
    }
    .nav-container {
        display: flex;
        flex-direction: column !important;
        align-items: center;
        position: relative;
        flex-flow: nowrap;
        justify-content: center;
        .nav-items {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex-flow: column nowrap;
            width:100%
        }
        .buttons {
            display: flex;
            justify-content: center;
            margin: 60px 0;
            ${media.phone`
                width:100%;
            `}
             ${media.tablet`
                width:300px;
            `}
            button {
                border-radius: 7px;
                span {
                    color: ${palette.white};
                    font-size: 2.5rem !important;
                }
             
                ${media.phone`
                    width:100%;
                    padding: 10px 0 !important;
                `}
            }
        }
           .login {
                    border: 1px solid ${palette.darkGreen};
                    background: ${palette.darkGreen};
                    width: 100%;
                    padding: 3px 0 !important;
                    height: inherit;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                    &:hover {
                        background: ${palette.lightGreen};
                    }
                }
                .register {
                    background: transparent;
                    border: 1px solid ${palette.white};
                    width: 100%;
                    padding: 3px 0 !important;
                    height: inherit;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                    &:hover {
                        background: ${palette.white};
                        span {
                            color: ${palette.black};
                        }
                    }
                }
        .nav-footer-wrapper {
            display: flex;
            align-items: center;
            width: 600px;
            margin: 0 auto;
            ${media.tablet`
                width: 500px;
            `}
            ${media.bigPhone`
                width: auto;
            `}
            .ant-row-flex {
                flex-flow: row nowrap;
            }
            .nav-footer {
                padding-bottom: 120px;
                .copyright-text {
                    div {
                        font-size: 1.5rem;
                        color: ${palette.white};
                        line-height: 1.6;
                        text-align: center;
                    }
                }
                .nav-social-icons {
                    ul {
                        display: flex;
                        list-style: none;
                        align-items: center;
                        padding: 0;
                        margin: 0;
                        width: 80%;
                        margin: 0 auto;
                        ${media.bigPhone`
                            justify-content: space-between;
                        `}
                        &:first-child {
                            margin-bottom: 25px;
                        }
                        li {
                            &:not(:first-child) {
                                margin-right: 90px;
                            }
                            ${media.bigPhone`
                                &:not(:first-child){
                                    margin-right: 0;
                                }
                            `};
                            a {
                                display: flex;
                                i {
                                    display: flex;
                                    align-items: center;
                                    margin-left: 0;
                                    svg {
                                        width: 20px;
                                        height: 20px;
                                        fill: ${palette.lightGreySecondary};
                                        g {
                                            fill: ${palette.lightGreySecondary};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .search-wrapper {
        padding: 10px 15px;
    }
`;
export const Item = styled(Col)`
    margin-top: 35px;
    &:first-child {
        margin-top: 100px;
    }
    transition: all 0.8s ease;
    opacity: 0;
    transform: translateX(100px);
    a , .drop-hover{
        color: ${palette.white};
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 15px;
    }
    &.open {
       
       transform: translateX(0);
        opacity: 1;
    }
     .drop-overlay.show{
        width: 100%;
        background: white;
        display: inline-block;
        position: inherit;
         ${media.tablet`
            background: none;
         `}
         ${media.phone`
            background: none;
         `}
        ul{
           margin-bottom: 0;
            box-shadow: none;
            border-bottom: 1px solid gray;
            border-radius: 0;
            ${media.tablet`
                border-bottom: none;
                 background: none;
            `}
             ${media.phone`
                border-bottom: none;
            `}
        }
     }
      .submenu-item .submenu-text{
            margin-bottom: 0;
              &:before{
                content: none!important;
              }
      }
      .ant-tag-red {
        background: #f5222d;
        border-color: #f5222d;
        color: white;
    }
`;
