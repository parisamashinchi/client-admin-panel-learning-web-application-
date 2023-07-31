import React, { useState } from 'react';
import Style from 'partials/questions/style';
import DefaultLayout from 'layouts/defaultLayout';
import PHelmet from 'components/pHelmet';
import { formatMessage } from 'localization';
import QuestionPaths from 'partials/questions/questionPaths';
import Faq from 'partials/questions/faq';
import ParallaxHero from 'components/parallaxHero';
import QuestionSearchInput from 'partials/questions/questionSearchInput';
import * as constants from 'partials/questions/constants';
import map from 'lodash/map';

const Questions = () => {
    const [current, setCurrent] = useState(1);
    const questionPathsData = map(constants.faqData, ({ id, titleId }) => ({ id, titleId }));
    const faq = constants.faqData.find(faq => faq.id === current).faq;
    return (
        <DefaultLayout>
            <PHelmet title={formatMessage('questions.meta.title')} description={formatMessage('questions.meta.title')} img='/static/images/questions-hero-bg.jpg' schema={true} />
            <Style>
                <ParallaxHero data={constants.heroData}>{/*<QuestionSearchInput />*/}</ParallaxHero>
                <QuestionPaths data={questionPathsData} setCurrent={setCurrent} current={current} />
                <Faq data={faq} />
            </Style>
        </DefaultLayout>
    );
};
export default Questions;
