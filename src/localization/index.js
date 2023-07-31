import Falang from './entries/fa_IR';
import {addLocaleData} from 'react-intl';
import config from 'config';
import get from 'lodash/get';
import each from 'lodash/each';

const AppLocale = {
    fa: Falang,
};
addLocaleData(AppLocale.fa.data);

export default AppLocale;

export const formatMessage = (id, values) => {
    const localeMessages = get(AppLocale, `${config.locale}.messages`, {});
    let message = localeMessages[id] ? localeMessages[id] : id;
    if (values) {
        each(values, (value, key) => (message = message.replace(key, value)));
        message = message
            .split('{')
            .join('')
            .split('}')
            .join('');
    }
    return message;
};
