import React ,{ useState } from "react";
import {Button, Modal} from 'antd';
import IntlMessages from 'utils/intlMessages';
import Recommended from "./recommended";
import { postRequest } from 'utils/api';
import * as constants from "partials/test/constants";


const AskModal = (props) => {
    const [modalVisible, setModalVisible] = useState(true);
        const handleOk = (status) => {
            (async () => {
                const body = {
                    its_hard: status,
                    mobile_number: props.mobile
                }
                try {
                     await postRequest(`${constants.ASK_LEVEL_URL}`,body);
                     props.getState(props.mobile);
                     setModalVisible(false);
                } catch (e) {
                    console.log(e)
                }
            })();
        };


        return (
            <div>
                <Modal
                    visible={modalVisible}
                    onOk={handleOk}
                    footer={[
                        <Button className="yes-btn" onClick={() =>handleOk(true)}>
                          بله
                        </Button>,
                        <Button className="no-btn" onClick={() =>handleOk(false)}>
                            خیر
                        </Button>,
                    ]}
                    className="exam-modal"
                >
                    <p><IntlMessages id="test.question.end"/></p>
                    <p><IntlMessages id="test.question.level"/></p>

                </Modal>

            </div>
        );
    };

export default AskModal;
