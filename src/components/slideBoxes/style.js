import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
     background: url(${({ thumbnail }) => thumbnail});
           background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  .items {
        width:100%;
        height: calc((100vw - 328px)/3)!important;
         ${media.phone`
            height: 100%!important;
            margin-top: 20px;
         `}
        .ant-col-xs-12 {
            height: 100%
        }
    }
   .card {
   
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        width: 100%;
        height: 47%;
        float: right;
        margin-bottom: 21px;
        border-radius: 10px;
         ${media.xDesktop`
            margin-bottom: 20px;
          `}
         ${media.xxDesktop`
           margin-bottom: 24px;
        `} 
        
        img{
           height: 100%;
           width:100%;
            border-radius: 10px;
        }
        .ant-col-12 {
            height: 100%;
        }
        ${media.phone`
             width: 160px;
            height: 160px;
        `} 
    
    }
    .text {
        text-align: left;
         margin: 60px 50px 0 0;
         h3 {
            color: #1cdcb5;
            margin: 0;
         }
         h5 {
            color: #909090;
            margin: 0;
         }
          ${media.phone`
             margin: 30px 0 0 0;
             h3 {
                font-size: 12px;
             }
          `}  
    }
    .ant-col-4 {
        float: right;
        margin-right:20px;
     }
`;
export default Style;
