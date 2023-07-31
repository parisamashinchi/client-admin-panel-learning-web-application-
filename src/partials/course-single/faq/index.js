import React from 'react';
import Style from './style';
import { Card, Col, Collapse} from 'antd';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import map from 'lodash/map';

const Faqs = (data) => {
const { Panel } = Collapse;
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                 <Col xl={12} xs={24}>
                  { map(data.data.faqs,( item, index) => (
                    index % 2 === 0 &&
                    <Collapse collapsible="header" defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => isActive ? <MinusOutlined/>  : <PlusOutlined />}
                    >
                      <Panel header={item.question} key={index}>
                        <p>{item.answer}</p>
                      </Panel>
                    </Collapse>
                      ))
                    }
                </Col>
                <Col xl={12} xs={24}>
                   { map(data.data.faqs,( item, index) => (
                      index % 2 !== 0 &&
                    <Collapse collapsible="header"
                       expandIcon={({ isActive }) => isActive ? <MinusOutlined/>  : <PlusOutlined />}
                      >
                       <Panel header={item.question} key={index}>
                            <p>{item.answer}</p>
                       </Panel>
                       </Collapse>
                    ))
                    }
                </Col>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Faqs;
