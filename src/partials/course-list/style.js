import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    padding-bottom: 30px;
    background: #f8f8f8;
     ${media.phone`
        margin-top: 100px;
    `}
    .banner {
        border-radius: 30px;
        height:200px;
        width:100%;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .banner-box {
        margin-top: 40px;
        margin-bottom: 30px;
        height: 200px;
        width: 100%;
        img {
            height:100%;
            border-radius: 30px;
        }
    }
    .search-and-filter {
        margin-top: 60px;
        .page-title-wrapper {
            height: 100%;
            display: flex;
            align-items: center;
            .page-title {
                font-size: 3.2rem;
                font-weight: bold;
                margin: 0;
                color: ${palette.darkGreyTertiary};
                white-space: nowrap;
            }
            .mobile-page-title {
                display: none;
            }
             .filter {
                display: none;
                margin: 0;
                font-size: 10px;
             }
        }
    }
    ${media.antDesktop`
        .search-and-filter{
            .page-title-wrapper{
                .page-title{
                    display: none;
                }
                .mobile-page-title{
                    display: block;
                    width: 44px;
                    cursor: pointer;
                    svg{
                        fill: ${palette.lightGreyThirteenth};
                    }
                }
                .filter {
                    display: block;
                }
            }
        }
    `}
    ${media.phone`
        .search-and-filter{
            background-color: #FBE64F;
            position:fixed;
            bottom:0;
            width:100%;
            z-index:999;
            padding: 20px;
            .filter {
                font-size: 17px;
                font-weight:bold;
                color: black;
                margin-right: 20px;
                border-left: 1px solid gray;
                padding: 0 30px;
             }
            img {
                display: inline-block;
            }  
            .list-pathname {
                font-size:12px;
            }  
        }
        .top-btn  {
            display: none
        }
        .banner {
            display: none;
        }
    `}
    .ant-modal-centered .ant-modal{
         color:red
    }
    .top-btn button {
        border-radius: 7px;
        margin-right: 20px;
        border-color: black;
    }
    .switch {
        background-color: #FFFCE3;
        border:2px solid #FFE51F;
        border-radius: 20px;
        padding:10px 0 10px 20px;
        display: inline-block;
        margin-right:20px;
        color: black;
        .ant-switch-checked {
            background-color:#FFE51F;
            border-color:#FFE51F;
        }
        .ant-switch {
            border-radius: 15px;
            margin-left: 20px;
        }
    
    }
    .list-title {
        font-weight: bold;
        font-size:16px;
        margin-right: 20px;
        color: black;
    }
    .list-pathname {
        margin-right:20px
    }
`;
export default Style;
