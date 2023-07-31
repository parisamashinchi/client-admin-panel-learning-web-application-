import Style from './style';
import PropTypes from 'prop-types';

const Button = props => {
    const { className, style, loading, solid, color, onClick, children, formButton, htmlType } = props;
    return (
        <Style {...props}>
            <span className={loading ? 'invisible' : ''}>{children}</span>
        </Style>
    );
};
Button.propTypes = {
    className: PropTypes.string,
    formButton: PropTypes.bool,
    htmlType: PropTypes.string,
    onClick: PropTypes.object,
    loading: PropTypes.bool,
    solid: PropTypes.bool,
    style: PropTypes.object,
};
export default Button;
