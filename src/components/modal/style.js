import styled from 'styled-components';
import { Modal } from 'antd';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled(Modal)`
    ${({ fullWidth }) =>
        fullWidth
            ? `width: 100% !important;
    max-width: 1170px;`
            : 'width: auto !important;'};
    padding: 0 6px;
    min-width: 50px;
    position: relative;
    ${({ fullHeight }) => (fullHeight ? `height: 100%; margin: 0; padding: 0` : ``)};
    .modal-close {
        display: ${props => (props.close ? 'flex' : 'none')};
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 44px;
        height: 44px;
        text-decoration: none;
        text-align: center;
        font-size: 18px;
        color: ${palette.greySecondary};
        left: 15px;
        top: ${props => (props.title ? '5px' : '15px')};
        transition: all 0.3s;
        z-index: 1000;
        cursor: pointer;
        :hover {
            color: ${palette.black};
        }
    }
    .ant-modal-content {
        margin-top: 40px;
        background: ${palette.white};
        border-radius: 0;
        position: relative;
        ${({ fullHeight }) => (fullHeight ? `height: 100%;` : ``)}
        .ant-modal-header {
            display: ${props => (props.title ? 'block' : 'none')};
        }
        .ant-modal-body {
            padding: 0;
            ${({ fullHeight }) => (fullHeight ? `height: 100%;` : ``)}
        }
        .ant-modal-footer {
            display: none;
        }
        .ant-modal-close {
            position: absolute;
            top: -40px;
            left: 0;
            right: auto;
            ${({ fullHeight }) => (fullHeight ? `top:0; left: 15px;` : ``)};
            .ant-modal-close-x {
                width: auto;
                i {
                    margin-left: 0;
                    font-size: 2rem;
                    svg {
                        fill: ${palette.lightGrey};
                        ${({ fullHeight }) => (fullHeight ? `fill: ${palette.darkGreyTertiary}` : ``)}
                    }
                }
            }
        }
    }
    ${media.tablet`
        width: 100% !important;
    `}
`;
export default Style;
