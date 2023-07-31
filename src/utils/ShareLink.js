const SHARE_LINK_FACEBOOK = 'http://www.facebook.com/sharer.php';
const SHARE_LINK_TWITTER = 'https://twitter.com/share';
const SHARE_LINK_PINTEREST = () =>
    `javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());`;

export const socialTypes = {
    facebook: 'facebook',
    twitter: 'twitter',
    pinterest: 'pinterest',
};

const ShareLink = ({ link, title = '', socialType, children }) => {
    let shareLink = '';
    switch (socialType) {
        case socialTypes.facebook:
            shareLink = `${SHARE_LINK_FACEBOOK}?u=${link}`;
            break;
        case socialTypes.twitter:
            shareLink = `${SHARE_LINK_TWITTER}?url=${link}&amp;text=${title}`;
            break;
        case socialTypes.pinterest:
            shareLink = SHARE_LINK_PINTEREST();
            break;
    }
    return (
        <a href={shareLink} target="_blank" title={title}>
            {children}
        </a>
    );
};
export default ShareLink;
