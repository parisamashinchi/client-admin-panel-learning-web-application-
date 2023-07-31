import React from 'react';
import Style from './style';
import { Col, Row, Icon } from 'antd';
import Link from 'next/link';
import IntlMessages from 'utils/intlMessages';
import basicStyle from 'theme/style';
import PropTypes from 'prop-types';

const HeaderLink = ({ title, linkTitle = 'cardBox.showMore', link, data: cards, noHeader }) => {
    const { rowStyle } = basicStyle;
    return (
        <Style noHeader={noHeader}>
            <Row type="flex" style={rowStyle}>
                <Col span={24}>
                    <div className="box-header">
                        <h6 className="title">
                            <IntlMessages id={title} />
                        </h6>
                        <span className="line" />
                        <Link href={link}>
                            <a className="btn-more">
                                <IntlMessages id={linkTitle} />
                                <Icon type="left" />
                            </a>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Style>
    );
};
HeaderLink.propTypes = {
    title: PropTypes.string.isRequired,
    linkTitle: PropTypes.string,
    link: PropTypes.string,
    noHeader: PropTypes.bool,
};
export default HeaderLink;
