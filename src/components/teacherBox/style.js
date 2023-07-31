import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
    margin-top:100px;
    padding: 20px;
    .ant-tabs {
        border-radius: 10px;
    }
    .ant-tabs-nav-container {
        height : auto!important;
    }
    .ant-tabs-tab {
        background: transparent!important;
        border: none!important;
        height: auto!important;
    }
    .ant-tabs-nav {
        top: 50px;
        background: white;
        width: 100%;
        border-radius: 15px;
        img {
            width: 100px;
            height: 100px;
            border-radius: 10px
        }
        .ant-tabs-tab-active {
             img {
                width: 250px;
                height: 200px;
                border: 4px solid #66d9b7;
                top: -50px;
                position: relative;
            }
        }
    }
    .ant-tabs-ink-bar {
        display: none
    }
    .ant-tabs-bar {
        border-bottom: none
    }
    .teacher-box{
        padding: 25px;
        h2 {
            color : #66d9b7
        }
    }
    .ant-tabs-content {
         background: white;
        top: -15px;
        position: relative;
        border-radius: 15px;
    }
    .ant-col-xl-8 {
        float:right
    }
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
