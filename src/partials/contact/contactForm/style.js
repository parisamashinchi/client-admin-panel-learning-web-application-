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
        width: 1200px;
        height: 1200px;
        left: -500px;
        z-index: -1;
        ${media.xxDesktop`
            left: -600px;
            top:50px;
        `}
        ${media.xDesktop`
            left: -700px;
            top:50px;
        `}
    }
    .contact-form {
        padding: 50px 0;
        .contact-form-container {
            display: flex;
            width: 1070px;
            margin: 0 auto;
            justify-content: center;
            flex-direction: column;
            ${media.xxDesktop`
                width: 1000px;
            `}
            ${media.xDesktop`
                width: 900px;
            `}
            ${media.desktop`
                width: 700px
            `}
            ${media.tablet`
                width: auto;
            `}
            .contact-form-header {
                display: flex;
                flex-direction: column;
                text-align: center;
                font-size: 1.8rem;
                padding-bottom: 15px;
                .support {
                    color: ${palette.lightGreyTertiary};
                }
                .contact-info {
                    display: flex;
                    color: ${palette.lightGreySenary};
                    margin-top: 15px;
                    justify-content: center;
                     ${media.phone`
                        display:block
                      `}
                    .contact-info-item {
                        margin-top: 5px;
                        padding: 0 35px;
                        position: relative;
                         ${media.phone`
                             width:65%;
                          `}
                        a{
                          color: ${palette.lightGreySenary};
                        }
                        &:first-child {
                            &:after {
                                content: '';
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                left: 0;
                                background: ${palette.lightGreySenary};
                                width: 1px;
                                height: 11px;
                                ${media.bigPhone`
                                    display: none;
                                `}
                            }
                        }
                    }
                    ${media.bigPhone`
                        flex-direction: column;
                    `}
                }
            }
            .contact-separator {
                width: 100%;
                border: 1px solid ${palette.lightGreyEleventh};
                opacity: 0.14;
                margin: 0;
            }
            .contact-form-description {
                margin-top: 30px;
                p {
                    color: ${palette.lightGreySenary};
                    font-size: 1.7rem;
                    text-align: center;
                    padding: 0 5px;
                }
            }
            .contact-inputs-container {
                padding: 0 90px;
                ${media.desktop`
                    padding: 0 60px;
                `}
                ${media.tablet`
                    padding: 0;
                `}
                
            }
        }
    }
    .phone {
      float: left;
    }
`;
export default Style;
