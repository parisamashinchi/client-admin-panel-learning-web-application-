import React, { Component } from 'react';
import Style from './style';
import map from 'lodash/map';
import get from 'lodash/get';
import each from 'lodash/each';
import CourseFilter from './courseFilter';
import { getRequest } from 'utils/api';
import * as constants from './constants';
import { formatMessage } from 'localization';
import Spinner from 'components/uiElements/spinner';
import Button from 'components/uiElements/button';
import queryStringToJson from 'utils/getters/queryStringToJson';
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import Router, { withRouter } from 'next/router';
import IntlMessages from 'utils/intlMessages';
import { getStore } from 'store';
import {Icon} from 'antd';
import { Checkbox  } from "antd";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            filterData: [],
            selectedFilter: {},
            };
    }

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const response = await getRequest(constants.DEPARTMENT_LIST_API_URL);
            this.setState({ filterData: get(response, 'data.data', []) });
            // this.setState({ filterData: this.buildFilterData(get(response, 'data.data', [])) });
        } catch (e) {
            console.error(e);
        } finally {
            this.setState({ loading: false });
        }
    }
    // buildFilterData(categoryList) {
    //     return [
    //         {
    //             title: formatMessage('courseList.filter.categoryFilter'),
    //             filterName: 'filter[category_id]',
    //             filters: map(categoryList, ({ id, title }) => ({ title, value: id })),
    //         },
            // {
            //     title: formatMessage('courseList.filter.levelFilter'),
            //     filterName: 'filter[level]',
            //     filters: [
            //         {
            //             title: formatMessage('courseList.courseLevel.beginner'),
            //             value: 'basic',
            //         },
            //         {
            //             title: formatMessage('courseList.courseLevel.intermediate'),
            //             value: 'intermediate',
            //         },
            //         {
            //             title: formatMessage('courseList.courseLevel.advanced'),
            //             value: 'advance',
            //         },
            //     ],
            // },
    //     ];
    // }
    // updateFilter = (filterTitle, filters) => {
    //     this.setState({ selectedFilter: { ...this.state.selectedFilter, [filterTitle]: filters } });
    // };
    // performMultipleFilter = () => {
    //     const { router } = this.props;
    //     const { route, asPath } = router;
    //     const { selectedFilter } = this.state;
    //     let query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1]));
    //     query = { ...query, ...selectedFilter };
    //     each(query, (queryItem, key) => {
    //         if (queryItem.length === 0) {
    //             delete query[key];
    //         }
    //     });
    //     router.push(route + jsonToQueryString(query), asPath.split('?')[0] + jsonToQueryString(query));
    //     getStore('ModalContainer').closeModal();
    // };
    // renderFarm = filterData =>
    //     map(filterData, item => {
    //         const { filterName } = item;
    //         return <CourseFilter data={item} onFilterChange={filters => this.updateFilter(filterName, filters)} />;
    //     });

    render() {
        const { loading, filterData } = this.state;
        const { router } = this.props;
        const { route, asPath } = router;
       const  clickItem = (seo_title) => {
           if(seo_title === 'all'){
               router.push(route);
           } else {
               router.push(route + '/' + seo_title);
           }
        };
        return (
            <Spinner loading={loading}>
                <Style>
                    <div className="filter-container">
                        {/*{this.renderFarm(filterData)}*/}
                        <ul className="filter-list">
                            {map(filterData, item => {
                                return  item.seo_title !== "packages-special-offer" &&
                                <li className={ this.props.router.query.id === item.seo_title ? "filter-item active" : "filter-item "} onClick={() => clickItem(item.seo_title)}>
                                       <img src={item.icon_url}/>
                                        {item.title}
                                </li>
                            })}
                        </ul>
                    </div>
                    {/*<Button className="btn-multiple-filter" onClick={this.performMultipleFilter} block>*/}
                    {/*    <IntlMessages id="courseList.filter.performMultiple" />*/}
                    {/*</Button>*/}
                </Style>
            </Spinner>
        );
    }
}
export default withRouter(Filter);
