import styled from 'styled-components';
import { Slider } from 'antd';
import { palette } from 'theme/injectGlobal';

const Style = styled(Slider)`
    transform: scale(-1, 1);
    .ant-slider-rail {
        height: 2px;
        border-radius: 0px;
        background-color: ${palette.lightGreyPrimary};
    }
    .ant-slider-handle {
        height: 14px;
        width: 4px;
        background: #000000;
        margin-left: -4px;
        border-radius: 0px;
        border-width: 0px;
        cursor: ew-resize;
    }
    .ant-slider-track {
        border-radius: 0px;
    }
`;
export default Style;
