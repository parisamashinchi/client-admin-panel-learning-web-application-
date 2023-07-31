import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    overflow: hidden;
    .fixed-background {
        position: absolute;
        background: url('/static/images/path-2.svg');
        background-size: 100%;
        top: -181px;
        left: -535px;
        width: 1300px;
        height: 1300px;
        z-index: -1;
        opacity: 0.8;
        ${media.antDesktop`
            width: 1100px;
            height: 1100px;
        `}
    }
    .certificate-content {
        padding: 85px 0 100px;
        .factor-section {
            background: ${palette.lightGreyOctonary};
            padding: 42px 0 59px;
        }
        .image-section {
            padding-top: 30px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            ${media.tablet`
                padding-top: 60px;
            `}
            .image-section-header {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid ${palette.lightGreyEleventhLowOpacityThird};
                padding-bottom: 16px;
                ${media.phone`
                    flex-direction: column;
                `}
                .title {
                    color: ${palette.lightGreyFiftyThird};
                    font-size: 1.85rem;
                }
                .icons {
                    button {
                        &:not(:last-child) {
                            margin-left: 25px;
                        }
                        img {
                            &#printer {
                                width: 23px;
                                height: 23px;
                            }
                            &#upload {
                                width: 22px;
                                height: 22px;
                            }
                        }
                        ${media.phone`
                            margin-top: 5px;
                            &:not(:last-child){
                                margin-left: 14px;
                            }
                        `}
                    }
                }
            }
            .certificate-image {
                img {
                    width: 360px;
                }
                ${media.tablet`
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                    img{
                        width: auto;
                    }
                `}
            }
        }
    }
`;
export default Style;
