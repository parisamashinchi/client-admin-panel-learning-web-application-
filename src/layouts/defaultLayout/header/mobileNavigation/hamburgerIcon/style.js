import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    display: block;
    float: right;
    line-height: 1;
    transition: all 0.3s ease 0s;

    .hamburger-icon-inner {
        width: 20px;
        height: 12px;
        position: relative;
        display: block;
        .line {
            display: block;
            width: 20px;
            height: 2px;
            position: absolute;
            left: 0;
            border-radius: 1px;
            transition: all 0.4s;
            background: ${palette.black};
        }
        .line-1 {
            top: 0;
            ${props => (props.open ? 'transform: translateY(6px) translateX(0) rotate(45deg);' : null)}
        }
        .line-2 {
            top: 50%;
            ${props => (props.open ? 'top: 100%; transform: translateY(6px);' : null)}
        }
        .line-3 {
            top: 100%;
            ${props => (props.open ? 'transform: translateY(-6px) translateX(0) rotate(-45deg);' : null)}
        }
    }
`;
export default Style;
