import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Style from './style';
import PropTypes from 'prop-types';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
        if ((!domNode || !domNode.contains(event.target)) && this.state.open) {
            this.hide();
        }
    };
    show = () => {
        this.setState({ open: true });
    };
    hide = () => {
        this.setState({ open: false });
    };
    render() {
        const { toggleOnClick, center, left, overlay, children } = this.props;
        const { open } = this.state;
        return (
            <Style
                onMouseEnter={!toggleOnClick && this.show}
                onMouseLeave={!toggleOnClick && this.hide}
                center={center}
                left={left}
            >
                <div
                    onClick={open ? this.hide : this.show}
                    className="drop-hover"
                >
                    {children}
                </div>
                <div className={`drop-overlay ${open && 'show'}`}>
                    {overlay}
                </div>
            </Style>
        );
    }
}
Dropdown.propTypes = {
    overlay : PropTypes.node.isRequired,
    toggleOnClick: PropTypes.object,
    center: PropTypes.bool,
    left: PropTypes.bool,
};
