import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    margin-top: 70px;
    height: 100%;
    // overflow-y: scroll;
    
    ${media.desktop`
        margin-top: 0;
    `}
    ${media.tablet`
        margin-top: 0;
    `}
   
`;
export default Style;
