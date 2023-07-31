import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

export const Rate = styled.div`
    margin-top: 10px;
    font-family: FontAwesome;
    font-size: 1.2rem;
    letter-spacing: 5px;
    line-height: 1;
    position: relative;
    white-space: nowrap;
    &:before {
        content: '\f005\f005\f005\f005\f005';
        color: ${palette.lightGreySecondary};
        margin-right: -4px;
    }
    span {
        width: ${props => props.rate};
        bottom: 0;
        display: block;
        right: 0;
        position: absolute;
        text-indent: -9999px;
        overflow: hidden;
        font-family: FontAwesome;
        top: 0;
        &:before {
            content: '\f005\f005\f005\f005\f005';
            margin-right: -4px;
            right: 0;
            position: absolute;
            top: 0;
            color: ${palette.skyBlue};
            text-indent: 0;
        }
        strong {
            font-weight: 700;
        }
    }
`;
export const Ratable = styled.span`
    display: flex;
    flex-direction: row-reverse;
    a {
        font-family: FontAwesome;
        font-size: 1.2rem;
        letter-spacing: 5px;
        display: inline-block;
        outline: 0 none;
        position: relative;
        color: #c6c6c6;
        &:hover {
            color: #c6c6c6;
        }
        &.active {
            color: #6fd9e9;
            &:hover {
                color: #6fd9e9;
            }
        }
        &::after {
            content: '\f005';
        }
    }
`;
