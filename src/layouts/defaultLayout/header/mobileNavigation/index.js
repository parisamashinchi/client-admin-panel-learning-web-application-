import React, { Component } from 'react';
import Style from './style';
import Branding from '../branding';
import MobileMenu from './mobileMenu';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PropTypes from 'prop-types';
import SearchBox from "../searchBox";
import {Row , Col} from 'antd'

export default class MobileNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.windowResizeListener);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.open !== this.state.open) {
            this.changeBodyStyle(this.state.open);
        }
    }
    componentWillUnmount() {
        this.changeBodyStyle(false);
        window.removeEventListener('resize', this.windowResizeListener);
    }
    windowResizeListener = () => {
        //if the width of window is greater than 1200px (xDesktop) then close mobile menu
        const { open } = this.state;
        if (window.innerWidth > 1000 && open) {
            this.setState({ open: false });
        }
    };
    changeBodyStyle = open => {
        if (!open) {
            document.querySelector('html').classList.remove('noscroll');
            document.querySelector('body').classList.remove('noscroll');
        }
    };
    toggleNavBar = () => {
        this.setState({ open: !this.state.open });
    };
    openNavBar = () => {
        this.setState({ open: true });
        document.querySelector('html').classList.add('noscroll');
        document.querySelector('body').classList.add('noscroll');
    };
    closeNavBar = () => {
        this.setState({ open: false });
        document.querySelector('html').classList.remove('noscroll');
        document.querySelector('body').classList.remove('noscroll');
    };
    render() {
        const { sticked } = this.props;
        const { open } = this.state;
        return (
            <Style sticked={sticked}>
                <MobileMenu open={open} closeNavBar={this.closeNavBar} PanelUrl={this.props.PanelUrl} path={this.props.path} course={this.props.course}/>
                    <div className="mobile-nav">
                        <Branding mobile />

                        <div className="mobile-tool">
                            <img src="/static/icons/menu.svg" onClick={this.openNavBar} alt="منوی آموزال" />
                        </div>

                    </div>
                     <Row className="mobile-nav-extend">
                        <Col span={12}>
                            <SearchBox />
                         </Col>
                          <Col span={12} className="login">

                             <a href={`${this.props.PanelUrl}auth/sign-in`}  size="medium">
                                    ورود
                               </a>
                             &nbsp;/&nbsp;
                                   <a   href={`${this.props.PanelUrl}auth/sign-up`}  size="medium">
                                 عضویت
                                     </a>


                         </Col>
                     </Row>
            </Style>
        );
    }
}
MobileNavigation.propTypes = {
    sticked: PropTypes.bool,
    open: PropTypes.bool,
};
