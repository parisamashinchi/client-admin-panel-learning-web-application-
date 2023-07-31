import React, {PureComponent, useState} from 'react';
import Style from 'partials/learning-path/style';
import DefaultLayout from 'layouts/defaultLayout';
import PHelmet from 'components/pHelmet';
import PathSocialImages from 'components/pathSocialImages';
import ChoiceCards from 'partials/learning-path/choiceCards';
import CoursesCards from 'partials/learning-path/coursesCards';
import Blog from 'partials/learning-path/blog';
import SpecialPackageBox from 'components/specialPackageBox';
import PromotionBox from 'components/promotionBox';
import * as constants from 'partials/learning-path/constants';
import LearningParallaxHero from 'components/learningParallaxHero';
import AchievementsDetail from 'partials/home/achievmentsDetail';
import * as homeConstants from 'partials/home/constants';
import * as routes from "../routes";
import get from 'lodash/get';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { getRequest } from 'utils/api';

export default class LearningPath extends PureComponent {
    static async getInitialProps({ ctx }) {
        const pathId = ctx.asPath.split('/')[2];
        if (!pathId && ctx && ctx.res) {
            ctx.res.redirect(routes.ROUTE_NONE);
        }
        let responsePathData = {};
        try {
            responsePathData = await getRequest(`${constants.LEARNING_PATH_URL}/${pathId}`);
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
            pathData: get(responsePathData, 'data.data', {}),
        };
    }
    constructor(props){
        super(props);
        this.state={
            model_array: 0,
            currentChoice: 0
        }
    }

    render() {
       const  onChoiceChange =(id) =>{
           //find index of model to pass proper steps
            map(pathData.models, (item, index) =>{
                if(item.order === id){
                    this.setState({
                        model_array: index
                    })
                }
            })
            this.setState({
                currentChoice: id
            })
        }
        const {pathData} = this.props;
        const heroData = {
            id: 1,
            title: pathData.title,
            description: pathData.descriptions,
            thumbnail: pathData.media_url,
            thumbnail_mobile: pathData.mobile_media_url,
            intro_video: pathData.intro_video,
            header_media: pathData.header_media,
            mobile_header_media: pathData.header_media

        };
        return (
            <DefaultLayout blackBackground path={true}>
                <PHelmet title={pathData.title} description={pathData.description} schema={true}/>
                <Style>
                    <LearningParallaxHero data={heroData} path={true}/>
                    <div className="social-detail path-social" >
                        <PathSocialImages />
                    </div>
                    <ChoiceCards data={pathData.models} onChange={onChoiceChange}/>
                    {!isEmpty(pathData.models[this.state.model_array]) &&
                        <div>
                            <CoursesCards data={pathData.models[this.state.model_array].steps} currentChoice={this.state.currentChoice}/>
                            {
                                map(pathData.models[this.state.model_array].packages, (item, index) =>
                                    <SpecialPackageBox noBackground={index % 2 === 0 && 'noBackground'} data={item} path={true} />
                               )
                            }
                        </div>
                    }
                    <AchievementsDetail data={homeConstants.achievementDetailList} path={true}  />
                    <PromotionBox data={constants.promotionBoxData} id={pathData.id} medium white  path={true} />
                    {/*<Blog  data={pathData.blogs}/>*/}
                </Style>
            </DefaultLayout>
        );
    }
};

