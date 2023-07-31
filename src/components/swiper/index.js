import React, { PureComponent } from 'react';
import map from 'lodash/map';
import Style from './style';
import IdSwiper from 'react-id-swiper';
import 'react-animated-slider/build/horizontal.css';
import PropTypes from 'prop-types';

class Swiper extends PureComponent {
    hover = false;
    swiper = null;
    firstItemRef = undefined;
    wrapperRef = undefined;
    renderFarm = items => {
        const { renderItem, itemClassName } = this.props;
        return map(items, (item, index) => {
            const Element = renderItem({
                item,
                index
            });
            return (
                <div
                    key={index}
                    ref={node => {
                        if (index === 0) {
                            this.firstItemRef = node;
                        }
                    }}
                    className={`swiper-item ${itemClassName || ''}`}
                >
                    {Element}
                </div>
            );
        });
    };
    removeMargin = () => {
        setTimeout(() => {
            if (this.firstItemRef) {
                this.firstItemRef.classList.add('no-margin');
            }
            this.wrapperRef.classList.add('add-margin');
        }, 10);
    };

    addMargin = () => {
        if (this.firstItemRef) {
            this.firstItemRef.classList.remove('no-margin');
        }
        if (this.wrapperRef) {
            this.wrapperRef.classList.remove('add-margin');
        }
    };
    componentDidMount() {
        this.swiper.el.classList.add('loaded');
    }

    render() {
        const { data, noMargin } = this.props;
        const defaultSwiperParams = {
            rtl: true,
            slidesPerView: 1,
            speed: 1000,
            pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
            shouldSwiperUpdate: true,
            // rebuildOnUpdate: true,
            autoplay: false,
            on: {
                progress: progress => {
                    if (this.props.progress) {
                        this.props.progress(progress);
                    }
                    if (!noMargin) {
                        if (progress === 1) {
                            console.log('progress: ' + progress);
                            this.removeMargin();
                        } else {
                            this.addMargin();
                        }
                    }
                },
            },
        };
        const swiperParams = { ...defaultSwiperParams, ...this.props };
        return (
            <Style
                onMouseEnter={() => (this.hover = true)}
                onMouseLeave={() => (this.hover = false)}
                onTouchStart={() => (this.hover = true)}
                onTouchMove={() => (this.hover = true)}
                onTouchEnd={() => (this.hover = false)}
                ref={node => (this.wrapperRef = node)}
                noMargin={noMargin}
            >
                <IdSwiper
                    {...swiperParams}
                    ref={node => {
                        if (node && this.swiper === null) {
                            this.swiper = node.swiper;
                        }
                    }}
                >
                    {this.renderFarm(data)}
                </IdSwiper>
            </Style>
        );
    }
}

Swiper.propTypes = {
    renderItem: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    itemClassName: PropTypes.string.isRequired,
    noMargin: PropTypes.bool,
};
export default Swiper;
