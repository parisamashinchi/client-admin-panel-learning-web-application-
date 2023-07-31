import paths from 'paths';
import routes from 'routes';

export const SLIDE_SHOW_API_URL = 'shared/slider';
export const ALBUM_API_URL = 'shared/album';
export const PARALLEL_API_URL = 'shared/parallel';
export const QUOTES_API_URL = 'shared/teacher/quote';
export const ACHIEVEMENT_API_URL = 'public_v1/other_link';
export const USER_PANEL_URL = 'shared/user_panel_url';
export const BANNER_URL = 'public_v1/banner';


export const mockSlideShows = [
    {
        id: 1,
        media_url: '/static/images/slide-show-banner.jpg',
        title: '1',
        descriptions: 'آموزال سامانه مهارت‌آموزی آنلاین',
        link_url: '#',
    },
    {
        id: 2,
        media_url: '/static/images/organization-hero-bg.jpg',
        title: '2',
        descriptions: 'آموزال سامانه مهارت‌آموزی آنلاین',
        link_url: '#',
    },
    {
        id: 3,
        media_url: '/static/images/mock-suggested-course.jpg',
        title: '3',
        descriptions: 'آموزال سامانه مهارت‌آموزی آنلاین',
        link_url: '#',
    },
];

export const mockAchievements = [
    {
        id: 1,
        image: 'icon-certificate.svg',
        title: 'home.achievements.firstBoxTitle',
    },
    {
        id: 2,
        image: 'icon-art-and-design.svg',
        title: 'home.achievements.secondBoxTitle',
    },
    {
        id: 3,
        image: 'icon-support.png',
        title: 'home.achievements.thirdBoxTitle',
    },
    {
        id: 4,
        image: 'icon-devices.svg',
        title: 'home.achievements.fourthBoxTitle',
    },
];

export const mockCourses = [
    {
        id: 1,
        thumbnail: '/static/images/mock-course-1.jpg',
        title: 'دوره آموزشی رویت',
        teacherName: 'سجاد زمانی',
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        href: `${paths.PATH_COURSE_SINGLE}/1`,
        as: `${routes.ROUTE_COURSE_SINGLE}`,
    },
    {
        id: 2,
        thumbnail: '/static/images/mock-course-2.jpg',
        title: 'دوره آموزشی رویت',
        teacherName: 'سجاد زمانی',
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        href: `${paths.PATH_COURSE_SINGLE}/1`,
        as: `${routes.ROUTE_COURSE_SINGLE}`,
    },
    {
        id: 3,
        thumbnail: '/static/images/mock-course-3.jpg',
        title: 'دوره آموزشی رویت',
        teacherName: 'سجاد زمانی',
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        href: `${paths.PATH_COURSE_SINGLE}/1`,
        as: `${routes.ROUTE_COURSE_SINGLE}`,
    },
    {
        id: 4,
        thumbnail: '/static/images/mock-course-4.jpg',
        title: 'دوره آموزشی رویت',
        teacherName: 'سجاد زمانی',
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        href: `${paths.PATH_COURSE_SINGLE}/1`,
        as: `${routes.ROUTE_COURSE_SINGLE}`,
    },
    {
        id: 5,
        thumbnail: '/static/images/mock-course-5.jpg',
        title: 'دوره آموزشی رویت',
        teacherName: 'سجاد زمانی',
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        href: `${paths.PATH_COURSE_SINGLE}/1`,
        as: `${routes.ROUTE_COURSE_SINGLE}`,
    },
    {
        id: 6,
        thumbnail: '/static/images/mock-course-6.jpg',
        title: 'دوره آموزشی رویت',
        teacherName: 'سجاد زمانی',
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        href: `${paths.PATH_COURSE_SINGLE}/1`,
        as: `${routes.ROUTE_COURSE_SINGLE}`,
    },
];

export const mockTeacherSlideShows = [
    {
        id: 1,
        image: '/static/images/mock-top-teacher.jpg',
        title: '!یادگیری راحت‌تر از همیشه',
        description:
            'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته چگونگی نوع و اندازه فونت و ظاهر متن باشد.',
        url: '#',
    },
    {
        id: 2,
        image: '/static/images/mock-top-teacher.jpg',
        title: '!یادگیری راحت‌تر از همیشه',
        description:
            'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته چگونگی نوع و اندازه فونت و ظاهر متن باشد.',
        url: '#',
    },
    {
        id: 3,
        image: '/static/images/mock-top-teacher.jpg',
        title: '!یادگیری راحت‌تر از همیشه',
        description:
            'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته چگونگی نوع و اندازه فونت و ظاهر متن باشد.',
        url: '#',
    },
];

export const suggestedMockCourse = {
    image: '/static/images/mock-suggested-course.jpg',
    title: 'دوره‌های مهارت‌آموزی رشته معماری',
    description: 'با ارائه گواهی‌نامه معتبر دانشگاه امیرکبیر ',
    href: paths.PATH_LEARNING_PATH,
    as: routes.ROUTE_LEARNING_PATH,
};

export const achievementDetailList = [
    {
        id: 1,
        image: '/static/images/mock-certificate.jpg',
        title: 'گواهینامه معتبر دانشگاه امیرکبیر ',
        description: 'فراگیرانی که بتوانند با انجام تمرین‌‌ها و پروژه‌ها و پشت سر گذاشتن آزمون‌ها نمره قبولی دوره را کسب کنند، واجد\n' +
            'شرایط دریافت گواهینامه دانشگاه صنعتی امیرکبیر خواهند بود. گواهینامه به صورت انگلیسی صادر خواهد شد و قابل\n' +
            'اعتبار‌سنجی به صورت آنلاین در سایت دانشگاه امیرکبیر است.',
        titlePath: 'گواهینامه دانشگاه امیرکبیر (پلی تکنیک تهران) ',
        descriptionPath: 'پس از اتمام دوره و قبولی در ارزیابی پایانی، گواهینامه معتبر دانشگاه امیرکبیر را دریافت خواهید کرد. این گواهینامه به زبان انگلیسی است و قابلیت اعتبار سنجی آنلاین دارد، اگر قصد استخدام یا اپلای دارید در دوره های مدرک‌دار آموزال ثبت نام کنید.',
        imageRight: 'true',
        hasShadow: true,
    },
    {
        id: 2,
        image: '/static/images/achievement-img-1.jpg',
        title: 'آموزش پروژه محور',
        description:'محتوای دوره‌های آموزشی با توجه به نیاز بازار کار و با مشورت متخصصین فعال در صنعت تولید شده است. سرفصل‌های دوره با نگاه کاربردی جمع آوری شده و تمرین‌ها از روی پروژه‌های واقعی طراحی شده است. تلاش ما برگزاری دوره‌های مهارت محور برای فراگیران است.',
        hasShadow: true,
    },
    {
        id: 3,
        image: '/static/images/achievement-img-2.jpg',
        title: 'رفع اشکال و پشتیبانی',
        description: 'در فرآیند برگزاری دوره‌ها کانال‌هایی برای ارتباط با مدرسین و آموزش‌یاران در نظر گرفته شده است تا فراگیران سوالات خود را مطرح کنند و پاسخ خود در کمترین زمان دریافت کنند. این کانال‌ها امکان هم‌افزایی و تبادل دانش بین فراگیران را نیز فراهم کرده است.',
        imageRight: 'true',
        hasShadow: true,
    },
    {
        id: 4,
        image: '/static/images/achievement-img-3.png',
        title: 'دسترسی بدون محدودیت',
        description: 'زیر ساخت یکپارچه پلفترم آموزال این امکان را در اختیار فراگیران قرار می‌دهد تا با استفاده از هر ابزاری که به اینترنت متصل باشد مثل کامپیوتر، تبلت یا موبایل بتوانند بدون محدودیت به محتوای دوره‌ی آموزشی خود دسترسی داشته باشند.',
    },
];
