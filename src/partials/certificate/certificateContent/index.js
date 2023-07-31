import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import { Col, Row } from 'antd';
import basicStyle from 'theme/style';
import FactorList from 'components/factorList';
import ReactToPrint from 'react-to-print';
class ComponentToPrint extends React.Component {
    render() {
        return (
            <div className="certificate-image">
            <img src={this.props.data} alt="certificate"/>
            </div>
        );
    }
}
class CertificateContent extends React.Component {
render(){
    const { rowStyle } = basicStyle;
    const {file_name, title} = this.props.data
    const downloadCertificate = url => {
        fetch(url).then(res => res.blob()).then(blob => {
            let a = document.createElement('a');
            let url = window.URL.createObjectURL(blob);
            let filename = 'certificate.jpeg';
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        })
    }
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="fixed-background" />
                    <div className="certificate-content">
                        <Row type="flex" className="gutter-pre-style-lg-50 gutter-pre-style-md-30" style={rowStyle} gutter={{ lg: 50, md: 30 }}>
                            <Col lg={7} md={8} xs={24}>
                                <div className="factor-section">
                                    <FactorList  data={this.props.data}/>
                                </div>
                            </Col>
                            <Col lg={17} md={16} xs={24}>
                                <div className="image-section">
                                    <div className="image-section-header">
                                        <h3 className="title">گواهینامه { title}</h3>
                                        <div className="icons">
                                            <ReactToPrint
                                                trigger={() => <a href="#"> <img id="printer" src="/static/icons/printer.svg" /></a>}
                                                content={() => this.componentRef}
                                            />
                                            <button  onClick={() =>downloadCertificate(file_name)}>
                                                <img id="upload" src="/static/icons/upload.svg" />
                                            </button>
                                        </div>
                                    </div>
                                    <ComponentToPrint ref={el => (this.componentRef = el)} data={file_name}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
    }
};
export default CertificateContent;
