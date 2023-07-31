import React from 'react';
import Style from './style';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import PersianNumber from 'utils/getters/PersianNumber';
import IntlMessages from 'utils/intlMessages';
import {formatMessage} from 'localization';
import isEmpty from 'lodash/isEmpty';

const SpecialPackageItem = ({ data, ios, path }) => {
    const { thumbnail_media, header_title, price, teachers, duration } = data;
    const { Meta } = Card;
    return (
        <Style ios={ios}>
            <div className="card-box-item">
                <Card hoverable cover={<img src={thumbnail_media} alt={header_title} />}>
                    {path ?
                        <div>
                            <div className="card-text">
                                <h3 className="card-title">{header_title}</h3>
                                <p className="teacher-name">{!isEmpty(teachers) ? teachers[0].name : ''}</p>
                            </div>
                            <p className="card-duration">
                                <PersianNumber comma={false}>
                                    {formatMessage("cardBox.duration", {duration: duration})}
                                </PersianNumber>
                                <IntlMessages id="cardBox.week" />
                            </p>
                        </div>

                        :
                        <Meta title={header_title}
                            description= {<PersianNumber className="price">{price}</PersianNumber>}
                        />
                    }
                </Card>
                <button className="plus-button">
                    <img src="/static/images/link.svg" alt={header_title} />
                </button>
            </div>
        </Style>
    );
};
SpecialPackageItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default SpecialPackageItem;
