const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/theme/antd.less'), 'utf8'));

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {};
}

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {};
}

module.exports = withBundleAnalyzer(
    withLess(
        withCSS({
            target: 'serverless',
            analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
            analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
            env: {
                REACT_APP_AMOOZAL_API_URL: process.env.REACT_APP_AMOOZAL_API_URL,
            },
            lessLoaderOptions: {
                javascriptEnabled: true,
                modifyVars: themeVariables, // make your antd custom effective
            },
            bundleAnalyzerConfig: {
                server: {
                    analyzerMode: 'static',
                    reportFilename: '../bundles/server.html',
                },
                browser: {
                    analyzerMode: 'static',
                    reportFilename: '../bundles/client.html',
                },
            },
            webpack: (config, { isServer }) => {
                if (isServer) {
                    const antStyles = /antd\/.*?\/style.*?/;
                    const origExternals = [...config.externals];
                    config.externals = [
                        (context, request, callback) => {
                            if (request.match(antStyles)) return callback();
                            if (typeof origExternals[0] === 'function') {
                                origExternals[0](context, request, callback);
                            } else {
                                callback();
                            }
                        },
                        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                    ];

                    config.module.rules.unshift({
                        test: antStyles,
                        use: 'null-loader',
                    });
                }
                return config;
            },
        })
    )
);
