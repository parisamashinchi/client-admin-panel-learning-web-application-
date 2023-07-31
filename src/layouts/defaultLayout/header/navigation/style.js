import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.ul`
    display: flex;
    list-style: none;
    margin: 0px;
    padding: 0px;
    li {
        &.nav-item {
            font-size: 1.9rem;
           ${media.xxxDesktop`
                margin-left: 30px;
            `}
             ${media.xxDesktop`
                margin-left: 17px;
            `}
             ${media.xDesktop`
                margin-left: 10px;
                 font-size: 1.5rem;
            `}
            ${media.desktop`
                line-height: 59px;
                margin-left: 20px;
            `}
            a {
                font-size: 1.4rem;
                font-weight: bold
            }
        }
    }
    .am-badge {
    position: relative;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}
.am-badge-not-a-wrapper .am-badge-dot, .am-badge-not-a-wrapper .am-badge-text {
    top: auto;
    display: block;
    position: relative;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}
.am-badge-text {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: -6px;
    height: 18px;
    line-height: 18px;
    min-width: 9px;
    border-radius: 12px;
    padding: 0 5px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #ff5b05;
    white-space: nowrap;
    -webkit-transform: translateX(-45%);
    -ms-transform: translateX(-45%);
    transform: translateX(-45%);
    -webkit-transform-origin: -10% center;
    -ms-transform-origin: -10% center;
    transform-origin: -10% center;
    z-index: 10;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,SimSun,sans-serif;
}
.ant-tag-red {
    color: #ffff;
    background: #FD7272;
    border-color: #FD7272;
    height: 23px;
    top: 30px;
    position: relative;
    left: 20px;
}
`;
export default Style;
