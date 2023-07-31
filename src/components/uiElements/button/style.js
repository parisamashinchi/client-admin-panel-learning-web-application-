import styled from 'styled-components';
import { Button } from 'antd';
import { palette } from 'theme/injectGlobal';
import { isDarkColor, lighten } from 'utils/colorUtils';

const Style = styled(Button)`
    position: relative;
    height: auto;
    border: none;
    ${({ size }) => {
    switch (size) {
        case 'large':
            return 'width: 260px; height: 45px;';
        case 'medium':
            return 'padding: 10px 60px';
        case 'small':
            return 'padding: 18px 45px';
    }
}};
    &::after {
        display: none;
    }
    span {
        line-height: 1.42857 !important;
        font-size: 1.4rem !important;
        font-weight: bold !important;
        transition: color 0.5s ease;
    }
    outline: 0;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.5s ease;
    &:hover {
        border-color: transparent;
        span {
            color: ${({ color }) => (color ? (isDarkColor(color) ? palette.black : palette.white) : palette.black)};
        }
        touch-action: manipulation;
        background-color: ${({ solid, color }) => (solid ? (color ? lighten(color, 20) : palette.lightGreen) : color || palette.lightGreen)};
    }

    .invisible {
        visibility: hidden;
    }
    ${({ loading }) =>
    loading
        ? `
        color: transparent;
        cursor: wait;
        pointer-events: none;

        &:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            bottom: 0;
            right: auto;
            width: 20px;
            height: 20px;
            margin-top: -10px;
            margin-left: -10px;
            border-radius: 50%;
            border: 2px solid transparent;
            border-top-color: ${palette.black};
            opacity: 1;
            animation: spinner .6s linear infinite;
        }`
        : ''};

    ${({ formButton }) =>
    formButton
        ? `
            background: ${palette.darkGreenThird};
            border-radius: 15px;
            padding: 15px 80px;
            border: none;
            span {
                font-size: 1.5rem !important;
                font-weight: normal !important;
                color: ${palette.white};
            }
            &:focus {
                border: none;
                background: ${palette.darkGreenThird}
            }
            &:hover{
                span{
                    color: ${palette.white};
                }
            }
        `
        : ``};
`;
export default Style;
