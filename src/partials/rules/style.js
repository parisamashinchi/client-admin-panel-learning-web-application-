import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
   .description {
                margin-top: 30px;
                .wea-item-title {
                    font-size: 3.5rem;
                    color: ${palette.darkGreyTertiary};
                    margin-bottom: 0;
                    text-align: center;
                     ${media.tablet`
                       margin-top: 10px;
                    `}
                }
                .wea-item-description {
                    font-size: 1.6rem;
                    color: ${palette.lightGreySeventeenth};
                    line-height: 1.9;
                    margin-top: 30px;
                    text-align: justify;
                }
                ${media.antDesktop`
                    text-align: center;
                    margin-top: 0;
                    margin-bottom: 50px;
                    .wea-item-description{
                        margin-top: 25px;
                        margin-bottom: 0;
                    }
                `}
            }
`;
export default Style;
