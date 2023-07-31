import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    width: 100%;
    .factor-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${palette.lightGreyLowOpacity};
        padding: 50px 0;
        .btn-back {
            margin-top: 50px;
        }
    }
`;
export default Style;
