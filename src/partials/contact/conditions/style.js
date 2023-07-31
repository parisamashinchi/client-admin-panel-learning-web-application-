import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    background: ${palette.whiteGrey};
    .conditions {
        padding: 100px 0 60px;
        ${media.bigPhone`
            padding: 100px 0 30px;
        `}
    }
`;
export default Style;
