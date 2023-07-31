import styled from 'styled-components';
import { Pagination } from 'antd';
import { palette } from 'theme/injectGlobal';

const Style = styled(Pagination)`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: normal !important;
    margin: 40px 0;
    i {
        font-style: normal;
    }
    .ant-pagination-prev {
        position: relative;
        border: 1px solid lightgray;
        height: 40px;
        width: 40px;
        margin-left: 20px;
        line-height: 38px;
         padding: 0 12px;
        a {
            display: block;
        }
    }
   
    .ant-pagination-next {
        position: relative;
        border: 1px solid lightgray;
        height: 40px;
        width: 40px;
        margin-right: 20px;
        line-height: 38px;
         padding: 0 12px;
        a {
            display: block;
        }
    }
    .ant-pagination-item {
        border: 1px solid lightGray;
        border-right: 0;
        border-radius: 0px;
        line-height: 36px;
        margin: 0;
        padding: 0;
        width: 40px;
        height: 40px;
        font-family: inherit;
        background: transparent;
       
        a {
            display: block;
            color: ${palette.lightGreyTertiary};
        }
        &:hover {
            border: 2px solid ${palette.lightGreyTertiary};
            a {
                color: ${palette.grey};
            }
        } 
    }
    .ant-pagination-item-1 {
           border-right: 1px solid lightGray; 
     }
     .ant-pagination-item:last-child {
           border-right: 1px solid lightGray; 
     }
    .ant-pagination-item-active {
            font-weight: bold;
            cursor: not-allowed;
             
        a {
            pointer-events: none;
            cursor: not-allowed;
             color: ${palette.grey};
        }
    }
    .ant-pagination-disabled {
        a {
            pointer-events: none;
            cursor: not-allowed;
        }
    }
`;
export default Style;
