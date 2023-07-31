import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    .ant-col {
        padding: 30px;       
    }
    .ant-card-bordered {
      height:400px;
      border-radius: 10px;
      border: none;
      box-shadow: 1px 5px 3px -2px #89e0c7;
     .ant-card-cover {
        margin: 0 auto;
        top: -70px;
        position: relative ;
          width: 250px;
     }
     .ant-card-body {
        position: relative;
        top:-100px;
     }
    }
    .ant-card-meta {
        margin: 15px 0;
    }
  
   
    
    
`;
export default Style;
