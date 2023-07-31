import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    flex-shrink: 0;
    .logo {
        margin: 0;
        line-height: inherit;
        a {
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            img {
                max-width: 110px;
                height: auto;
                transition: max-height 0.5s;
                ${media.xDesktop`
                    max-width: 140px;
                `}
                ${media.desktop`
                    max-width: 120px;
                `}
                ${media.phone`
                    margin-left: 10px;
                    max-width: 75px;
                    height: 26px;
                `}
            }
        }
    }
`;
export default Style;
