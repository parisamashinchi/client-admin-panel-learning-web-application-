import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .amoozal-intro {
        padding: 150px 0;
        background: url('/static/images/amoozal-intro-background.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        z-index: 1;
        border-radius: 36px;
        overflow: hidden;
        ${media.desktop`
            border-radius: 0;
        `}
        ${media.bigPhone`
            background-attachment: scroll;
        `}
        .amoozal-intro-wrapper {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            .amoozal-intro-title {
                text-align: center;
                color: ${palette.white};
                font-size: 3.1rem;
                margin-bottom: 20px;
            }
            .amoozal-intro-description {
                text-align: center;
                color: ${palette.white};
                font-size: 1.8rem;
                width: 800px;
                margin: 0 auto;
                line-height: 1.7;
                ${media.desktop`
                    width: 650px;
                `}
                ${media.tablet`
                    width: auto;
                    padding: 0 30px;
                `}
            }
            .play-video-btn {
                background: none;
                border: none;
                cursor: pointer;
                outline: none;
                margin-top: 90px;
                svg {
                    border-radius: 100%;
                    width: 85px;
                    height: 85px;
                    transition: all 0.2s ease;
                    ${media.desktop`
                        width: 80px;
                        height: 80px;
                    `}
                    ${media.tablet`
                        width: 75px;
                        height: 75px;
                    `}
                }
                &:hover {
                    svg {
                        box-shadow: 0px 0px 10px 4px ${palette.white};
                    }
                }
            }
        }

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${palette.lightGreen};
            opacity: 0.93;
        }
    }
`;
export default Style;
