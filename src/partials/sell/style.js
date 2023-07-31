import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    position: relative;
    overflow: hidden;

    .fixed-background {
        position: absolute;
        background: url('/static/images/path-2.svg') no-repeat;
        background-size: cover;
        width: 1200px;
        height: 1200px;
        left: -300px;
        z-index: -1;
        opacity: 0.7;
        ${media.xxDesktop`
            left: -600px;
            top:50px;
        `}
        ${media.xDesktop`
            left: -700px;
            top:50px;
        `}
    }
`;
export default Style;
