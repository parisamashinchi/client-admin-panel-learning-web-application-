import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PropTypes from 'prop-types';
import { Col } from 'antd'
import HeaderLink from 'components/headerLink';
import map from 'lodash/map';

const Blog = ({ data}) => {
    return (
        <ResponsiveBox>
                <ResponsivePadding>
                    <HeaderLink title={"آخرین مطالب وبلاگ"} link={"https://amoozal.com/mag"}/>
                    {map(data, item =>
                        <Style media_url={item.media_url} mobile_image={item.mobile_media_url} >
                            <a href={item.link_url}>
                                <Col span={8}>
                                    <div className="blog-card">
                                        <h1>{item.descriptions}</h1>
                                        <div className="tag" style={{color: item.text_color, background: item.color}}>
                                            {item.title}
                                        </div>
                                    </div>
                                </Col>
                            </a>
                        </Style>
                        )}
                </ResponsivePadding>
            </ResponsiveBox>
    );
};
 export default Blog;

Blog.propTypes = {
    data: PropTypes.object.isRequired,
};
