import React from 'react';
import Style from './style';
import IntlMessages from 'utils/intlMessages';
import {toPersianNumber} from "../../utils/getters/PersianNumber";

const FactorList = (data) => {
    const {done_at,name, national_code_or_passport_number, score, serial_number, title, teachers} = data.data
    return (
        <Style>
            <ul className="item-list">
                <li>{name}</li>
                <li>
                    <IntlMessages id="sell.factorContent.nationalNum" />
                    { toPersianNumber(national_code_or_passport_number)}
                </li>
                <li>
                    <IntlMessages id="sell.factorContent.certificateNum" />
                    {toPersianNumber(serial_number)}
                </li>
                <li>
                    <IntlMessages id="sell.factorContent.dateOfDegree" />
                    {toPersianNumber(done_at)}
                </li>
                <li>
                    <IntlMessages id="sell.factorContent.courseName" />
                    {title}
                </li>
                <li>
                    <IntlMessages id="sell.factorContent.teacherName" />
                   { teachers[0].name}
                </li>
                <li>
                    <IntlMessages id="sell.factorContent.finalGrade" />
                    {toPersianNumber(score)}
                </li>
            </ul>
        </Style>
    );
};
export default FactorList;
