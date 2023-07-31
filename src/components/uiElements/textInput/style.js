import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import { Input as AntInput } from 'antd';
import media from 'theme/MediaQuery';

const Style = styled(AntInput)`
    color: ${palette.lightGreyThirtyEighth} !important;
    border: 1px solid ${palette.lightGreyTwentyFourth} !important;
    height: auto !important;
    padding: 14px 12px !important;
    background: ${palette.whiteSecond} !important;
    direction: ltr;
    text-align: right;
    &:hover {
        border-color: ${palette.black} !important;
    }
    &::placeholder {
        font-size: 1.1rem;
        font-weight: bold;
        ${media.xDesktop`
            font-size: 1.4rem;
        `}
        ${media.desktop`
            font-size: 1.6rem;
        `}
    }
`;
export default Style;
