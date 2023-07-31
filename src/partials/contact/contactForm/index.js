import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import IntlMessages from 'utils/intlMessages';
import ContactInputs from './contactInputs';

const ContactForm = () => {
    return (
        <Style>
            <div className="fixed-background" />
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="contact-form">
                        <div className="contact-form-container">
                            <div className="contact-form-header">
                                <div className="support">
                                    <IntlMessages id="contact.contactForm.support" />
                                </div>
                                <div className="contact-info">
                                    <div className="contact-info-item">
                                        <span>
                                            <IntlMessages id="contact.contactForm.phone.title" />
                                        </span>
                                        <a href="tel:+22630620-021">
                                            <span className="phone">
                                                <IntlMessages id="contact.contactForm.phone1" />
                                            </span>
                                            <IntlMessages id="contact.contactForm.phone2" />
                                        </a>
                                    </div>
                                    <div className="contact-info-item">
                                        <span>
                                            <IntlMessages id="contact.contactForm.email.title" />
                                        </span>
                                        <span>&nbsp;</span>
                                        <a href="mailto:support@amoozal.com">
                                            <IntlMessages id="contact.contactForm.email" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="contact-separator" />
                            <div className="contact-form-description">
                                <p>
                                    <IntlMessages id="contact.contactForm.description" />
                                </p>
                            </div>
                            <div className="contact-inputs-container">
                                <ContactInputs />
                            </div>
                        </div>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default ContactForm;
