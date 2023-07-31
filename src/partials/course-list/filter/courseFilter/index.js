import React, { useState, useEffect} from 'react';
import Style from './style';
import map from 'lodash/map';
import Checkbox from 'components/uiElements/checkBox';
import Router, { withRouter } from 'next/router';
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import queryStringToJson from 'utils/getters/queryStringToJson';
import windowSize from 'react-window-size';
import {Icon} from 'antd';
import * as constants from "../constants";
import get from "lodash/get";
import { getRequest } from 'utils/api';
import routes from "../../../../../routes";
import paths from "../../../../../paths";
import Link from "next/link";



const CourseFilter = ({ onFilterChange, data, router, windowWidth }) => {
    // const { title, filterName, filters } = data;
     const { route, asPath } = router;
    // const query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1]));
    // const initialFilter = query[filterName] ? query[filterName].split(',') : [];
    // const [selectedFilters, setSelectedFilters] = useState(initialFilter);
    // const [packageChecked, setPackageChecked] = useState(false);
    // const [otherChecked, setOtherChecked] = useState(false);
    // useEffect(
    //     () => {
    //         //setSelectedFilters([]);
    //     },
    //     [asPath]
    // );
    // function multipleType() {
    //     return windowWidth <= 1000;
    // }
    // const performFilter = value => {
    //     if (multipleType()) {
    //         const newFilter = [...selectedFilters, value];
    //         setSelectedFilters(newFilter);
    //         onFilterChange(newFilter);
    //         if(value !== "package"){
    //             setPackageChecked(false)
    //             if(newFilter.includes('package')){
    //                 newFilter.splice(newFilter.indexOf('package'), 1);
    //             }
    //         } else if (value === 'package') {
    //             setPackageChecked(true)
    //         }
    //     } else {
    //         const query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1]));
    //         const filterValues = query[filterName] ? query[filterName].split(',') : [];
    //         query[filterName] = [...filterValues, value];
    //         //check package is checked or not if checked must remove from query in url
    //         if(value !== "package"){
    //             setPackageChecked(false)
    //             if(query[filterName].includes('package')){
    //                 query[filterName].splice(query[filterName].indexOf('package'), 1);
    //             }
    //         } else if (value === 'package') {
    //             setPackageChecked(true)
    //         }
    //         router.push(route + jsonToQueryString(query), asPath.split('?')[0] + jsonToQueryString(query));
    //     }
    // };
    // const omitFilter = value => {
    //     if (multipleType()) {
    //         const newFilter = selectedFilters.filter(selectedFilter => selectedFilter.toString() !== value.toString());
    //         setSelectedFilters(newFilter);
    //         onFilterChange(newFilter);
    //     } else {
    //         const query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1]));
    //         const filterValues = query[filterName] ? query[filterName].split(',') : [];
    //         filterValues.splice(filterValues.indexOf(value.toString()), 1);
    //         if (filterValues.length === 0) {
    //             delete query[filterName];
    //         } else {
    //             query[filterName] = filterValues;
    //         }
    //         if(value === "package"){
    //             setPackageChecked(false)
    //         }
    //         router.push(route + jsonToQueryString(query), asPath.split('?')[0] + jsonToQueryString(query));
    //     }
    // };

    // function renderFilter() {
    //     return map(filters, item => {
    //         const { title, value } = item;
    //         // const query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1]));
    //         // let isPerformed = multipleType()
    //         //     ? !!selectedFilters.find(selectedFilter => selectedFilter.toString() === value.toString())
    //         //     : query[filterName]
    //         //     ? query[filterName].split(',').find(filterValue => filterValue.toString() === value.toString())
    //         //     : false;
    //         // if (isPerformed && !selectedFilters.find(selectedFilter => selectedFilter.toString() === value.toString())) {
    //         //     const performedFilters = [...selectedFilters, value.toString()];
    //         //     setSelectedFilters(performedFilters);
    //         //     onFilterChange(performedFilters);
    //         // }
    //         // const onFilterCheckChanged = ({ target: { checked } }) => {
    //         //     if (checked) {
    //         //         // performFilter(value);
    //         //     } else {
    //         //         // omitFilter(value);
    //         //     }
    //         // };
    //         // return (
    //
    //             {/*<li className="filter-item" >*/}
    //             {/*    {title}*/}
    //                 {/*{packageChecked*/}
    //                 {/*    ? <Checkbox*/}
    //                 {/*        checked={item.value === 'package' ?true : false}*/}
    //                 {/*        onChange={onFilterCheckChanged}>*/}
    //                 {/*        {title}*/}
    //                 {/*        {item.value === 'package' && <Icon type="percentage" />}*/}
    //                 {/*    </Checkbox>*/}
    //                 {/*    : <Checkbox*/}
    //                 {/*        checked={ item.value === 'package' ? false :isPerformed}*/}
    //                 {/*        onChange={onFilterCheckChanged}>*/}
    //                 {/*        {title}*/}
    //                 {/*        {item.value === 'package' && <Icon type="percentage" />}*/}
    //                 {/*    </Checkbox>*/}
    //                 {/*}*/}
    //
    //             // </li>
    //         // );
    //     });
    // }
    return (
        <Style>
            {/*<h1 className="filter-group-title">{title}</h1>*/}
            <ul className="filter-list">
                {map(data, item => {
                    return <li className="filter-item" onClick={() => clickItem(item.seo_title)}>
                        {item.title}
                    </li>
                })}
            </ul>
        </Style>
    );
};
export default withRouter(windowSize(CourseFilter));
