import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import { Col, Row } from 'antd';
import ConditionItem from './conditionItem';
import map from 'lodash/map';
import { conditionItemData } from './constants';

const Conditions = () => {
    const renderFarm = () => {
        return map(conditionItemData, (conditionItem, index) => {
            return (
                <Col sm={8} xs={24}>
                    <ConditionItem key={index} data={conditionItem} />
                </Col>
            );
        });
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="conditions">
                        <Row gutter={{ xxl: 50, sm: 30 }} className="gutter-pre-style-xxl-50 gutter-pre-style-sm-30">
                            {renderFarm()}
                        </Row>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Conditions;
