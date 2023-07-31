import React , {PureComponent} from 'react';
import Style from 'partials/certificate/style';
import PHelmet from 'components/pHelmet';
import {formatMessage} from 'localization';
import DefaultLayout from 'layouts/defaultLayout';
import CertificateContent from 'partials/certificate/certificateContent';
import ParallaxHero from "components/parallaxHero";
import * as constants from 'partials/certificate/constants';
import { getPageParams } from 'utils/nextUtils';
import { postRequest } from 'utils/api';
import * as routes from "../routes";
import get from "lodash/get";

 class Certificate extends PureComponent {
     static async getInitialProps({ctx}) {
         const query = getPageParams(ctx);
         let certificate = {};
         try {
             certificate = await postRequest(`${constants.CERTIFICATE_URL}`,{serial_number:query.serial} );
         } catch (e) {
             if (e.status === 404 && ctx && ctx.res) {
                 ctx.res.redirect(routes.ROUTE_NONE);
             }
         }
         return {
             certificate: get(certificate, 'data.data', {}),
         };
     }

     render() {
         const {certificate} = this.props;
         return (
             <DefaultLayout>
                 <PHelmet title={certificate.title} description={certificate.title} schema={true}/>
                 <Style>
                     <ParallaxHero  data={constants.heroData} size='small'/>
                     <CertificateContent data={certificate}/>
                 </Style>
             </DefaultLayout>
         );
     };
 }

export default Certificate;
