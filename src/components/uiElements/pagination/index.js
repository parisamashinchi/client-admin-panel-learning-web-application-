import React from 'react';
import Style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { withRouter } from 'next/router';
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import queryStringToJson from 'utils/getters/queryStringToJson';
import PersianNumber from 'utils/getters/PersianNumber';
import { Icon } from 'antd';

const Pagination = ({ paginationConfig: { defaultCurrent, current, pageSize, totalItems, requestParams }, router }) => {

    const buildLink = (current, type) => {
        switch (type) {
            case 'prev':
                {
                    if (current - 1 >= 1) {
                        current = current - 1;
                    }
                }
                break;
            case 'next':
                {
                    if (current + 1 <= Math.ceil(totalItems / pageSize)) {
                        current = current + 1;
                    }
                }
                break;
        }
        return {
            // href: `${router.route}${jsonToQueryString({ ...requestParams, page: current, limit: pageSize })}`,
            href: `${router.route}/${jsonToQueryString({...requestParams, page: current, limit: pageSize }).split('?id=')}`,
            as:
                router.asPath.split('?')[0] +
                jsonToQueryString({
                    // ...queryStringToJson(router.asPath.split('?')[1]),
                    // ...requestParams,
                    page: current,
                    limit: pageSize,
                }),
            prefetch: false,
        };
    };
    const renderItems = (page, type, originalElement) => {
        if (type === 'prev') {
            return (
                <Link {...buildLink(current, type)}>
                    <a>
                        <Icon type="right" />
                    </a>
                </Link>
            );
        }
        if (type === 'next') {
            return (
                <Link {...buildLink(current, type)}>
                    <a>
                        <Icon type="left" />
                    </a>
                </Link>
            );
        }
        if (type === 'page') {
            return (
                <Link {...buildLink(page)}>
                    <a>
                        <i>
                            <PersianNumber>{page}</PersianNumber>
                        </i>
                    </a>
                </Link>
            );
        }
        return originalElement;
    };
    return <Style current={current} defaultCurrent={defaultCurrent} defaultPageSize={pageSize} total={totalItems} itemRender={renderItems} />;
};
export default withRouter(Pagination);
