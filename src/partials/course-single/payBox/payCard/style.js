import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    display: flex;
    justify-content: center;
    .pay-card {
        background: ${palette.white};
        border-radius: 10px;
        border: 3px solid ${palette.darkYellow};
        position: relative;
        ${media.tablet`
            width: 100%;
        `}
        .pay-card-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 47px 140px;
            ${media.tablet`
                padding: 47px 20px;
            `}
            .pay-card-title {
                color: ${palette.blackSecond};
                font-size: 1.7rem;
                margin-bottom: 0;
                letter-spacing: -1px;
                text-align: center;
            }
            .separator {
                border-top: none;
                border-left: none;
                border-right: none;
                border-color: ${palette.lightGreyEleventhLowOpacityFourth};
                width: 80%;
                margin: 26px 0 28px;
                ${media.tablet`
                    width: 45%;
                `}
                ${media.phone`
                    width: 80%;
                `}
            }
            .pay-card-body {
                .price {
                    display: flex;
                    align-items: center;
                    span {
                        font-weight: bold;
                        white-space: nowrap;
                        &:not(:last-child) {
                            margin-left: 28px;
                        }
                        &:nth-child(1) {
                            color: ${palette.lightGreyThirtyFourth};
                            font-size: 1.4rem;
                        }
                        &:nth-child(2) {
                            color: ${palette.lightGreenThird};
                            font-size: 3.6rem;
                        }
                        &:nth-child(3) {
                            color: ${palette.lightGreyTwentyFirst};
                            font-size: 1.5rem;
                        }
                        ${media.phone`
                            &:not(:last-child){
                                margin-left: 20px;
                            }
                        `}
                    }
                }
                .discount-code {
                    margin-top: 50px;
                    .ant-form {
                        .ant-form-item {
                            height: 100%;
                            margin-bottom: 0;
                            .ant-form-item-control-wrapper {
                                height: 100%;
                                .ant-form-item-control {
                                    height: 100%;
                                    .discount-input {
                                        padding-right: 24px !important;
                                        padding-top: 11px !important;
                                        padding-bottom: 11px !important;
                                    }
                                    .action-btn {
                                        width: 100%;
                                        height: 100%;
                                        border-radius: 0;
                                        background: ${palette.lightGreen};
                                        span {
                                            color: ${palette.white};
                                            font-size: 1.65rem !important;
                                            font-weight: normal !important;
                                        }
                                        &:hover {
                                            background: ${palette.darkGreenThird};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .banks {
                margin-top: 32px;
            }
            .gateway-btn {
                padding: 15px 43px;
                margin-top: 22px;
            }
            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
    }
`;
export default Style;
