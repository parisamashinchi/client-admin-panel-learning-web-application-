import React, {useEffect, useState} from 'react';
import Style from './style';
import { Card , Col} from 'antd';
import textDots from 'utils/getters/textDots';
import PropTypes from 'prop-types';
import isEmpty from "lodash/isEmpty";

const TeacherCard = ({ data }) => {
    const { name, profile_media,mobile_profile_media, role, bio } = data;
    const { Meta } = Card;
    const [innerWidth, setInnerWidth] = useState(null);
    useEffect(() => {
        setInnerWidth(global.window.innerWidth)
    }, []);
    return (
        <Style>
            <div className="teacher-box-item">
                <Card>
                    <Col xs={24} md={6} lg={6}>
                        {innerWidth < '575'
                        ? <img src={mobile_profile_media} alt={name}/>
                        :  <img src={ profile_media} alt={name}/>
                        }
                    </Col>
                    <Col xs={24} md={18} lg={18}>
                        <Meta title={name} />
                        <h3>
                            {!isEmpty(role) && (textDots(role, 36))}
                        </h3>
                        <p>{textDots(bio, 280)}</p>
                    </Col>
                </Card>
            </div>
        </Style>
    );
};
TeacherCard.propTypes = {
    data: PropTypes.object.isRequired,
};
export default TeacherCard;
