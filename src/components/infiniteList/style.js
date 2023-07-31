import styled from 'styled-components';

const Style = styled.div`
    .empty-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg {
            margin-top: 30px;
                   margin-bottom: 10px;
        }
    }
    .ant-list {
        .ant-spin-nested-loading {
            .ant-spin-container {
                .ant-list-empty-text {
                    font-size: 1.6rem;
                }
            }
        }
    }
    .ant-list-item {
        border-bottom: none;
        passing:0;
    }

`;
export default Style;
