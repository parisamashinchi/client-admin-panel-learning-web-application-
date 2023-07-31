import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    background: url('/static/images/about-us-resume-bg.jpg') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    ${media.bigPhone`
        background-attachment: scroll;
    `}
    &:after {
        content: '';
        position: absolute;
        background: ${palette.white};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.82;
    }
    .resume {
        position: relative;
        z-index: 1;
        padding: 130px 0 90px;
        text-align: center;
        .resume-title {
            color: ${palette.darkGreenSecond};
            font-size: 3.4rem;
            margin-bottom: 10px;
            ${media.desktop`
                margin-bottom: 20px;
            `}
        }
        .resume-description {
            color: ${palette.lightGreyFourtyEighth};
            font-weight: bold;
            font-size: 1.55rem;
            width: 750px;
            margin: 0 auto;
            ${media.desktop`
                width: 690px;
            `}
            ${media.tablet`
                width: auto;
            `}
        }
        .send-resume-btn {
            border: 1px solid ${palette.lightGreen};
            border-radius: 13px;
            font-weight: normal;
            margin-top: 60px;
            background: ${palette.lightGreen};
            transition: all 0.2s ease-in-out;
            span {
                color: ${palette.white};
                font-weight: normal !important;
                font-size: 1.6rem !important;
            }
            &:focus {
                background: ${palette.lightGreen};
            }
            &:hover {
                box-shadow: 0 0 10px 0 ${palette.lightGreen};
            }
        }
    }
`;
export default Style;
