import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .our-team-item {
        margin-bottom: 60px;
        .team-image {
            border-radius: 28px;
            overflow: hidden;
            position: relative;
             ${media.phone`
                 width: 60%;
                 margin: 0 auto;
            `}
            img {
                &:first-child {
                    width: 100%;
                    position: relative;
                    opacity: 1;
                    transition: all 0.4s ease-in-out;
                    z-index: 1;
                    height:213px;
                     ${media.tablet`
                         height:180px;
                    `}
                }
                &:nth-child(2) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .our-team-content {
            margin-top: 15px;
            .team-title {
                color: ${palette.lightGreyTwentySixth};
                font-size: 2.1rem;
                margin-bottom: 0;
                text-align: center;
            }
            .team-subtitle {
                color: ${palette.lightGreyFourtySixth};
                font-weight: bold;
                text-align: center;
            }
            .team-description {
                color: ${palette.lightGreyFourtySeventh};
                line-height: 1.6;
                font-size: 1.35rem;
                margin-top: 6px;
            }
            ${media.bigPhone`
                text-align: center;
            `}
        }
    }
`;
export default Style;
