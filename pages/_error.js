import React, { Fragment } from 'react';
import 'antd/lib/style/index.less';
import FourZeroFour from './four-zero-four';

class Error extends React.Component {
    static async getInitialProps({ ctx }) {
        const { req } = ctx;
        return { statusCode: req.res.statusCode };
    }

    render() {
        return (
            <Fragment>
                <FourZeroFour />
            </Fragment>
        );
    }
}

export default Error;
