import React from "react";

export const COURSE_LIST_API_URL = 'shared/course';
export const DEPARTMENT_ALL_API_URL = '/shared/department/all';
export const DEPARTMENT_LIST_URL = '/shared/department';
export const DEPARTMENT_LIST_API_URL = '/shared/department/';
export const PACKAGE_LIST_API_URL = 'shared/package';
export const USER_PANEL_URL = 'shared/user_panel_url';
export const GET_PROFILE_INFO_URL = 'student';
export const GET_TOKEN_URL = '/shared/mystery';
export const LEARNING_PATH_URL = 'shared/learning_path';

export const heroData = {
    thumbnail: '/static/images/hero-course-list.jpg',
    thumbnail_mobile: '/static/images/hero-course-list_mobile.jpg',
    title:  "لیسـت دوره‌هــا",

};

export const mockCourses = [
    {
        id: 1,
        image: '/static/images/mock-course-1.jpg',
        title: 'دوره آموزشی رویت',
        description:
            'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی ',
        hasCertificate: false,
        level: 1,
        categories: [{ id: 1, title: 'معمـاری', color: '#D3F7FF' }],
        tags: [{ id: 1, title: 'نقشه کشی' }],
        certificate: { image: '/static/icons/mock-certificate-badge.png' },
    },
    {
        id: 2,
        image: '/static/images/mock-course-2.jpg',
        title: 'دوره‌ آموزش راینو',
        description:
            'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی ',
        hasCertificate: false,
        level: 3,
        categories: [{ id: 1, title: 'معمـاری', color: '#D3F7FF' }],
        tags: [{ id: 1, title: 'مدل سازی' }],
        certificate: { image: '/static/icons/mock-certificate-badge.png' },
    },
    {
        id: 3,
        image: '/static/images/mock-course-3.jpg',
        title: 'دوره‌ آموزش آناتومی',
        description:
            'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی ',
        hasCertificate: false,
        level: 2,
        categories: [{ id: 1, title: 'طراحی لباس', color: '#F9D3FF' }],
        tags: [{ id: 1, title: 'آناتومی' }],
        certificate: { image: '/static/icons/mock-certificate-badge.png' },
    },
    {
        id: 4,
        image: '/static/images/mock-course-4.jpg',
        title: 'دوره آموزش ETABS',
        description:
            'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی ',
        hasCertificate: false,
        level: 1,
        categories: [{ id: 1, title: 'عمران', color: '#FFE8D3' }],
        tags: [{ id: 1, title: 'سازه' }],
        certificate: { image: '/static/icons/mock-certificate-badge.png' },
    },
    {
        id: 5,
        image: '/static/images/mock-course-5.jpg',
        title: 'دوره آموزش طراحی داخلی',
        description:
            'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی ',
        hasCertificate: false,
        level: 3,
        categories: [{ id: 1, title: 'معمـاری', color: '#D3F7FF' }],
        tags: [{ id: 1, title: 'طراحی داخلی' }],
        certificate: { image: '/static/icons/mock-certificate-badge.png' },
    },
    {
        id: 6,
        image: '/static/images/mock-course-6.jpg',
        title: 'دوره آموزش لومیون',
        description:
            'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی ',
        hasCertificate: false,
        level: 3,
        categories: [{ id: 1, title: 'معمـاری', color: '#D3F7FF' }],
        tags: [{ id: 1, title: 'رندرینگ' }],
        certificate: { image: '/static/icons/mock-certificate-badge.png' },
    },
];

export const mockFilters = [
    {
        id: 1,
        title: 'دسته‌بندی دوره‌ها',
        filters: [
            {
                id: 1,
                title: 'معمـاری',
            },
            {
                id: 2,
                title: 'عمـران',
            },
            {
                id: 3,
                title: 'مکانیـک',
            },
            {
                id: 4,
                title: 'بــرق',
            },
            {
                id: 5,
                title: 'کامپیوتــر',
            },
            {
                id: 6,
                title: 'صنایــع',
            },
            {
                id: 7,
                title: 'طراحی لباس',
            },
        ],
    },
    {
        id: 2,
        title: 'سطح دوره‌',
        filters: [
            {
                id: 1,
                title: 'مقدماتی',
            },
            {
                id: 2,
                title: 'متوسط',
            },
            {
                id: 3,
                title: 'پیشرفته',
            },
        ],
    },
    {
        id: 3,
        title: 'انواع دوره‌',
        filters: [
            {
                id: 1,
                title: 'با مدرک',
            },
            {
                id: 2,
                title: 'خودآموز',
            },
        ],
    },
];
