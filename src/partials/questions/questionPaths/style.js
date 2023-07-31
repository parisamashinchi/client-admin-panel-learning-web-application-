import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    overflow: hidden;
    background: ${palette.whiteGrey};
    .question-paths {
        padding: 100px 0 55px;
        ${media.bigPhone`
            padding: 80px 0 50px;
        `}
    }
    .ant-anchor-wrapper {
        background: none;
        .ant-anchor-ink {
            display: none;
        }
        .ant-anchor-link {
            padding: 0;
            margin-bottom: 40px;
        }
    }
`;
export default Style;
