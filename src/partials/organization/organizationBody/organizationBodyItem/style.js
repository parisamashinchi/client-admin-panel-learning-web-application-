import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    &:not(:last-child){
        margin-bottom: 240px;
        ${media.tablet`
            margin-bottom: 70px;
        `}
    }
    .organization-item-fixed-background {
        background: url(${({ backgroundUrl }) => backgroundUrl});
        background-size: 100%;
        width: 1000px;
        height: 1000px;
        position: absolute;
        top: -470px;
        z-index: -1;
        ${({ imageLeft }) => (imageLeft ? `right: -580px;` : `left: -580px`)};
        ${media.tablet`
            width: 900px;
            height: 900px;
            top: -380px;
            left: -500px;
        `};
    }
    .organization-body-item {
        .description {
            ${({ imageLeft }) => (imageLeft ? `order: 1;` : ``)};
            .organization-description {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                .item-title {
                    margin-bottom: 40px;
                    color: ${palette.darkGreyTertiary};
                    font-size: 3.05rem;
                }
                .item-description {
                    color: ${palette.lightGreySeventeenth};
                    font-size: 1.5rem;
                    ${media.xDesktop`
                        line-height: 1.9;
                    `}
                }
                ${media.tablet`
                    text-align: center;
                    .item-title{
                        margin-bottom: 23px
                    }
                `}
            }
            ${media.tablet`
                margin-top: 50px;
            `}
        }
        .image {
            ${media.tablet`
                order: -1;            
            `}
            .organization-image {
                display: flex;
                justify-content: ${({ imageLeft }) => (imageLeft ? `flex-start;` : `flex-end`)};
                ${media.tablet`
                    justify-content: center;
                `}
                img {
                    width: 310px;
                    ${media.xDesktop`
                        width: 300px;
                    `}
                    ${media.desktop`
                        width: 280px;
                    `}
                    ${media.phone`
                        width: auto;
                        max-width: 100%;
                        height: auto;
                    `}
                }
            }
        }
    }
`;
export default Style;
