import styled from 'styled-components';
import { Checkbox as AntCheckbox } from 'antd';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Checkbox = styled(AntCheckbox)`
    display: flex;
    align-items: center;
    .ant-checkbox {
        margin-top: 2px;
        .ant-checkbox-inner {
            position: relative;
            width: 17px;
            height: 17px;
            border: 1px solid ${palette.lightGreySenary} !important;
            border-radius: 4px;
            margin-right: 0px !important;
        }
    }
    .ant-checkbox-checked {
        .ant-checkbox-inner {
            background-color: ${palette.lightGreen};
            border-color: ${palette.lightGreen} !important;
            &::after {
                margin: 0;
                padding: 0;
                background-color: ${palette.white};
                border-radius: 50%;
                width: 8px;
                height: 8px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border: none !important;
            }
        }
        &::after {
            background-color: ${palette.lightGreen};
            border-color: ${palette.lightGreen} !important;
        }
    }
    .ant-checkbox-wrapper {
        display: flex;
        align-items: center;
    }
    span:last-child {
        margin-right: 5px;
        font-size: 1.7rem;
        font-weight: 300;
        color: ${palette.darkGreyTertiary};
        white-space: nowrap;
    }
    ${media.desktop`
        span:last-child{
            line-height: normal;
        }
        .filter-group{
            .filter-list{
                .filter-item{
                    margin-top: 11px;
                }
            }
        }
    `}
`;
export default Checkbox;
