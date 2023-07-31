import styled from 'styled-components';
import media from 'theme/MediaQuery';

const Style = styled.div`
    ${({path })=>  path ? 'margin-top: 0px;' : 'margin-top: 30px;'}; 
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url(/static/images/path-gray.svg);
    background-position-x: 250%;
    background-position-y: 15%;
    background-repeat: no-repeat;
     ${media.phone`
        background: #ffff;
        padding: 40px 40px 0 40px;
        margin-top: 0;
        .ant-card {
          border-radius: 10px;
          height: 300px;
          font-size: 13px;
          text-align: center;
        }
    `}
     a {
            color: #5BC5C9;
            border-bottom: 1px solid;
                width: fit-content;
     }
      ${media.bigPhone`
        .ant-card {
            height: 230px;
         }
          .ant-card-body {
            padding: 10px;
         }
         .detail-container {
                .description {
                   line-height: 23px;
                   text-align: justify;
                   margin-bottom: 10px;
                   padding: 10px;
                 }  
                 h1 {
                    font-size: 1.3em
                 }
           }
       `}  
     ${media.smallPhone`
        .ant-card {
            height: 270px;
            &:hover {
                transform: scale(1.05);
                height: 260px;
            } 
            .detail-container {
                .description {
                    margin-bottom: 10px;
                    line-height: 23px;
                     text-align: justify;
                 }  
                 h1 {
                    font-size: 1.5em
                 }
             }
        }
        .ant-card-body {
            padding: 5px;
         }
        .swiper-slide{
            height: 270px;
            margin-top: 20px;
        }
    `}
`;
export default Style;
