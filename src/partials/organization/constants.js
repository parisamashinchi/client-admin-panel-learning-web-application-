import {formatMessage} from 'localization';
export const CONTACT_US_URL = '/shared/contactus';
export const heroData = {
    title: formatMessage('organization.hero.title'),
    description: formatMessage('organization.hero.description'),
    thumbnail: '/static/images/organization-hero-bg.jpg',
    thumbnail_mobile: '/static/images/organization-hero-bg-mobile.jpg',
    hasButton: true,
};

export const organizationItemData = [
    {
        id: 1,
        imageUrl: '/static/images/organization-1.svg',
        title: 'نیازسنجی آموزشی',
        description:
            'متخصصین ما در صورت نیاز برای مشاوره و نیازسنجی وارد تعامل با سازمان شما خواهند شد و با طراحی پرسشنامه‌های اختصاصی نیازهای آموزشی سازمان شما را بررسی و تحلیل می‌کنند. پس از ارزیابی سازمان و تهیه گزارش، دوره‌های آموزشی مورد نیاز سازمان شما گرداوری و درصورت درخواست آنها را با استفاده از آخرین متدهای تولید محتوا طراحی و تولید می‌کنند',
        backgroundUrl: '/static/images/path-3.svg',
        imageLeft: false,
    },
    {
        id: 2,
        imageUrl: '/static/images/organization-2.svg',
        title: 'تولید محتوا اختصاصی',
        description:
            'آموزال با استفاده از تکنولوژی های روز در صنعت آموزش، دوره های اختصاصی برای سازمان شما تولید می‌کند، و با بهره گیری از تجربه خود در برگزاری دوره‌های آنلاین با استفاده از تکنیک‌های مناسب، محتوا را در اختیار فراگیران قرار می‌دهد.',
        backgroundUrl: '/static/images/path-4.svg',
        imageLeft: true,
    },
    {
        id: 3,
        imageUrl: '/static/images/organization-3.svg',
        title: 'آزمون و ارزیابی آموزشی',
        description:
            'ما در کنار محتوا با طراحی تمرین و آزمون به تثبیت فرآیند یادگیری کمک می‌کنیم و در پایان دوره کارنامه اختصاصی برای تمامی فراگیران صادر می‌کنیم و در نهایت به مهارت‌جویانی که با موفقیت دوره‌های خود را پشت سر گذاشته باشند از طرف آموزال گواهینامه معتبر اعطامی‌گردد.',
        backgroundUrl: '/static/images/path-5.svg',
        imageLeft: false,
    },
    {
        id: 4,
        imageUrl: '/static/images/organization-4.svg',
        title: 'پشتیبانی ۲۴/۷',
        description:
            'ما در مسیر یادگیری همراه سازمان شما هستیم، متخصصین ما در هر ساعت از شبانه روز پاسخگوی سوالات کارکنان شما هستند. فراگیران سازمان به صورت آنلاین و آفلاین امکان ارسال سوالات خود را دارند. مدرسین و آموزیاران ما به صورت فرد به فرد به فرد به سوالات دانشپذیران پاسخ خواهند داد',
        backgroundUrl: '/static/images/path-6.svg',
        imageLeft: true,
    },
];
