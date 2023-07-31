import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import IntlMessages from 'utils/intlMessages';
import { Form } from 'antd';
import Button from 'components/uiElements/button';
import Link from 'next/link';

const Resume = () => {
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="resume">
                        <h1 className="resume-title">
                            <IntlMessages id="aboutUs.resume.title" />
                        </h1>
                        <p className="resume-description">
                            <IntlMessages id="aboutUs.resume.description1" />
                            <br />
                            <IntlMessages id="aboutUs.resume.description2" />
                            <br />
                            <IntlMessages id="aboutUs.resume.description3" />
                        </p>
                        <Form.Item>
                            <Link href="mailto:info@amozal.com">
                                <a>
                                    <Button className="send-resume-btn" size="medium">
                                        <IntlMessages id="aboutUs.resume.sendResumBtn" />
                                    </Button>
                                </a>
                            </Link>
                        </Form.Item>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default Resume;
