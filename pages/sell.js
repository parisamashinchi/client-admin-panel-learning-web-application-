import React from 'react';
import Style from 'partials/sell/style';
import DefaultLayout from 'layouts/defaultLayout';
import ResponsiveBox from 'components/uiElements/responsiveBox';
import ResponsivePadding from 'components/uiElements/responsivePadding';
import PHelmet from 'components/pHelmet';
import {formatMessage} from 'localization';
import FactorContent from 'partials/sell/factorContent';
import FactorItem from 'partials/sell/factorItem';
import * as constants from 'partials/sell/constants';

const Sell = () => {
    return (
        <DefaultLayout blackBackground>
            <PHelmet title={formatMessage('sell.meta.title')} description={formatMessage('sell.meta.title')} schema={true} />
            <Style>
                <ResponsiveBox>
                    <ResponsivePadding>
                        <div className="fixed-background" />
                        <FactorItem data={constants.sellTitle}>
                            <FactorContent />
                        </FactorItem>
                    </ResponsivePadding>
                </ResponsiveBox>
            </Style>
        </DefaultLayout>
    );
};
export default Sell;
