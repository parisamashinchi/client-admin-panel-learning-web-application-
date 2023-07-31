import styled from 'styled-components';

const Style = styled.div`
   .head {
        text-align: center;
        margin-bottom: 50px;
        margin-top: 50px
    }
    h2 {
        color: black;
        margin-top:10px;
    }
    .videoBox {
         padding: 20px;
    }
    video {
        border-radius: 10px;
        cursor: pointer;
        // background : linear-gradient( #ffffff,gray),url();
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
       
    }
`;
export default Style;
