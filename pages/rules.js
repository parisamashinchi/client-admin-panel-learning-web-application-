import React from 'react';
import Style from 'partials/rules/style';
import DefaultLayout from 'layouts/defaultLayout';
import PHelmet from 'components/pHelmet';
import { formatMessage } from 'localization';
import ParallaxHero from 'components/parallaxHero';
import * as constants from 'partials/rules/constants';
import SiteRules from "partials/rules/site-rule";

const Rules = () => {
    return (
        <DefaultLayout>
            <PHelmet title={formatMessage('rules.hero.title')} description={formatMessage('rules.description3')} img='/static/images/rules-hero-bg.jpg' schema={true} />
            <Style>
                <ParallaxHero data={constants.heroData} />
                <SiteRules />
            </Style>
        </DefaultLayout>
    );
};
export default Rules;
