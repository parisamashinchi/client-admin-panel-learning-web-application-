import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import { Input as AntInput } from 'antd';

const Style = styled(AntInput.TextArea)`
    border: 1px solid ${palette.lightGreyTwentyFourth};
    background: ${palette.whiteSecond};
    direction: ltr;
    text-align: right;
    &:hover {
        border-color: ${palette.black} !important;
    }
    &:focus {
        border-color: ${palette.lightGreyTwentyFourth};
    }
`;
export default Style;
