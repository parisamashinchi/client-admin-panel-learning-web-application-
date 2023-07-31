import { palette } from 'theme/injectGlobal';
import routes from 'routes';
import paths from 'paths';
import { formatMessage } from '../../localization';

export const LEARNING_PATH_URL = '/shared/learning_path/seo_title';
export const LEARNING_PATH_CONTACT_URL = '/public_v1/learning_path/contact';

export const heroData = {
    id: 1,
    title: 'مسیر یک معمار',
    description: 'با تخصصی شدن شاخه‌های مهارتی رشته معماری آموزال مسیرهای حرفه ای برای شما طراحی کرده است',
    thumbnail: 'static/images/learning-path-hero.jpg',
    backgroundColor: `${palette.darkGreenSecond}`,
};

export const choiceCardData = [
    {
        id: 1,
        url: '/static/icons/sketch.svg',
        title: 'معمار مدل‌ساز',
    },
    {
        id: 2,
        url: '/static/icons/layout.svg',
        title: 'معمار فاز دو',
    },
    {
        id: 3,
        url: '/static/icons/camera.svg',
        title: 'معمار عکاس',
    },
    {
        id: 4,
        url: '/static/icons/sketch.svg',
        title: 'معمار عکاس',
    },
    {
        id: 5,
        url: '/static/icons/camera.svg',
        title: 'معمار عکاس',
    },
];

export const coursesCardData = [
    {
        id: 1,
        title: 'مرحله اول',
        description: 'شما در ابتدا باید به نرم‌افزار اتوکد مسلط باشید تا بتونید نقشه‌های داخلی طرح‌های خودتون رو طراحی کنید',
        courses: [{ title: 'دوره آموزشی اتوکد', imageUrl: '/static/images/mock-course-7.jpg' }],
    },
    {
        id: 2,
        title: 'مرحله دوم',
        description:
            'شما در مرحله بعد میتونید هر کدوم از نرم افزارهای بالا رو به عنوان نرم افزار مدلسازی انتخاب کنید و ایده های طراحی خودتون رو پیاده سازی کنید',
        courses: [
            { title: 'دوره آموزشی رویت', imageUrl: '/static/images/mock-course-1.jpg' },
            { title: 'MEP دوره آموزشی رویت', imageUrl: '/static/images/mock-course-4.jpg' },
            { title: 'دوره آموزشی راینو', imageUrl: '/static/images/mock-course-2.jpg' },
        ],
    },
    {
        id: 3,
        title: 'مرحله سوم',
        description:
            'گامی بعدی پس از مدلسازی طرح ها رندرینگ و نورپردازی پروژه هاتون هست، در این مرحله نیاز دارید که با نرم افزار لومیون آشنا بشید و بتونید اثر معماری خود را به بهترین فرم ارائه کنید',
        courses: [{ title: 'دوره آموزشی لومیون', imageUrl: '/static/images/mock-course-6.jpg' }],
    },
    {
        id: 4,
        title: 'مرحله چهارم',
        description:
            'گامی بعدی پس از مدلسازی طرح ها رندرینگ و نورپردازی پروژه هاتون هست، در این مرحله نیاز دارید که با نرم افزار لومیون آشنا بشید و بتونید اثر معماری خود را به بهترین فرم ارائه کنید',
        courses: [
            { title: 'برنامه نویسی Front End', imageUrl: '/static/images/courses-card-1.jpg' },
            { title: 'برنامه نویسی Front End', imageUrl: '/static/images/courses-card-2.jpg' },
        ],
    },
    {
        id: 5,
        title: 'مرحله چهارم',
        description:
            'گامی بعدی پس از مدلسازی طرح ها رندرینگ و نورپردازی پروژه هاتون هست، در این مرحله نیاز دارید که با نرم افزار لومیون آشنا بشید و بتونید اثر معماری خود را به بهترین فرم ارائه کنید',
        courses: [
            { title: 'برنامه نویسی Front End', imageUrl: '/static/images/courses-card-1.jpg' },
            { title: 'برنامه نویسی Front End', imageUrl: '/static/images/courses-card-2.jpg' },
        ],
    },
];

export const promotionBoxData = [
    {
        media_url: '/static/images/contact-desktop-min.jpg',
        mobile_media_url: '/static/images/contact-mobile-min.jpg',
        title: 'بازار کار معماری در سال ۲۰۲۰',
        descriptions: 'برای مشاوره رایگان شماره تماس و دوره مورد نظرتون رو اینجا بنویسید',
        buttonTitle: formatMessage('promotionBox.send'),
        link_url: '#',
        as: '#',
    },
];

export const mockSpecialPackageData = {
    package: {
        header_title:'title',
        seo_title: 'learning-path',
        header_descriptions: 'description',
        discount: '50',
        original_price: 200,
        price_with_discount: 100,
        courses:[
            { id: 1, thumbnail_media: '/static/images/mock-course-1.jpg', header_title: 'دوره آموزشی رویت', price: '۳۵۰.۰۰۰' },
            { id: 2, thumbnail_media: '/static/images/mock-course-2.jpg', header_title: 'دوره آموزشی راینو', price: '۳۵۰.۰۰۰' },
            { id: 3, thumbnail_media: '/static/images/mock-course-6.jpg', header_title: 'دوره آموزشی اسکچ آپ', price: '۳۵۰.۰۰۰' },
        ]
    },
    moreInfo: {
        href: paths.PATH_SPECIAL_COURSE,
        as: routes.ROUTE_SPECIAL_COURSE,
    },
    specialPackageItem: [
        { id: 1, imageUrl: '/static/images/mock-course-1.jpg', title: 'دوره آموزشی رویت', price: '۳۵۰.۰۰۰' },
        { id: 2, imageUrl: '/static/images/mock-course-2.jpg', title: 'دوره آموزشی راینو', price: '۳۵۰.۰۰۰' },
        { id: 3, imageUrl: '/static/images/mock-course-6.jpg', title: 'دوره آموزشی اسکچ آپ', price: '۳۵۰.۰۰۰' },
    ],
};
