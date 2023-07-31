import React from 'react';
import Style from './style';
import { Anchor, Col, Row } from 'antd';
import basicStyle from 'theme/style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import QuestionPathItem from './questionPathItem';
import map from 'lodash/map';
import PropTypes from 'prop-types';

const QuestionPaths = ({ data, setCurrent, current }) => {
    const { rowStyleNoWidth } = basicStyle;
    const { Link } = Anchor;
    const renderFarm = () => {
        return map(data, item => {
            return (
                <Col sm={8} xs={12}>
                    <Anchor affix={false} offsetTop={60}>
                        <Link  href="#faq" title={<QuestionPathItem data={item} key={item.id} setCurrent={setCurrent} current={current} />} />
                    </Anchor>
                </Col>
            );
        });
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="question-paths">
                        <Row
                            type="flex"
                            style={rowStyleNoWidth}
                            gutter={{ lg: 80, md: 50, sm: 20, xs: 34 }}
                            className="gutter-pre-style-lg-80 gutter-pre-style-md-50 gutter-pre-style-sm-20 gutter-pre-style-xs-34"
                        >
                            {renderFarm()}
                        </Row>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default QuestionPaths;

QuestionPaths.propTypes = {
    data: PropTypes.object.isRequired,
    setCurrent: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
};
