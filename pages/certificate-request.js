import React from 'react';
import Style from 'partials/certificate-request/style';
import DefaultLayout from 'layouts/defaultLayout';
import PHelmet from 'components/pHelmet';
import {formatMessage} from 'localization';
import CertificateForm from 'partials/certificate-request/certificateForm';
import ParallaxHero from "components/parallaxHero";
import * as constants from 'partials/certificate-request/constants';

const CertificateRequest = () => {
    return (
        <DefaultLayout>
            <PHelmet title={formatMessage('certificateRequest.meta.title')} description="" schema={true} />
            <Style>
                <ParallaxHero data={constants.heroData} size="small"/>
                <CertificateForm />
            </Style>
        </DefaultLayout>
    );
};
export default CertificateRequest;
