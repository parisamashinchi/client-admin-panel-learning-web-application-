import React, { useState } from 'react';
import Style, { Panel } from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import { Collapse } from 'antd';
import map from 'lodash/map';
import FaqItem from './faqItem';
import PropTypes from 'prop-types';

const Faq = ({ data }) => {
    const [current, setCurrent] = useState();
    const renderFarm = () => {
        return map(data, (item, index) => {
            return (
                <Panel active={parseInt(current) === index} header={item.question} showArrow={false}>
                    <FaqItem key={item.id} data={item} />
                </Panel>
            );
        });
    };
    return (
        <Style id="faq">
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="fixed-background" />
                    <div className="faq">
                        <Collapse accordion onChange={setCurrent}>
                            {renderFarm()}
                        </Collapse>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Faq;

Faq.propTypes = {
    data: PropTypes.object.isRequired,
};
