import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .path-item {
        background: ${({ active }) => (active ? `${palette.lightGreen}` : `${palette.white}`)};
        border: 1px solid ${({ active }) => (active ? `${palette.lightGreen}` : `${palette.lightGreyFourtyNinth}`)};
        border-radius: 10px;
        transition: all 0.2s ease;
        overflow: hidden;
        span {
            display: block;
            padding: 32px 0;
            text-align: center;
            transition: all 0.2s ease;
            color: ${({ active }) => (active ? `${palette.white}` : `${palette.lightGreyTertiary}`)};
            font-size: 2.2rem;
            ${media.xDesktop`
                padding: 20px 0;
            `}
            ${media.tablet`
                padding: 16px 0;
                font-size: 2rem;
            `}
            &:hover {
                background: ${({ active }) => (active ? `${palette.lightGreen}` : `${palette.lightGreenSecond}`)};
            }
        }
    }
`;
export default Style;
