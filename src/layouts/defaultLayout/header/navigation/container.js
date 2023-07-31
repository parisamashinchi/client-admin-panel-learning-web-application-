import { Container } from 'unstated';
import { formatMessage } from 'localization';
import paths from 'paths';
import routes from 'routes';

export default class NavigationContainer extends Container {
    constructor(props) {
        super(props);
        this.state = [
            // {
                // id: 1,
                // title: formatMessage('header.navigation.pathOfLearning'),
                // href: paths.PATH_LEARNING_PATH,
                // as: routes.ROUTE_LEARNING_PATH,
                // prefetch: true,
                // subNavs: [
                //     {
                //         id: 1,
                //         title: props.path,
                //         href: paths.PATH_COURSE_LIST,
                //         as: routes.ROUTE_COURSE_LIST,
                //         prefetch: false
                //     },
                //     {
                //         id: 2,
                //         title: formatMessage('header.navigation.blog'),
                //         href: paths.PATH_COURSE_LIST,
                //         as: routes.ROUTE_COURSE_LIST,
                //         prefetch: false
                //     },
                    // {
                    //     id: 3,
                    //     title: formatMessage('header.navigation.aboutUs'),
                    //     href: paths.PATH_ABOUT_US,
                    //     as: routes.ROUTE_ABOUT_US,
                    //     prefetch: true,
                    //     subNavs: [
                    //         {
                    //             id: 1,
                    //             title: formatMessage('header.navigation.courses'),
                    //             href: paths.PATH_COURSE_LIST,
                    //             as: routes.ROUTE_COURSE_LIST,
                    //             prefetch: true,
                    //         },
                    //         { id: 2, title: formatMessage('header.navigation.blog'), href: paths.PATH_COURSE_LIST, as: routes.ROUTE_COURSE_LIST, prefetch: false },
                    //         { id: 3, title: formatMessage('header.navigation.aboutUs'), href: paths.PATH_COURSE_LIST, as: routes.ROUTE_COURSE_LIST },
                    //         { id: 4, title: formatMessage('header.navigation.pathOfLearning'), href: paths.PATH_LEARNING_PATH, as: routes.ROUTE_LEARNING_PATH },
                    //     ],
                    // },
            //     ],
            // },
            // {
            //     id: 1,
            //     title: formatMessage('header.navigation.courses'),
            //     href: paths.PATH_COURSE_LIST,
            //     as: routes.ROUTE_COURSE_LIST_ALL,
            //     // as: routes.ROUTE_COURSE_LIST,
            //     prefetch: false
            // },
            {
                id: 2,
                title: formatMessage('header.navigation.blog'),
                href: 'https://amoozal.com/mag',
                as: 'https://amoozal.com/mag',
                prefetch: false
            },
            // {
            //     id: 3,
            //     title: formatMessage('header.navigation.organizational'),
            //     href: paths.PATH_ORGANIZATION,
            //     as: routes.ROUTE_ORGANIZATION,
            //     prefetch: false
            // },
            // {
            //     id: 4,
            //     title: formatMessage('header.navigation.aboutUs'),
            //     href: paths.PATH_ABOUT_US,
            //     as: routes.ROUTE_ABOUT_US,
            //     prefetch: true
            // },
            // {
            //     id: 5,
            //     title: formatMessage('header.navigation.contactUs'),
            //     href: paths.PATH_CONTACT_US,
            //     as: routes.ROUTE_CONTACT_US,
            //     prefetch: false
            // },
            {
                id: 6,
                title: formatMessage('header.navigation.test'),
                href: paths.PATH_TEST_LANDING,
                as: routes.ROUTE_TEST_LANDING,
                prefetch: false
            },
        ];
    }
    set = navigations => {
        this.setState(navigations);
    };

}
export const navigationStore = new NavigationContainer();
