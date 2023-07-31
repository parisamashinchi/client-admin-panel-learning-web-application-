import styled from 'styled-components';

const Style = styled.div`
    .contact-inputs {
        margin-top: 75px;
        .ant-form {
            .ant-form-item-control {
                text-align: left;
                .ant-form-item-children{
                    .contact-form-textarea{
                        padding: 12px 11px;
                        &::placeholder{
                        font-size: 1.1rem;
                        }
                    }
                }
                .ant-form-explain {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    text-align: right;
                }
            }
        }
    }
`;
export default Style;
