import React, {PureComponent} from 'react';
import DefaultLayout from 'layouts/defaultLayout';
import Style from 'partials/course-single/style';
import Hero from 'partials/course-single/hero';
import HeroMobile from 'partials/course-single/heroMobile';
import Button from 'components/uiElements/button';
import Cards from 'partials/course-single/cards';
import Faqs from 'partials/course-single/faq';
import Videos from 'partials/course-single/video';
import Difference from 'partials/course-single/difference';
import Samples from 'partials/course-single/sample';
import TwoColumnDetail from 'components/twoColumnDetail';
import SpecialPackageBox from 'components/specialPackageBox';
import TeacherBox from 'components/teacherBox';
import CourseDetail from 'partials/course-single/courseDetail';
import PHelmet from 'components/pHelmet';
import * as constants from 'partials/course-single/constants';
import PriceBox from 'components/priceBox';
import { getPageParams } from 'utils/nextUtils';
import get from 'lodash/get';
import { getRequest } from 'utils/api';
import * as routes from 'routes';
import isEmpty from 'lodash/isEmpty';
import SpecialCourse from 'pages/special-course';
import {Anchor,  Col} from "antd";
import IntlMessages from 'utils/intlMessages';



export default class CourseSingle extends PureComponent {
    static async getInitialProps({ ctx }) {
        const query = getPageParams(ctx);
        const courseId = get(query, 'id', undefined);
        if (!courseId && ctx && ctx.res) {
            ctx.res.redirect(routes.ROUTE_NONE);
        }
        let responseCourseData = {};
        let responseFaqData = {};
        let responseUserPanelUrl = {};

        try {
            responseCourseData = await getRequest(`${constants.COURSE_API_URL}/${courseId}`);
            responseFaqData = await getRequest(`${constants.FAQ_API_URL}/${courseId}`);
            responseUserPanelUrl = await getRequest(`${constants.USER_PANEL_URL}`);
        } catch (e) {
            if (e.status === 404 && ctx && ctx.res) {
                ctx.res.redirect(routes.ROUTE_NONE);
            }
            await console.error(e);
            if (e.status === 401 ) {
                // window.location.href = responseUserPanelUrl.data.data+'/auth/sign-in'
            }
        }
        return {
            courseData: get(responseCourseData, 'data.data', {}),
            FaqData: get(responseFaqData, 'data.data', {}),
            PanelUrl: get(responseUserPanelUrl, 'data.data', {}),
            // token: get(responseGetTokenData, 'data', 0),
            // profileInfo: get(responseProfileInfo, 'data', {}),

        };
    }
    constructor(props) {
        super(props);
        this.state = {
            innerWidth: null,
            isScrolling: false
        };
    }
    componentDidMount() {
        this.setState({
            innerWidth: global.window.innerWidth
        })
        window.addEventListener("scroll", this.onScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }
    onScroll = () => {
        this.setState({ isScrolling: true });

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.setState({ isScrolling: false });
        }, 200);
    };
    render() {
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            onChange: (oldIndex, newIndex) => {
                // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            },
        };
        const { Link } = Anchor;
        const { courseData,FaqData, PanelUrl } = this.props;
        return (
            <DefaultLayout blackBackground >
                <PHelmet title={courseData.header_title}  description={courseData.header_descriptions} schema={true} img={courseData.thumbnail_media} />
                {courseData.type !== "PACKAGE" &&
                <Style>
                    <div id="register" className={this.state.isScrolling ? "show" : "hide"}>
                        <p>آموزش خلاقیت در طراحی لباس</p>
                        <div className="buttons">
                            <Col span={12}>
                                <Anchor>
                                    <Link
                                        href="#price-box"
                                        title={
                                            <Button className="course-register-button" size="large">
                                                <span className="title"><IntlMessages id="button.register"/></span>
                                            </Button>
                                        }
                                    />
                                </Anchor>
                            </Col>
                            <Col span={12}>
                                <Anchor affix={false} offsetTop={50}>
                                    <Link
                                        href="#course-title"
                                        title={
                                            <Button className="course-title-button" size="large">
                                                <span className="title"> <IntlMessages id="courseSingle.introduction.courseTitle"/></span>
                                            </Button>
                                        }
                                    />
                                </Anchor>
                            </Col>
                        </div>
                    </div>
                    <Hero data={courseData}/>
                    {this.state.innerWidth < '600' &&
                        <HeroMobile data={courseData}/>
                    }
                    {/*<SocialDetail data={courseData} />*/}
                    <div className="path-back">
                        <TwoColumnDetail data={courseData}/>
                        <Cards data={courseData} />

                    {!isEmpty(courseData.package) &&
                        <SpecialPackageBox data={courseData} package={courseData.package}/>
                    }

                    {!isEmpty(courseData.teachers) &&
                        <TeacherBox data={courseData} samples={courseData.user_samples}
                                comments={courseData.comments}/>
                    }
                    <Faqs data={courseData} />
                    <Videos data={courseData} />
                    <Difference  data={courseData}  />
                    <Samples  data={courseData.teachers}  samples={courseData.user_samples} />
                    <CourseDetail data={courseData}/>
</div>
                    <PriceBox data={courseData} url={PanelUrl}/>
                </Style>
                }
                {courseData.type === "PACKAGE" &&
                     <SpecialCourse/>
                }
            </DefaultLayout>
        );
    }
}
