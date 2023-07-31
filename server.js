const express = require('express');
const next = require('next');
const routes = require('./routes');
const paths = require('./paths');
require('dotenv').config();

const port = process.env.PORT ;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const sitemapOptions = {
//     root: __dirname + '/public/static/sitemap/',
//     headers: {
//         'Content-Type': 'text/xml'
//     }
// };

app.prepare().then(() => {
    const server = express();
    server.get(routes.ROUTE_COURSE_LIST, (req, res) => {
        return app.render(req, res, '/course-list', { id: req.params.id });
    });
    server.get(routes.ROUTE_COURSE_SINGLE, (req, res) => {
        return app.render(req, res, '/course-single', { id: req.params.id });
    });
    server.get(routes.ROUTE_SPECIAL_COURSE, (req, res) => {
        return app.render(req, res, '/special-course', { id: req.params.id });
    });
    server.get(routes.ROUTE_LEARNING_PATH, (req, res) => {
        return app.render(req, res, '/learning-path',  { id: req.params.id });
    });
    server.get(routes.ROUTE_CERTIFICATE_REQUEST, (req, res) => {
        return app.render(req, res, '/certificate-request',{ id: req.params.id });
    });
    server.get(routes.ROUTE_CERTIFICATE, (req, res) => {
        return app.render(req, res, '/certificate', req.query);
    });
    server.get(routes.ROUTE_ABOUT_US, (req, res) => {
        return app.render(req, res, paths.PATH_ABOUT_US, req.query);
    });
    server.get(routes.ROUTE_CONTACT_US, (req, res) => {
        return app.render(req, res, paths.PATH_CONTACT_US, req.query);
    });
    server.get(routes.ROUTE_RULES, (req, res) => {
        return app.render(req, res, paths.PATH_RULES, req.query);
    });
    server.get(routes.ROUTE_TEST, (req, res) => {
        return app.render(req, res, paths.PATH_TEST , req.query);
    });
    server.get(routes.ROUTE_TEST_LANDING, (req, res) => {
        return app.render(req, res, paths.PATH_TEST_LANDING , req.query);
    });
    server.get(routes.ROUTE_NONE, (req, res) => {
        return handle(req, res);
    });
    // serve sitemap
    // server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));
    // server.get('*', (req, res) => {
    //     return handle(req, res);
    // });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });



});
