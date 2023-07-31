import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.ul`
    background: ${palette.whiteLowOpacity};
    padding-right: 0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    .submenu-item {
        margin-left: 0;
        line-height: normal;
        position: relative;
        font-weight: bold;
        padding: 10px;
        ${media.phone`
            margin: 0 auto;
       `}
        ${media.tablet`
            margin: 0 auto;
         `}
        .ant-btn {
            border: none;
        }
        .submenu-text {
            display: block;
            font-size: 1.4rem;
            padding: 12px 23px 12px 43px;
            white-space: nowrap;
            color: #5A5A5A;
            position: relative;
            &:hover,
            &:active,
            &:focus {
                color: ${palette.bluishGreen};
            }
             ${media.phone`
                color: white;
            `}
            ${media.tablet`
                color: white;
            `}
        }
        ul {
            padding-right: 23px;
            li {
                a {
                    font-size: 1.3rem;
                    color: ${palette.lightGreyThirtySeven};
                    padding: 5px 0;
                    &:hover,
                    &:active,
                    &:focus {
                        color: ${palette.bluishGreen};
                    }
                }
            }
        }
    }
`;
export default Style;
