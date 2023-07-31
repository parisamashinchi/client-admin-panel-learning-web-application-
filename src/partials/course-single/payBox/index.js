import React from 'react';
import Style from './style';
import PayCard from './payCard';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';

const PayBox = ({data, url}) => {
    return (
        <Style>
            <ResponsiveBox>
                <ResponsivePadding>
                    <PayCard data={data} url={url} />
                </ResponsivePadding>
            </ResponsiveBox>
        </Style>
    );
};
export default PayBox;
