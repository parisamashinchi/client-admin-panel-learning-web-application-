import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    .path-back {
        // background-image: url('/static/images/Path 1138.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0 8%;
    }
    #register {
       position: fixed;
        width: 250px;
        background: #ffe51e;
        height: 100px;
        border-radius: 0 20px 20px 0;
        left: 0;
        padding: 20px;
        top: 130px;
        z-index: 999;
        ${media.phone`
          display: none
        `}
        p {
            margin-bottom:0px
        }
        .course-register-button {
        background: white!important;
        border: none;
        width: 100%;
        height: 30px;
        border-radius: 20px;
        span {
           font-size: 1.2rem !important;
        }
    }
    .course-title-button {
        background: transparent!important;
        border: 1px solid gray;
        width: 100%;
        height: 30px;
        border-radius: 20px;
        span {
           font-size: 1.2rem !important;
        }
        }
        .ant-anchor-wrapper {
            background-color: transparent;
        }
        .ant-anchor-ink {
            position: relative;
        }
    }
     .hide {
            opacity:0;
            left:-100%;
        }
      .show {
          opacity:1;
           left:0;
      }
    
`;
export default Style;
