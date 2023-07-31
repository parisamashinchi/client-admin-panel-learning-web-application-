import React from 'react';
import Style from './style';
import Link from 'next/link';
import Dropdown from 'components/uiElements/dropdown';
import SubNavigation from './subNavigation';
import { Subscribe } from 'unstated';
import NavigationContainer from './container';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { formatMessage } from 'localization';
import SubStyle from './subNavigation/style';
import paths from "../../../../../paths";
import routes from "../../../../../routes";
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import {Tag} from "antd";

const Navigation = (props) => {
    const renderFarm = navs => {
        return map(navs, item => {
            const { title, href, as, prefetch, subNavs } = item;
            return subNavs ? (
                <li className="nav-item" key={title}>
                    <Dropdown overlay={<SubNavigation data={subNavs} />}>
                        <Link href={href} as={as} prefetch={prefetch}>
                            <a>{title}</a>
                        </Link>
                    </Dropdown>
                </li>
            ) : (
                <li className="nav-item" key={title}>
                    <Link href={href} as={as} prefetch={prefetch} >
                        <a target={title === 'بلاگ' && "_blank"}>{title}</a>
                    </Link>
                </li>
            );
        });
    };
    return (
        <div>
            <Subscribe to={[NavigationContainer]} from={props.path}>
                {navigationStore => {
                    return <Style>
                        <div>
                            <li className="nav-item" >
                                <Dropdown overlay={
                                    map(props.course, item =>(

                                        <SubStyle>
                                            <li className="submenu-item" key={item.id}>
                                                {item.seo_title === 'all'
                                                   ? <Link
                                                        href={`${paths.PATH_COURSE_LIST}}`}
                                                        as={routes.ROUTE_COURSE_LIST_ALL} prefetch={false}>
                                                        <a className="submenu-text">{item.title}</a>

                                                   </Link>
                                                    :<Link
                                                        href={`${paths.PATH_COURSE_LIST}${jsonToQueryString(item.seo_title)}`}
                                                        as={routes.ROUTE_COURSE_LIST.replace(':id', item.seo_title)} prefetch={false}>
                                                        <a className="submenu-text">{item.title}</a>

                                                    </Link>
                                                }
                                            </li>
                                        </SubStyle>
                                    ))
                                }
                                >
                                    {formatMessage('header.navigation.courses')}
                                </Dropdown>
                            </li>
                        </div>
                        {!isEmpty(props.path)
                                &&
                            <div>
                                <li className="nav-item" >
                                    <Dropdown overlay={
                                        map(props.path, item =>(
                                            <SubStyle>
                                                <li className="submenu-item" key={item.id}>
                                                    {/*<Link href={'learning-path/'+item.seo_title} as={'learning-path/'+item.seo_title} prefetch={true}>*/}
                                                    <Link
                                                        href={`${paths.PATH_LEARNING_PATH}${jsonToQueryString(item.seo_title)}`}
                                                        as={routes.ROUTE_LEARNING_PATH.replace(':id', item.seo_title)} prefetch={false}>
                                                        <a className="submenu-text">{item.title}</a>
                                                    </Link>
                                                </li>
                                            </SubStyle>
                                        ))
                                    }
                                    >
                                        {formatMessage('header.navigation.pathOfLearning')}
                                    </Dropdown>
                                </li>
                            </div>
                        }
                        {renderFarm(navigationStore.state)}
                        <Tag color="red">جدید</Tag>
                    </Style>;
                }}
            </Subscribe>
        </div>
    );
};
export default Navigation;
