import React, {PureComponent} from 'react';
import Style from 'partials/about-us/style';
import DefaultLayout from 'layouts/defaultLayout';
import PHelmet from 'components/pHelmet';
import { formatMessage } from 'localization';
import WhoWeAre from 'partials/about-us/whoWeAre';
import OurTeam from 'partials/about-us/ourTeam';
import Resume from 'partials/about-us/resume';
import ParallaxHero from 'components/parallaxHero';
import * as constants from 'partials/about-us/constants';
import {getRequest} from "../src/utils/api";
import get from 'lodash/get';

export default class AboutUs extends PureComponent {
    static async getInitialProps() {
        let teamResponse = {};
        try {
            teamResponse = await getRequest(constants.TEAM_API_URL);
        } catch (e) {
            console.error(e)
        }
        return {
            Data: get(teamResponse, 'data.data', []),
        };
    }

    render() {
        return (
            <DefaultLayout>
                <PHelmet title={constants.heroData.title} description={formatMessage('aboutUs.item2.description')}
                         img='/static/images/about-us-hero-bg.jpg' schema={true}/>
                <Style>
                    <ParallaxHero data={constants.heroData} size="medium"/>
                    <WhoWeAre/>
                    <OurTeam data={this.props.Data}/>
                    {/*<Resume />*/}
                </Style>
            </DefaultLayout>
        );
    }
}

