import styled from 'styled-components';

const Style = styled.div`
    .gray-back {
        background-color: #f2f2f2;
    }
    .ant-tabs {
        margin: 0 15px;
    }
    .ant-tabs-tab {
        margin:0;
        padding: 12px 7px;
    }
   .ant-tabs-tab-active {
        border: 2px solid #04ddb0;
        border-radius: 7px;
    }
    .ant-tabs-nav-wrap {
        margin-bottom: 0;
    }
    .ant-tabs-bar {
        border-bottom: none
    }
    .ant-tabs-ink-bar {
        background-color: transparent;
    }
    .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated, .ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated {
        display: block;
    }
`;
export default Style;



