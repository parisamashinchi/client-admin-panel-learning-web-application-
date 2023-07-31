import React from 'react';
import paths from 'paths';
import routes from 'routes';
import CertificateIcon from 'static/icons/certificate.svg';
import GroupIcon from 'static/icons/group.svg';
import RulerIcon from 'static/icons/ruler.svg';
import PartnerIcon from 'static/icons/partner.svg';
import { formatMessage } from 'localization';

export const COURSE_API_URL = 'shared/course/seo_title';
export const FAQ_API_URL = 'admin/faq';
export const USER_PANEL_URL = 'shared/user_panel_url';
export const GET_VIDEO_URL = 'public_v1/course';
export const PACKAGE_URL = '/shared/course';


export const CREATE_INVOICE_URL = '/student/invoice/buy';

export const mockTwoColumnDetailData = {
    id: 1,
    imageUrl: '/static/images/portada.jpg',
    title: 'درباره دوره',
    description:
        'دوره رویت پیش روی شما بر اساس روش مهندسی معکوس تدوین و ارایه شده است. بر خلاف آموزشهای رایج، آموزش کاملا از دل کار و بر اساس سطح بندی از آسان به سخت ، نکته های عملی در ساخت «ویلاهای کوچک» را دسته بندی کرده و مابین آن به کاربرد ابزارهای موجود در نرم افزار رویت میپردازد.(انتخاب ساختمانهای ویلایی به علت متنوع بودن تکنیکهای استفاده شده در آن بوده است.) .ما پس از آموزش و درحین آموزش در کنارتان خواهیم بود و امکان رفع اشکال به صورت آنلاین وجوددارد',
};

export const mockSpecialPackageData = {
    moreInfo: {
        href: paths.PATH_SPECIAL_COURSE,
        as: routes.ROUTE_SPECIAL_COURSE,
    },
    specialPackageItem: [
        {
            id: 1,
            imageUrl: '/static/images/mock-course-1.jpg',
            title: 'دوره آموزشی رویت',
            price: '۳۵۰.۰۰۰',
        },
        {
            id: 2,
            imageUrl: '/static/images/mock-course-2.jpg',
            title: 'دوره آموزشی راینو',
            price: '۳۵۰.۰۰۰',
        },
        {
            id: 3,
            imageUrl: '/static/images/mock-course-6.jpg',
            title: 'دوره آموزشی اسکچ آپ',
            price: '۳۵۰.۰۰۰',
        },
        {
            id: 4,
            imageUrl: '/static/images/mock-course-6.jpg',
            title: 'دوره آموزشی اسکچ آپ',
            price: '۳۵۰.۰۰۰',
        },
        {
            id: 5,
            imageUrl: '/static/images/mock-course-6.jpg',
            title: 'دوره آموزشی اسکچ آپ',
            price: '۳۵۰.۰۰۰',
        },
        {
            id: 6,
            imageUrl: '/static/images/mock-course-6.jpg',
            title: 'دوره آموزشی اسکچ آپ',
            price: '۳۵۰.۰۰۰',
        },
        {
            id: 7,
            imageUrl: '/static/images/mock-course-1.jpg',
            title: 'دوره آموزشی رویت',
            price: '۳۵۰.۰۰۰',
        },
    ],
};

export const mockTeacherCardItem = [
    {
        id: 1,
        imageUrl: '/static/images/teacher-1.jpg',
        title: 'سجاد زمانی',
        subTitle: 'مدرس دوره',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
    {
        id: 2,
        imageUrl: '/static/images/kentico-logo.png',
        title: 'آتلیه معماری مهرازان طاق و رف',
        subTitle: 'شرکت همکار',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
    {
        id: 3,
        imageUrl: '/static/images/teacher-1.jpg',
        title: 'سجاد زمانی',
        subTitle: 'مدرس دوره',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
    {
        id: 4,
        imageUrl: '/static/images/kentico-logo.png',
        title: 'آتلیه معماری مهرازان طاق و رف',
        subTitle: 'شرکت همکار',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
    {
        id: 5,
        imageUrl: '/static/images/teacher-1.jpg',
        title: 'سجاد زمانی',
        subTitle: 'مدرس دوره',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
    {
        id: 6,
        imageUrl: '/static/images/teacher-1.jpg',
        title: 'سجاد زمانی',
        subTitle: 'مدرس دوره',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
    {
        id: 7,
        imageUrl: '/static/images/teacher-1.jpg',
        title: 'سجاد زمانی',
        subTitle: 'مدرس دوره',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
];

export const mockCourseDetailData = {
    courseDescription:
        'دوره رویت پیش روی شما بر اساس روش مهندسی معکوس تدوین و ارایه شده است. بر خلاف آموزشهای رایج، آموزش کاملا از دل کار و بر اساس سطح بندی از آسان به سخت ، نکته های عملی در ساخت «ویلاهای کوچک» را دسته بندی کرده و مابین آن به کاربرد ابزارهای موجود در نرم افزار رویت میپردازد.(انتخاب ساختمانهای ویلایی به علت متنوع بودن تکنیکهای استفاده شده در آن بوده است.) .ما پس از آموزش و درحین آموزش در کنارتان خواهیم بود و امکان رفع اشکال به صورت آنلاین وجود دارد',
    courseDuration: 'مدت برگزاری دوره: 12 هفته',
    courseTopicTitle: 'سرفصل‌های آموزشی دوره رویت',
    courseTopicSubtitle: 'جزئیات دوره',
    courseTopicPhasesData: [
        {
            id: 1,
            title: 'فاز اول: چگونه در رویت شروع به کار کنیم؟',
            description:
                'در این فاز با مقدمات و ابزارهای نرم افزار رویت اشنا خواهید شد به طوری که پس از انجام تمرینات این فصل نقشه‌های نرم افزار اتوکد را به راحتی داخل نرم افزار وارد میکنید و می‌توانید کار مدل سازی 3 بعدی را شروع کنید',
            active: true,
            unlocked: true,
        },
        {
            id: 2,
            title: 'فاز دوم: مقدمات یک ویلای کوچک(اضافه کردن در ،دیوار و پنجره و کف)',
            description:
                'در این فاز نحوه ساخت دیوار، سقف، کفپوش، پنجره و در را تمرین می‌کنیم به طوری که در پایان این فاز شما قادر خواهید بود که یک اسکلت کامل از یک ساختمان را طراحی و آنرا در ابعاد واقعی تحلیل کنید',
            active: true,
            unlocked: true,
        },
        {
            id: 3,
            title: 'فاز سوم: چگونه ویلا را مبله کنیم؟',
            description:
                'ما قصد داریم در فاز سوم یک ویلای کامل را طراحی داخلی کنیم و تمامی متریال و وسایل را به صورت سه بعدی با نرم افزار رویت بسازیم، همچنین خواهیم آموخت که چطور پوسته و تکستچر برای وسایل و اجسام بسازیم',
            active: true,
            unlocked: true,
        },
    ],
    preRequisiteBoxData: {},
};

export const mockPriceBoxData = [
    {
        id: 1,
        title: 'قیمت دوره با مدرک',
        price: '۲۱۰.۰۰۰',
        description:
            'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
        buttonTitle: 'انتخاب دوره',
        discounted: false,
    },
    {
        id: 2,
        title: 'قیمت دوره با مدرک',
        price: '۲۱۰.۰۰۰',
        description:
            'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
        buttonTitle: 'انتخاب دوره',
        golden: true,
        discounted: false,
    },
    {
        id: 3,
        title: 'قیمت دوره با مدرک',
        price: '۲۱۰.۰۰۰',
        description:
            'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
        buttonTitle: 'انتخاب دوره',
        golden: false,
        discounted: false,
    },
    {
        id: 4,
        title: 'قیمت دوره با مدرک',
        price: '۲۱۰.۰۰۰',
        description:
            'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
        buttonTitle: 'انتخاب دوره',
        golden: true,
        discounted: false,
    },
    {
        id: 5,
        title: 'قیمت دوره با مدرک',
        price: '۲۱۰.۰۰۰',
        description:
            'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
        buttonTitle: 'انتخاب دوره',
        golden: false,
        discounted: false,
    },
];

export const mockSocialDetailData = [
    {
        id: 1,
        image: <CertificateIcon />,
        title: formatMessage('courseSingle.socialDetail.features.certificateText'),
    },
    {
        id: 2,
        image: <GroupIcon />,
        title: formatMessage('courseSingle.socialDetail.features.groupText'),
    },
    {
        id: 3,
        image: <RulerIcon />,
        title: formatMessage('courseSingle.socialDetail.features.rulerText'),
    },
    {
        id: 4,
        image: <PartnerIcon />,
        title: formatMessage('courseSingle.socialDetail.features.partnerText'),
    },
];
