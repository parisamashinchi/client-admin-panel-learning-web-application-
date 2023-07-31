import React from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import Button from 'components/uiElements/button';
import FactorList from 'components/factorList';

const FactorContent = () => {
    return (
        <Style>
            <div className="factor-content">
                <FactorList />
                <Button formButton className="btn-back">
                    <IntlMessages id="button.back" />
                </Button>
            </div>
        </Style>
    );
};
export default FactorContent;
