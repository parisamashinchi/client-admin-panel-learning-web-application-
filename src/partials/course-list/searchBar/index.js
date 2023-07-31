import React, { Component } from 'react';
import Style from './style';
import { Input } from 'antd';
import Button from 'antd/lib/button';
import SearchIcon from 'static/icons/icon-search.svg';
import queryStringToJson from 'utils/getters/queryStringToJson';
import jsonToQueryString from 'utils/getters/jsonToQueryString';
import omit from 'lodash/omit';
import { withRouter } from 'next/router';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        const {
            router: { asPath },
        } = props;
        this.state = { asPath, keyword: '' };
    }
    componentDidMount() {
        const {
            router: { asPath },
        } = this.props;
        let query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1])) || {};
        const keyword = query['key_word'] || '';
        this.setState({ keyword });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            asPath: prevAsPath,
        } = prevState;
        const {
            router: { asPath },
        } = this.props;
        if (prevAsPath !== asPath) {
            let query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1])) || {};
            const keyword = query['key_word'] || '';
            this.setState({ asPath, keyword });
        }
    }
    updateKeyword = e => {
        this.setState({ keyword: e.target.value });
    };
    performSearch = e => {
        e && e.preventDefault();
        const { router } = this.props;
        const { asPath, route } = router;
        const { keyword } = this.state;
        let query = queryStringToJson(asPath.split('?')[1] && decodeURIComponent(asPath.split('?')[1])) || {};
        if (keyword && keyword !== '') {
            query['key_word'] = keyword;
        } else {
            query = omit(query, ['key_word']);
        }
        router.push(route + '/all' + jsonToQueryString(omit(query, ['page', 'limit'])), asPath.split('?')[0] + jsonToQueryString(omit(query, ['page', 'limit'])));
    };
    render() {
        const { keyword } = this.state;
        return (
            <Style>
                <div className="search-form">
                    <Input
                        className="search-input"
                        type="text"
                        placeholder="جستجو در آموزش ها"
                        value={keyword}
                        onChange={this.updateKeyword}
                        onPressEnter={this.performSearch}
                    />
                    <Button className="search-button" onClick={this.performSearch}>
                        <SearchIcon />
                    </Button>
                </div>
            </Style>
        );
    }
}
export default withRouter(SearchBar);
