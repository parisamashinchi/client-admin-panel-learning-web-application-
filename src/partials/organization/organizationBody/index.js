import React from 'react';
import Style from './style';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import map from 'lodash/map';
import OrganizationBodyItem from './organizationBodyItem';
import PropTypes from 'prop-types';

const OrganizationBody = ({data}) => {
    const renderFarm = () => {
        return map(data, item => {
            return <OrganizationBodyItem key={item.id} data={item} />;
        });
    };
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <div className="organization-body">
                        <div className="organization-item-container">{renderFarm()}</div>
                    </div>
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default OrganizationBody;

OrganizationBody.propTypes = {
    data: PropTypes.object.isRequired,
};
