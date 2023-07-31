import React, { Component } from 'react';
import IntlMessages from 'utils/intlMessages';
import Style from 'partials/four-zero-four/style';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { formatMessage } from 'localization';
import Button from 'components/uiElements/button';
import * as routes from 'routes'
import PHelmet from '../src/components/pHelmet';

export default class fourZeroFour extends Component {
    render() {
        return (
            <Style>
                <PHelmet title={formatMessage('fourZeroFour.number')} description="" schema={true} />
                <div className="error-404-page">
                    <div className="error-404-content">
                        <h1>
                            <span>{formatMessage('fourZeroFour.number')}</span>
                        </h1>
                        <h3>
                            <span>{formatMessage('fourZeroFour.title')}</span>
                        </h3>
                        <p>
                            <span>{formatMessage('fourZeroFour.description')}</span>
                        </p>
                        <Link href={routes.ROUTE_HOME}>
                            <Button formButton size="small" style={{ padding: '10px 30px' }}>
                                <IntlMessages id="fourZeroFour.back" />
                            </Button>
                        </Link>
                    </div>
                    <div className="error-404-artwork">
                        <img alt={formatMessage('fourZeroFour.number')} src="/static/images/error/404.png" />
                    </div>
                </div>
            </Style>
        );
    }
}
fourZeroFour.contextTypes = {
    intl: PropTypes.object.isRequired,
};
