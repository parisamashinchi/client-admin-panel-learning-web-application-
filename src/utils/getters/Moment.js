import moment from 'jalali-moment';
import config from 'src/config';

const Moment = ({ className, diff, format = 'YYYY-MM-DD', children }) => {
    if (isNaN(Date.parse(children.toString())) == true) {
        return <snan />;
    }
    let dateTime = '';
    if (diff) {
    } else {
        dateTime = moment(children.toString())
            .locale(config.language, { useGregorianParser: true })
            .format(format);
    }
    return <span className={className}>{dateTime}</span>;
};
export default Moment;
