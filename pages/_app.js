import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { IntlProvider } from 'react-intl';
import config from 'src/config';
import AppLocale from 'localization';
import GlobalStyle from 'theme/injectGlobal';
import flush from 'styled-jsx/server';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import { Provider as UnstatedProvider, Subscribe } from 'unstated';
import stores from 'store';
import ModalContainer from 'containers/modalContainer';
import Modal from 'components/modal';
import Cookies from "js-cookie";
import * as routes from "../routes";


Router.events.on('routeChangeStart', url => {
    const root = document.querySelector('#__next');
    if (root) {
        root.classList.add('global-loading');
    }
});
Router.events.on('routeChangeComplete', () => {
        const root = document.querySelector('#__next');
        if (root) {
            root.classList.remove('global-loading');
        }
    },
);

class MyApp extends App {
    constructor(props) {
        super(props);
        // pass the state to client store
        // serverState will be reset when client navigate with Link
        // if (process.browser) {
        //     const { someState } = props;
        //     sampleUnstatedStore.initState(someState);
        // }
    }
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }
        const styles = flush();

        if (!process.browser) {
            try {
                // make request to api
            } catch (e) {
                console.log(e);
            }
            return { pageProps, styles, someState: {} };
        } else {
            let pageProps = {};
            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps({
                    ctx,
                });
            }
            const styles = flush();
            return { pageProps, styles };
        }
    }
    render() {
        const { Component, pageProps } = this.props;
        const currentAppLocale = AppLocale[config.language];
        return (
            <Container>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1, width=device-width" />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            
                      let a = 1;
                       !function(){var a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/XMFSGc",l=localStorage.getItem("goftino");g.type="text/javascript",g.async=!0,g.referrerPolicy="no-referrer-when-downgrade",g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
                       
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TNFTRLC');
                  `,
                        }}
                    ></script>

                </Head>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNFTRLC"
                        height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe>
                </noscript>
                <GlobalStyle />
                <IntlProvider locale={config.language} messages={currentAppLocale.messages}>
                    <UnstatedProvider inject={stores}>
                        <Component {...pageProps} />
                        <Subscribe to={[ModalContainer]}>
                            {modalStore => {
                                const { open, modalProps = {}, children } = modalStore.state;
                                const { onCancel } = modalProps;
                                return (
                                    <Modal {...modalProps} centered visible={open} onCancel={() => (modalStore.closeModal(), onCancel && onCancel())}>
                                        {children}
                                    </Modal>
                                );
                            }}
                        </Subscribe>
                    </UnstatedProvider>
                </IntlProvider>
            </Container>
        );
    }
}

export default MyApp;
