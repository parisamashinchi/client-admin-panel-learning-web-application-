import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    .item-list {
        padding-right: 0;
        margin-bottom: 0;
        li {
            text-align: center;
            color: ${palette.lightGreyFiftyThird};
            font-size: 1.7rem;
            &:not(:last-child) {
                margin-bottom: 11px;
            }
            &:first-child {
                font-weight: bold;
                font-size: 1.9rem;
            }
        }
    }
`;
export default Style;
