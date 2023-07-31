import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    width: 100%;
    .responsive-padding-wrapper {
        transition: all 0.2s ease;
        ${media.desktop`
            ${({ justRight }) => (justRight ? 'padding-right: 27px;' : 'padding: 0 27px')};
        `}
    }
`;
export default Style;
