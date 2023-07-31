import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    width: 1576px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 0.5s;
    ${media.xxDesktop`width: 1200px;`};
    ${media.xDesktop`width: 1200px;`};
    ${media.desktop`width: 100%;`};

    .responsive-box-wrapper {
        padding: 0px 15px;
        width: calc(100% - 30px);
        ${media.desktop`
            padding: 0;
            width: 100%;
        `}
    }
`;
export default Style;
