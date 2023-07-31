import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    &:first-child {
        .filter-group-title {
            margin-top: 0px;
        }
    }
    .filter-group-title {
        font-size: 1.8rem;
        font-weight: bold;
        color: ${palette.darkGreyTertiary};
        text-align: right;
        margin: 0;
        margin-top: 28px;
        margin-right: 5px;
    }
    .filter-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        ${media.desktop`
            margin-top: 10px;
        `}
        .filter-item {
            margin-top: 7px;
            cursor: pointer;
        }
    }
    .anticon{
        color: red;
        margin-right: 10px;
    }
    
`;
export default Style;
