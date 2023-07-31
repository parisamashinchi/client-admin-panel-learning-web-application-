import React from 'react';
import Style from './style';
import { Input } from 'antd';
import SearchIcon from 'static/icons/icon-search-2.svg';

const SearchInput = () => {
    return (
        <Style>
            <div className="search-input">
                <Input placeholder="جستجو" className="hero-search-input" />
                <button className="search-icon">
                    <SearchIcon />
                </button>
            </div>
        </Style>
    );
};
export default SearchInput;
