import React , {PureComponent} from 'react';
 import Style from 'partials/test/style';
import DefaultLayout from 'layouts/defaultLayout';
import {Col, Form, Input, Row, Button, message} from "antd";
import TestContent from 'partials/test/testContent';
import IntlMessages from 'utils/intlMessages';
import PersianNumber from 'utils/getters/PersianNumber';
import * as constants from "partials/test/constants";
import isEmpty from "lodash/isEmpty"
import AskModal from "../src/partials/test/testContent/askModal";
import Recommended from "../src/partials/test/testContent/recommended";
import Countdown from "react-countdown-now";
import qs from 'qs';
import axios from 'axios';

 class Test extends PureComponent {
     constructor(props) {
         super(props);
         this.state = {
             show_question: false,
             visible: false,
             show_recommended: false
         };
     }

     render() {
         const { getFieldDecorator } = this.props.form;
         const {show_question, visible, exam, mobile_number, show_recommended} = this.state;
         const getState = (number) =>{
              axios.post(`${process.env.REACT_APP_AMOOZAL_API_URL}${constants.STATE_URL}`,  qs.stringify({mobile_number:number}))
                  .then(res => {axios.post(`${process.env.REACT_APP_AMOOZAL_API_URL}${constants.ACKNOWLEDGE_URL}`,
                      qs.stringify( { page: res.data.data.page, mobile_number: number}))
                      if(res.data.data.ask_another_level && res.data.data.page === null) {
                          this.setState({
                              visible: true
                          })
                      }else if(!res.data.data.ask_another_level && res.data.data.page === null) {
                          this.setState({
                              exam: res,
                              show_recommended: true,
                              visible: false
                          })
                      }else if(!res.data.data.ask_another_level && res.data.data.page !== null) {
                          this.setState({
                              exam: res,
                              show_question: true,
                              visible: false
                          })
                      }
                  })
         }

         const handleSubmit = e => {
             e.preventDefault();
             this.props.form.validateFields((err, values) => {
                 if (!err) {
                         axios.post(`${process.env.REACT_APP_AMOOZAL_API_URL}${constants.QUIZ_URL}`,  qs.stringify(values)  )
                         .then(res => {
                             this.setState({
                                 mobile_number: res.data.data.token,
                             })
                             getState(res.data.data.token);
                         })
                 }
             });
         };
         const renderer = ({ hours, minutes, seconds, completed }) => {
             return <span>{hours}:{minutes}:{seconds}</span>
         };
         return (
             <DefaultLayout>
                 <Style>
                     <img src="/static/images/exam.jpg" />
                         {!show_question && !visible && !show_recommended
                         ?
                             <Row className="exam">
                                 <div >
                                 <Col xl={12} md={12} xs={24}>
                                     <h2><IntlMessages id="test.header"/></h2>
                                     <p>
                                         <IntlMessages id="test.question.text"/>
                                     </p>
                                 </Col>
                                 <Col xl={12} md={12} xs={24} className="left-section">
                                     <span className="first"><IntlMessages id="test.question.first"/></span>
                                     <span className="second" ><IntlMessages id="test.question.second"/></span>
                                 <p>
                                     <span><IntlMessages id="test.time"/></span>
                                     <span className="time">
                                            <PersianNumber>  00:30:00</PersianNumber>
                                     </span>
                                     <span><IntlMessages id="test.min"/></span>
                                 </p>
                                 <IntlMessages id="test.question.number"/>
                                 <Form onSubmit={handleSubmit}>
                                     <Row gutter={8}>
                                         <Col span={24}>
                                             <Form.Item>
                                                 {getFieldDecorator('mobile_number', {
                                                     rules: [{ required: true, message: 'شماره موبایل خود را وارد کنید', whitespace: true }],
                                                 })(<Input  placeholder=" مثال: ۰۹۱۲۱۲۳۴۵۶۷۸۹" />)}
                                             </Form.Item>
                                         </Col>
                                         <Col xs={24} xl={5}>
                                             <Form.Item>
                                                 <Button type="primary" htmlType="submit" className="form-btn">
                                                     شروع آزمون
                                                 </Button>
                                             </Form.Item>
                                         </Col>
                                     </Row>
                                 </Form>
                                 </Col>
                                 </div>
                             </Row>
                          : show_question && !visible && !show_recommended
                             ? <div>
                                  {!isEmpty(exam)&&
                                      <p className="counter">
                                          <IntlMessages id="test.time"/>
                                          <span className="time">
                                              <Countdown date={Date.now() + exam.data.data.allow_time * 1000} renderer={renderer} />
                                          </span>
                                      </p>
                                  }
                                  <TestContent
                                      exam={!isEmpty(exam) && exam}
                                      mobile={mobile_number}
                                      getState={getState}
                                  />
                             </div>
                             :   visible && !show_recommended
                                     ? <Row>
                                         <AskModal
                                             getState={getState}
                                             mobile={mobile_number}
                                         />
                                    </Row>
                                     : show_recommended && !visible
                                        ?  <Row className="exam">
                                             <Recommended
                                             exam={!isEmpty(exam) && exam}
                                         />
                                         </Row>
                               : ''
                         }
                 </Style>

             </DefaultLayout>
         );
     };
 }

export default Form.create('input_number')(Test);
