import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    overflow: hidden;
    .fixed-background {
        position: absolute;
        background: url('/static/images/path-2.svg') no-repeat;
        background-size: cover;
        width: 1250px;
        height: 1250px;
        left: -500px;
        top: -65px;
        z-index: -1;
        ${media.desktop`
            width:1150px;
            height: 1150px;
            top:0;
        `}
    }
    .contact-form {
        padding: 140px 0 100px;
        .contact-form-title {
            text-align: center;
            color: ${palette.lightGreyThirtyFourth};
        }
        .contact-inputs-container {
            padding: 0 140px;
            ${media.desktop`
                padding: 0 60px;
            `}
            ${media.tablet`
                padding: 0;
            `}
            .contact-inputs {
                margin-top: 100px;
                .ant-form {
                    .ant-form-item-control {
                        text-align: left;
                        input {
                            color: ${palette.lightGreyThirtyEighth};
                            border: 1px solid ${palette.lightGreyTwentyFourth};
                            height: auto;
                            padding: 14px 12px;
                            background: ${palette.whiteSecond};
                            &::placeholder {
                                font-size: 1.1rem;
                                font-weight: bold;
                            }
                        }
                        textarea {
                            border: 1px solid ${palette.lightGreyTwentyFourth};
                            background: ${palette.whiteSecond};
                            padding: 12px 11px;
                            &::placeholder {
                                font-size: 1.1rem;
                                font-weight: bold;
                            }
                        }
                        .ant-form-explain {
                            margin-top: 10px;
                            margin-bottom: 10px;
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
`;
export default Style;
