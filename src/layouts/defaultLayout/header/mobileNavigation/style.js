import styled from 'styled-components';
import media from 'theme/MediaQuery';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    display: none;
    flex-direction: column;
    width: 100%;
    transition: all 0.3s ease-in-out;
    // background-color: ${palette.white};
    ${media.desktop`
        display: flex;
        //background: transparent;
        &.black-background{
             // background: ${palette.black};
        }
    `}
    .mobile-nav {
        display: none;
        justify-content: space-between;
        height: 155px;
        line-height: 80px;
        background: white;
        padding: 0 20px 0 0;
        img {
            fill: white;
        }
        ${media.desktop`
            width: 100%;
            display: flex;
            align-items: center;
        `}
        .mobile-tool {
            display: flex;
            align-items: center;
            background-color: #00DDB1;
            top: 60px;
            position: relative;
            padding: 17px 25px;
            border-radius: 0 20px 20px 0;
            z-index:1;
            
             ${media.desktop`
                margin-right: 10px;
             `}
            .mobile-tool-cart {
                font-size: 26px;
                position: relative;
                margin-top: 2px;
            }
        }
        .mobile-logo {
            margin-top:40px;
        }
       
        .logo{
            margin-top:47px
        }
    }
     .ant-col-12 {
       float:right;
     }
      .mobile-nav-extend {
         .login{
                background: #FFE51F;
                height: 55px;
                border-radius: 0 20px 20px 0;
                color: #606060;
                font-weight: bold;
                z-index: 0;
                padding: 12px 20px;
                top:-15px;
                position:relative
                
             }
            .ant-input{
                background-color: #EFEFEF;
            }
        }
    
`;
export default Style;
