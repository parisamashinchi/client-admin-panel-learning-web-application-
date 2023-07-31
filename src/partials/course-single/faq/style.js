import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    padding: 100px 0 ;
    ${media.phone`
       padding:0;
    `}
    .ant-col {
        padding: 20px;
        ${media.phone`
            padding:0;
        `}
    }
    .ant-col-xs-24 {
        float: right;
    }
    .ant-col:first {
        padding-right: 30px;       
    }
    .ant-card-bordered {
      border-radius: 10px;
      border: none;
      box-shadow: 1px 5px 3px -2px #89e0c7;
      img {
           width: 200px; 
           margin: 0 auto    
        }
    }
    .ant-card-meta {
        margin: 15px 0;
    }
    .ant-collapse {
        background-color: transparent;
        border-radius: 12px;
        border: none;
        width: 100%;
        display: inline-grid;
        padding: 20px;
         ${media.phone`
           padding: 20px 0;
        `}
    }
   .ant-collapse-arrow svg {
      color: #6dc4af;
    }
    .ant-collapse-arrow {
        right: 20px;
    }
    .ant-collapse-header {
        padding: 12px 40px!important;
    }
    .ant-collapse-content-box {
        margin: 10px 20px;
        background: #f5f5f5;
        padding: 20px;
        border-radius: 12px;
        color: #8b8b8b
    }
    .ant-collapse-content {
        border: none;
        border-radius:10px
    }
    .anticon {
        text-align: right!important; 
    }
     .ant-collapse-item {
        border-bottom: none;
        box-shadow: 0px 2px 3px -1px grey;
        border-radius: 10px!important;
        background: white;
    }
    
`;
export default Style;
