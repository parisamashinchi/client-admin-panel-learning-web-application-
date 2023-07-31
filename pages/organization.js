import React from 'react';
import Style from 'partials/organization/style';
import DefaultLayout from 'layouts/defaultLayout';
import PHelmet from 'components/pHelmet';
import { formatMessage } from 'localization';
import OrganizationBody from 'partials/organization/organizationBody';
import AmoozalIntro from 'partials/organization/amoozalIntro';
import ContactForm from 'partials/organization/contactForm';
import ParallaxHero from 'components/parallaxHero';
import * as constants from 'partials/organization/constants';

const Organization = () => {
    return (
        <DefaultLayout>
            <PHelmet title={constants.heroData.title} description={constants.heroData.description} schema={true} img='/static/images/organization-hero-bg.jpg' />
            <Style>
                <ParallaxHero data={constants.heroData} />
                <OrganizationBody data={constants.organizationItemData} />
                <AmoozalIntro />
                <ContactForm />
            </Style>
        </DefaultLayout>
    );
};
export default Organization;
