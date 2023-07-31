import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    overflow: hidden;
    .fixed-background{
        background: url('/static/images/path-2.svg');
        background-size: 100%;
        position: absolute;
        width: 1300px;
        height: 1300px;
        top:-300px;
        left: -400px;
        opacity: 0.8;
        ${media.desktop`
            width: 1000px;
            height: 1000px;
            top:-150px;
            left: -400px;
        `}
        ${media.bigPhone`
            left: -500px;

        `}
    }
    .certificate-form {
        width: 500px;
        margin: 0 auto;
        padding: 140px 0;
        ${media.tablet`
            width: 450px;
        `}
        ${media.bigPhone`
            width: 400px;
        `}
        ${media.phone`
            width: auto;
        `}
        .ant-form-item {
            margin-bottom: 22px;
            .input-item{
                border: 1px solid ${palette.lightGreyFiftyFourth} !important;
                &::placeholder{
                    font-size: 1.25rem;
                    ${media.xDesktop`
                        font-size: 1.5rem; 
                    `}
                    ${media.desktop`
                        font-size: 1.6rem;
                    `}
                }
            }
            .chapta {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                color: ${palette.lightGreyThirtyEighth};
                background: ${palette.lightGreyFiftyFifth};
                border: 1px solid ${palette.lightGreyFiftyFourth};
                border-right: none;
                letter-spacing: 1px;
                font-size: 2rem;
                ${media.xDesktop`
                    font-size: 2.4rem;
                `}
                ${media.desktop`
                    font-size: 2.6rem;
                `}
            }
            .send-btn-wrapper{
                display: flex;
                justify-content: flex-end;
                .send-btn {
                    margin-top: 10px;
                }
            }
            &:last-child{
                margin-bottom: 0;
            }
            .ant-form-item-control-wrapper{
                .ant-form-item-control{
                    .ant-form-explain{
                        margin-top: 7px;
                    }
                }
            }
        }
    }
`;
export default Style;
