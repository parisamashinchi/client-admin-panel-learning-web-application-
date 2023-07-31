import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .ant-col-xl-8, .ant-col-xl-16{
        float: right;
    }
    .ant-progress {
        direction: ltr;
        margin-bottom: 50px;
        .ant-progress-bg {
           background-color: #68D9A0;
        }
    }
    .text{
        margin-bottom:0
    }
   .reading {
      text-align: left;
      color: black;
      h2 {
         color: black;
      }
      p {
        padding: 0
      }
   }
   .question {
      width: 100%;
      text-align: left;
      font-weight: bold;
      line-height: 24px;
      direction: ltr;
      font: normal normal bold 17px/39px Samim;
      color: black;
      display: inline-block;
      padding-left: 0!important;
      .number-icon {
        color: white;
        text-align: center;
        float: left;
        background: #535353;
        width: 25px;
        border-radius: 50%;
        height: 25px;
        line-height: 27px;
        margin-right: 10px;
        top: 7px;
        position: relative;
        font-size: 14px;
      }  
   }
   .ant-radio-group{
       float: left;
        width: 100%;
        display: block;
       .ant-radio-wrapper {
           float: left;
            direction: ltr;
            border: 1px solid gray;
            width: 30%;
            border-radius: 8px;
            height: 40px;
            padding: 7px 20px;
            margin-bottom: 20px;
            width: 100%;
            background: #FCFCFC 0% 0% no-repeat padding-box;
            font: normal normal normal 15px/39px Samim;
            &:hover{
                border: 1px solid #6EB087;
            }
            ${media.phone`
                width: 100%!important;
            `}
          .ant-radio {
            margin-right: 10px;
            line-height: 24px;
            ${media.phone`
              margin-right: 0
            `}
          }
       }
       .ant-radio-wrapper-checked {
          border: 1px solid #6EB087; 
          color: #6EB087;
          .ant-radio-inner::after {
                background-color: #6EB087;
           }
          .ant-radio-inner {
             border-color: #6EB087;
          }
        }
   }
   .ant-btn {
        float: left;
        background: #59B283;
        color: white;
        height: 40px;
        width: 150px;
        margin: 70px 0
    }
    .number-reading {
         top: 16px;
         float: left;
         border: 1px solid #707070;
         width: 20px;
         height: 20px;
         text-align: center;
         border-radius: 5px;
         position: relative;
         margin-right: 20px;
         ${media.phone`
             margin-right: 10px;
         `}
     }
    .reading-option {
        .ant-radio-wrapper-checked {
            color: #59b283;
        }
         .number-reading {
           ${media.phone`
              top: 12px;
              margin-right: 4px;
           `}
         }
        .ant-radio-wrapper {
            display: inline-block!important;
            width: 180px!important;
            border: none;
            margin: 0;
            background: none;
             ${media.phone`
               padding: 0;
               width: 95px!important;
               font-size: 12px;
            `}
           .ant-radio-checked .ant-radio-inner {
                border-color: #59b283;
            }
           .ant-radio-inner::after {
                background-color: #59b283;
                top: 4px;
                left: 4px;
            }
        }
     }
`;
export default Style;
