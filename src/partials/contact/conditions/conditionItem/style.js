import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    ${media.bigPhone`
        margin-bottom: 30px;
    `}
    .condition-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .condition-image {
            width: 100%;
            img {
                width: 100%;
                height: auto;
                max-width: 100%;
            }
        }
        .condition-title {
            width: 100%;
            margin-top: 35px;
            h1 {
                font-size: 1.9rem;
                font-weight: normal;
                color: ${palette.lightGreyTertiary};
                text-align: center;
                line-height: 1.6;
            }
            ${media.desktop`
                width: 60%;
            `}
            ${media.tablet`
                width: auto;
            `}
        }
    }
`;
export default Style;
