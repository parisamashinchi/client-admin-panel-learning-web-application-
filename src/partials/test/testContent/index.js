import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import {Col, Row, Progress, Radio, Button, Modal} from 'antd';
import IntlMessages from 'utils/intlMessages';
import PersianNumber from 'utils/getters/PersianNumber';
import map from "lodash/map";
import { postRequest } from 'utils/api';
import * as constants from "partials/test/constants";
import isEmpty from "lodash/isEmpty";
import Countdown from "react-countdown-now";

class TestContent extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value: 0,
            time: this.props.exam.data.data.allow_time
        }
    }
     render(){
        const {can_answer, page, question, reading, percentage, ask_another_level, current_page, allow_time} =this.props.exam.data.data;

        const radioStyle = {
            display: 'block',
            height: '60px',
            lineHeight: '45px',
            width: '500px',
        };

        const onChange = (question_id,e) => {
            (async () => {
                try {
                   const answer = await postRequest(`${constants.ANSWER_URL}/${question_id}/option/${e.target.value}`, {mobile_number: this.props.mobile});
                    if(answer.data.end_time){
                        this.props.getState(this.props.mobile);
                    }
                } catch (e) {
                    console.log(e)
                }
            })();
            this.setState({
                ['value' + question_id]: e.target.value,
            });
        }
        const nextStep = ()=> {
            this.props.getState(this.props.mobile);
            window.scrollTo(0, 0);;
        }

         const renderer = ({ hours, minutes, seconds, completed }) => {
            return <span>{hours}:{minutes}:{seconds}</span>
         };

        return (
            <Style>
                <ResponsiveBox>
                    <ResponsivePadding>
                        {can_answer && page !== null
                            ? <div>
                                <Row>
                                    <h2><IntlMessages id="test.header"/></h2>
                                    <p className="text"><IntlMessages id="test.text"/></p>
                                    <Col xl={8} xs={24}>

                                    </Col>
                                    <Col xl={16} md={24} xs={24}>
                                        <IntlMessages id="test.question.page"/>
                                        <PersianNumber>{page}</PersianNumber>
                                        از
                                        <PersianNumber>{current_page}</PersianNumber>
                                        <Progress percent={percentage}/>
                                    </Col>
                                </Row>
                                { !isEmpty(reading) &&
                                    <Col xl={15} xs={24} className="reading">
                                        <h2>{reading.title}</h2>
                                        <p>{reading.content}</p>
                                    </Col>
                                }
                                { map(question, (item, index) => {
                                        return <Col xl={18} xs={24}>
                                            {isEmpty(reading) &&
                                                <p className="question">
                                                    <span className="number-icon">
                                                        {index + 1 + ((page-1) * 5)}
                                                    </span>
                                                    {item.content}
                                                </p>
                                            }

                                            <Radio.Group
                                                onChange={(e) => onChange(item.id, e)}
                                                value={this.state['value' + item.id]}
                                                className={!isEmpty(reading) && "reading-option"}
                                            >
                                                {!isEmpty(reading) &&
                                                    <span className="number-reading">
                                                        {index + 1 + ((page-1) * 5)}
                                                    </span>
                                                }
                                                {map(item.options, (option, index) => {
                                                return <Radio
                                                        style={radioStyle}
                                                        value={option.id}
                                                        // disabled={!this.state.exam.can_start  &&  !this.state.exam.is_running && 'disabled'}
                                                    >
                                                        {option.content}
                                                    </Radio>
                                                    })}
                                            </Radio.Group>
                                       </Col>
                                    })
                                }
                        </div>
                            :''
                        }
                        <Col span={24}>
                            <Button onClick={nextStep}>
                                <IntlMessages id="test.question.next"/>
                            </Button>
                        </Col>
                    </ResponsivePadding>
                </ResponsiveBox>
            </Style>

        );
    }
};
export default TestContent;

