import React from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import TeacherCard from './teacherCard';
import Swiper from 'components/swiper';
import PropTypes from 'prop-types';
import { Tabs , Divider, Col, Row, Card} from 'antd';
import SampleCards from 'components/samplesCards';
import CommentCards from 'components/commentCards';
import isEmpty from 'lodash/isEmpty';
import textDots from 'utils/getters/textDots';
import map from 'lodash/map';

const { TabPane } = Tabs;
const { Meta } = Card;
const TeacherBox = ({ data }) => {
     const { name, profile_media,mobile_profile_media, role, bio } = data.teachers;
    return (
        <Style>
            <ResponsiveBox>
            { map(data.question_boxes, (item , index)=> (
                index === 3 && (
                     <Col xs={24} xl={8}>
                         <Card
                            hoverable
                             cover={<img src={ !isEmpty(global.window) && global.window.innerWidth < 575 ? item.mobile_media_url : item.media_url} />}
                           >
                           <Meta title={item.title}
                            description= {item.descriptions}
                           />
                         </Card>
                      </Col>
                    )))
               }
                <Col xs={24} xl={16}>
                   <Tabs defaultActiveKey="1" type="card">
                           { map(data.teachers, item => {
                                return (  <TabPane tab={ <img src={item.profile_media} />} key={item.id} >
                                             <div className="teacher-box">
                                                 <h3>
                                                   {!isEmpty(item.role) && (textDots(item.role, 36))}
                                                 </h3>
                                                 <h2>{item.name}</h2>
                                                 <p>{textDots(item.bio, 280)}</p>
                                                </div>
                                         </TabPane>
                                     )
                                }
                          )}
                   </Tabs>
               </Col>
            </ResponsiveBox>
        </Style>
    );
};
TeacherBox.propTypes = {
    data: PropTypes.bool.isRequired,
};
export default TeacherBox;
