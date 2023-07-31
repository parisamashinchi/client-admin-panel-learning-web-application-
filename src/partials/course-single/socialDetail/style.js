import styled from 'styled-components';
import media from 'theme/MediaQuery';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    background: ${palette.whiteGrey};
    .social-detail {
        width: 100%;
        padding: 25px 0;
        .features {
            display: flex;
            .features-desktop {
                width: 100%;
                ${media.phone`
                   display: none;
                `}
            }
            .features-mobile {
                flex-basis: 100%;
                display: none;
                overflow: hidden;
                ${media.phone`
                     display: none;
                `}
                .features-mobile-wrapper {
                    display: flex;
                    align-items: center;
                }
            }
            .feature-item {
                display: flex;
                align-items: center;
                justify-content: center;
                .image {
                    flex-shrink: 0;
                    width: 35px;
                    transition: all 0.2s ease;
                    fill: ${palette.lightGreyFiftySeventh};
                }
                .text {
                    font-size: 1.1rem;
                    color: ${palette.lightGreyFiftySeventh};
                    line-height: 1.4;
                    margin-right: 10px;
                }
            }
        }
    }
    ${media.desktop`
        .social-detail{
            .social{
                .social-images{
                    .social-image-item{
                        padding-left: 30px;
                    }
                }
                .social-description{
                    margin-right: 30px;
                }
            }
        }
    `}
    ${media.tablet`
        .social-detail{
            .social{
                    margin: 0 auto;
            }
        }
        
    `}
`;

export default Style;
