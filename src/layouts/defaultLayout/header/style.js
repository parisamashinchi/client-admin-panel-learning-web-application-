import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    box-shadow: ${({ path }) => ( path ? `none` : `rgb(0 0 0 / 10%) 0px 0px 15px`)};
    background: ${palette.white};
    .search-login-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 1.9rem;
        ul {
            display: flex;
            align-items: center;
            margin-bottom: 0;
            padding-right: 10px;
            li {
                position: relative;
                font-size: 14px;
                font-weight: bold;
                &:first-child {
                    margin-left: 25px;
                }
                &:nth-child(2) {
                    &::after {
                        content: '/';
                        position: absolute;
                        right: -14px;
                        top: 0;
                        font-weight: bold;
                    }
                }
            }
        }
        .search {
            margin-left: 20px;
            ${media.xxDesktop`
                margin-left: 20px;
            `}
            ${media.xDesktop`
                margin-left: 20px;
            `}
        }
    }
    .desktop-nav-bar-container {
        ${media.desktop`display: none !important;`};
    }
    ${media.desktop` 
        height: 60px;
        background: ${({ blackBackground }) => (blackBackground ? `${palette.white}` : `transparent`)} ;
        box-shadow: none;
        &.black-background{
             background-color: ${palette.white};
             box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
    `};
    ${media.tablet`
        height: 50px;
    `}
    .drop-hover {
        font-size:1.4rem;
        font-weight: bold;
    }
    .drop-overlay{
        ul{
            background: #FFFFFFEB 0% 0% no-repeat padding-box;
            display:flex;
            padding-right: 0;
            // margin-top: 27px;
             ${media.phone`
                background: none;
            `}
           li:nth-child(2)::after {
           content: none;
           }
        }
    }
    .nav-item{
        line-height:80px;
    }
    .disable {
       pointer-events: none;
       cursor: default;
    }
`;
export default Style;
