import React, { Component } from 'react';
import { Ratable, Rate } from './style';
import PropTypes from 'prop-types';

export default class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: null,
        };
    }
    setRate = rating => {
        const { onRate } = this.props;
        this.setState({ rating });
        onRate(rating);
    };
    rateItem = () => {
        const { data } = this.props;
        const { title, rate } = data;
        return (
            <Rate title={title} rate={rate}>
                <span />
            </Rate>
        );
    };
    ratableItem = () => {
        const { rating } = this.state;
        return (
            <Ratable>
                <a className={rating === 1 ? 'active' : null} onClick={e => this.setRate(1)} />
                <a className={rating <= 2 && rating > 0 ? 'active' : null} onClick={e => this.setRate(2)} />
                <a className={rating <= 3 && rating > 0 ? 'active' : null} onClick={e => this.setRate(3)} />
                <a className={rating <= 4 && rating > 0 ? 'active' : null} onClick={e => this.setRate(4)} />
                <a className={rating <= 5 && rating > 0 ? 'active' : null} onClick={e => this.setRate(5)} />
            </Ratable>
        );
    };
    render() {
        const { enableRating } = this.props;
        return enableRating ? this.ratableItem() : this.rateItem();
    }
}

StarRating.propTypes = {
    enableRating: PropTypes.boolean,
    onRate: PropTypes.func,
    data: PropTypes.object,
};
