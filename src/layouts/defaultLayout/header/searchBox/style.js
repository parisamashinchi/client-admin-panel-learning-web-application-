import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
.search-input-form {
    width: 311px;
    height: 38px;
    position: relative;
    border: 1px solid ${palette.lightGrey};
    border-radius: 10px;
    .submit-btn {
        width: 38px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
            display: inline-block;
            font-style: normal;
        }
          ${media.phone`
            right:0;
          `}
    }
    .search-input {
        width: 100%;
        height: 100%;
        padding: 5px 15px 5px 40px;
        border: none !important;
        line-height: 100%;
        &::placeholder {
            ${media.phone`
                font-size: 12px!important;
                color:#707070;
            `}
            ${media.desktop`
                font-size: 1.7rem;
            `}
        }
         ${media.phone`
            padding: 5px 40px 5px 15px ;
         `}
    }
    }
    .ant-form {
        height: 100%;
    }
    .ant-form-item {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .ant-form-item-control-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .ant-form-item-control {
        line-height: 100%;
        width: 100%;
        .ant-form-item-children {
            a {
                i {
                    display: flex;
                     ${media.phone` 
                        float: left;
                        width:25px
                    `};
                }
            }
        }
    }
    ${media.xxDesktop`  
    .search-input-form {
        width: 259.16px;
        height: 31.66px;
        
        }
    `};
    ${media.xDesktop` 
    .search-input-form {
        width: 230px;
        }
    `};
     ${media.phone` 
        .search-input-form {
           background:#EFEFEF;
           padding:0;
           width:220px;
           top: 0px;
           border-radius: 0;
           z-index: -1;
           height:40px;
        }
    `}
   
    
`;
export default Style;
