import Style from './style';

const Spinner = ({ loading, fixed, children }) => {
    return loading ? (
        <Style fixed={fixed}>
            <div className="spinner-container">
                {children}
                <div className="spinner">
                    <span className="loading-spinner" />
                </div>
            </div>
        </Style>
    ) : (
        children
    );
};
export default Spinner;
