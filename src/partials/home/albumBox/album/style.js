import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    width: 100%;
    padding: 50px 0;
    ${media.phone`
       padding: 0 0 30px 0;
    `}
`;
export default Style;
