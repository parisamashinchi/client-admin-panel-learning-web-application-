import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
 
    padding: 100px 0;
    .ant-col {
        padding: 40px
    }
    .head {
        text-align: center;
        margin-bottom: 50px;
    }
    h2 {
        color: black;
    }
    .ant-card-cover{
        width: 200px;
        margin: 0 auto;
        position: relative;
        top: -25px;
    }
    .ant-card-bordered {
        border: none;
        box-shadow: 0px 2px 3px -1px #cacaca;
        border-radius: 10px;
    }
    .diff {
        .ant-card-meta-title {
            text-align: center;
            color: black;
            font-weight: bold;
        }
        .ant-card-meta-description {
            background:#F4F4F4;
            padding: 20px;
            border-radius:10px;
        }
        
    }
    
`;
export default Style;
