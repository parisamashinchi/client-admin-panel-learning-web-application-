import Style from './style';

const Modal = ({ children, ...rest }) => {
    return (
        <Style destroyOnClose {...rest}>
            {/* <i className="modal-close" onClick={rest && rest.onCancel}> */}
            {/*close icon*/}
            {/* </i> */}
            {children}
        </Style>
    );
};
export default Modal;
