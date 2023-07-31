import React, { PureComponent } from 'react';
import PHelmet from 'components/pHelmet';
import DefaultLayout from 'layouts/defaultLayout';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import SlideShow from 'components/slideShow';
import Achievements from 'partials/home/achievements';
import AlbumBox from 'partials/home/albumBox';
import SuggestedCourseBox from 'partials/home/suggestedCourseBox';
import AchievementsDetail from 'partials/home/achievmentsDetail';
import TopTeacherSlideShow from 'partials/home/topTeacherSlideShow';
import { formatMessage } from 'localization';
import * as constants from 'partials/home/constants';
import { getRequest } from '../src/utils/api';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import loadable from '@loadable/component'
import dynamic from 'next/dynamic'
import Style from "../src/partials/home/topTeacherSlideShow/slideShowItem/style";
import SlideBoxes from "components/slideBoxes";

// const AlbumBox = dynamic(
//     () => import('partials/home/albumBox'),
//     {
//         loading: () => <p>Loading...</p>,
//         ssr: false,
//     }
// )
// const SuggestedCourseBox = dynamic(
//     () => import('partials/home/suggestedCourseBox'),
//     {
//         loading: () => <p>Loading...</p>,
//         ssr: false,
//     }
// )

export default class Index extends PureComponent {
    static async getInitialProps() {
        let sliderResponse = {};
        let albumResponse = {};
        let parallelResponse = {};
        let quotesResponse = {};
        let achievementResponse = {};
        let bannerResponse = {};
        try {
            sliderResponse = await getRequest(constants.SLIDE_SHOW_API_URL);
            albumResponse = await getRequest(constants.ALBUM_API_URL);
            parallelResponse = await getRequest(constants.PARALLEL_API_URL);
            quotesResponse = await getRequest(constants.QUOTES_API_URL);
            achievementResponse = await getRequest(constants.ACHIEVEMENT_API_URL);
            bannerResponse = await getRequest(constants.BANNER_URL);
        } catch (e) {
            console.error(e)
        }
        return {
            sliderData: get(sliderResponse, 'data.data', []),
            albumData: get(albumResponse, 'data.data', []),
            parallelData: get(parallelResponse, 'data.data', []),
            quotesData: get(quotesResponse, 'data.data', []),
            achievementData: get(achievementResponse, 'data.data', []),
            bannerData: get(bannerResponse, 'data.data', []),
        };
    }

    render() {
        const { sliderData, albumData, parallelData, quotesData,bannerData, achievementData } = this.props;
        const Achievements = loadable(() => import('partials/home/achievements'));
        const AlbumBox = loadable(() => import('partials/home/albumBox'));
        const SuggestedCourseBox = loadable(() => import('partials/home/suggestedCourseBox'));
        const AchievementsDetail = loadable(() => import('partials/home/achievmentsDetail'));
        const TopTeacherSlideShow = loadable(() => import('partials/home/topTeacherSlideShow'));
        return (
            <DefaultLayout>
                <PHelmet title={formatMessage('site.name')} description={formatMessage('meta.description')} img='/static/images/achievement-img-3.png' schema={true} />
                {(process.browser) && global.window.innerWidth < '575'
                    ? <Row>
                        <Col span={24}>
                            <SlideShow data={sliderData} boxData={bannerData} />
                        </Col>
                        <Row>
                        <Col span={24}>
                            <AlbumBox data={albumData} />
                        </Col>
                        </Row>
                        <Col span={24}>
                            <SlideBoxes />
                        </Col>
                        <Col span={24}>
                            <Achievements data={constants.mockAchievements} />
                        </Col>
                        <Col span={24}>
                            {!isEmpty(parallelData) &&
                            <SuggestedCourseBox data={parallelData} />
                            }
                        </Col>
                        <Col span={24}>
                            <TopTeacherSlideShow data={quotesData} />
                        </Col>
                </Row>
                :<Row>
                    <Col span={24}>
                        <SlideShow data={sliderData} boxData={bannerData}/>
                    </Col>
                    <Col span={24}>
                        <Achievements data={constants.mockAchievements} />
                    </Col>
                    <Col span={24}>
                        <AlbumBox data={albumData} />
                    </Col>
                    <Col span={24}>
                        {!isEmpty(parallelData) &&
                        <SuggestedCourseBox data={parallelData} />
                        }
                    </Col>
                    {/*<Col span={24}>*/}
                    {/*    <AchievementsDetail data={constants.achievementDetailList} link={achievementData}/>*/}
                    {/*</Col>*/}
                    <Col span={24}>
                        <TopTeacherSlideShow data={quotesData} />
                    </Col>
                </Row>
                }
            </DefaultLayout>
        );
    }
}
Index.contextTypes = {
    intl: PropTypes.object.isRequired,
};
