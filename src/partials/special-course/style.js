import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';

const Style = styled.div`
    .social-detail-wrapper {
        display: flex;
        padding: 25px 0;
        justify-content: center;
        background: ${palette.whiteGrey};
    }
    .price-card-section {
        width: 390px;
        margin: 0 auto;
    }
    .price-card .card-price .discounted .actual-price .unit {
        margin-right: 5px!important;
    }
    .actual-price .price {
        font-size: 3.5rem!important;
    }
    .price-card .card-price .discounted {
        display: block;
        .discounted-price {
            .price , .unit{
                color: #989898!important;
            }
        }
    }
    .price-card .card-price .discounted .discounted-price{
        display: block;
        &:after {
            background: red;
        } 
    }       
`;
export default Style;
