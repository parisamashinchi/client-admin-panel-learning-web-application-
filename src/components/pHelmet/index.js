import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {formatMessage} from 'localization';

export class PHelmet extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }
    componentDidMount = () => {
        this.setState({
            url: window.location.href.split('?')[0],
        });
    };
    render() {
        const {
            title,
            img ,
            schema,
            noIndex,
            description,
        } = this.props;

        const { url } = this.state;
        const site_des = "آموزال یک سامانه مهارت\u200Cآموزی آنلاین است که با همکاری دانشگاه صنعتی امیرکبیر اقدام به برگزاری دوره\u200Cهای مهارتی آنلاین نموده است، به مهارت آموزان پس از قبولی در آزمون پایان دوره، گواهی\u200Cنامه رسمی دانشگاه صنعتی امیرکبیر اعطا می\u200Cشود";
        return (
            <Head>
                <title>{title}</title>
                <meta name="description" content={site_des} />
                <meta name="image" content="https://amoozal.com/static/icons/logo-desktop.svg"/>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img !== null ? img : 'https://amoozal.com/static/icons/logo-desktop.svg'}/>
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={title}/>
                <meta property="og:type" content="website" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta name="twitter:site" content="@amoozalapp" />
                <meta name="twitter:creator" content={formatMessage('site.name')}/>
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://amoozal.com/static/icons/logo-desktop.svg"/>
                <meta name="twitter:url" content={url} />
                <link rel="canonical" href="https://amoozal.com" />
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/static/favicon/196_196.ico"
                    sizes="196x196"
                />
                {noIndex ? (
                    <meta name="robots" content="noindex, follow" />
                ) : (
                    ' '
                )}

            </Head>
        );
    }
}
PHelmet.contextTypes = {
    intl: PropTypes.object.isRequired,
};
export default PHelmet;


