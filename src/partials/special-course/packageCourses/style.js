import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    .package-courses {
        padding: 55px 0 65px;
        .title {
            color: ${palette.darkGreyTertiary};
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 55px;
        }
    }
`;
export default Style;
