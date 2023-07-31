import React from 'react';
import Style from 'partials/contact/style';
import DefaultLayout from 'layouts/defaultLayout';
import Conditions from 'partials/contact/conditions';
import ContactForm from 'partials/contact/contactForm';
import PHelmet from 'components/pHelmet';
import { formatMessage } from 'localization';
import ParallaxHero from 'components/parallaxHero';
import * as constants from 'partials/contact/constants';

const Contact = () => {
    return (
        <DefaultLayout>
            <PHelmet title={constants.heroData.title} description={formatMessage('contact.contactForm.description')} img='/static/images/contact-us-hero.jpg' schema={true} />
            <Style>
                <ParallaxHero data={constants.heroData} size="medium" />
                <Conditions />
                <ContactForm />
            </Style>
        </DefaultLayout>
    );
};
export default Contact;
