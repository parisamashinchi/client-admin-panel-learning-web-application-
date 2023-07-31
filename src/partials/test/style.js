import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .responsive-padding-wrapper {
        padding: 40px 27px!important;
    }
    .exam {
        width: 1000px;
        margin: 50px auto;
        text-align: justify;
        ${media.phone`
           width: 100%;
           padding: 35px; 
           margin:0
        `}
         ${media.tablet`
             width: 100%;
             padding: 35px; 
         `}
    }
    .counter {
        top: 255px;
        position: absolute;
        right: 115px;
          ${media.phone`
            top: 215px!important;
          `}
            ${media.tablet`
             top: 145px; 
         `}
         .time {
            text-align: right;
            font: normal normal bold 17px/39px IRANYekan;
            letter-spacing: 1.12px;
            color: #4EA0A0;
        }
    }
    img{
        height: 40px!important;
        width: 100%;
        object-fit: cover;
           ${media.phone`
               top: 60px;
               position: relative;
               margin-bottom: 40px;
            `}
    }

    .ant-col-xs-24 , .ant-col-md-12 , .ant-col-xl-12 {
        float: right;
        p {
           padding-left: 40px;
           ${media.phone`
               padding-left: 0!important;
          `}
          ${media.tablet`
              padding-left: 40px; 
         `}
        }
    }
    .ant-col-xl-18, .ant-col-xl-15 {
       float: left; 
    }
    .left-section {
        border-right: 1px solid #D3D3D3;
        padding: 30px;
        font-weight: bold;
        color: #484848;
         ${media.phone`
           border-right: none
        `}
        .first {
             border-left: 1px solid #D3D3D3;
             padding-left: 20px;
             ${media.phone`
                display: block;
                border-left: none;
                padding-left: 0;
             `}
        }
        .second {
             padding-right: 20px;
               ${media.phone`
                 padding-right: 0
               `}
        }
        .time {
            color: #4EA0A0;
            font-size: 20px;
        }
    }
    .ant-form-item-control {
        text-align: center;
    }
    .form-btn {
       background: #59B283;
       border-color: #59B283;
       top: 160px;
       right: -530px;
        width: 150px;
        height: 40px;
         ${media.phone`
           top: 0;
           right: 0!important;
          
        `}
         ${media.tablet`
            right: -68px;
            top: 0;
         `}
        
    }
    .card-wrapper {
        height: auto!important
    }
    .card-thumb img{
         height: auto!important
    }
    .ant-input {
        color: black;
    }
   
 `;
export default Style;
