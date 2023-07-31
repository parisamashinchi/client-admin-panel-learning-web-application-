import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .organization-body {
        padding: 100px 0;
        .organization-item-container {
            padding: 0 140px;
            ${media.xDesktop`
                padding: 0 40px;
            `}
        }
    }
`;
export default Style;
