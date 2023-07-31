import styled from 'styled-components';

const Style = ComponentName => styled(ComponentName)`
    &.ant-anchor-wrapper {
        margin-left: 0;
        padding-left: 0;
        overflow: unset;
        background-color: unset;
        .ant-anchor {
            padding-left: 0;
            .ant-anchor-ink {
                display: none;
            }
            .ant-anchor-link {
                padding: 0;
            }
        }
    }
`;
export default Style;
