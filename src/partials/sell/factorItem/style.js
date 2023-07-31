import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .factor-item-container {
        width: 750px;
        margin: 0 auto;
        ${media.desktop`
            width: 650px;
        `}
        ${media.tablet`
            width: 100%;
        `}
        .factor-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 100px 0;
            .factor-header {
                text-align: center;
                background: ${palette.darkGreenSecond};
                width: 100%;
                .factor-title {
                    margin-bottom: 0;
                    color: ${palette.white};
                    padding: 18px 0;
                    font-size: 2.45rem;
                }
            }
        }
    }
`;
export default Style;
