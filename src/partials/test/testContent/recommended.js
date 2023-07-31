import React  from "react";
import IntlMessages from 'utils/intlMessages';
import Card from 'components/card';
import Swiper from 'components/swiper';

const Recommended = (props) => {
    const {recommended_courses, score, total_question, level} = props.exam.data.data;
    const swiperParams = {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            1300: { slidesPerView: 3 },
            700: { slidesPerView: 2 },
            480: { slidesPerView: 1.4 },
        },
    };
    const renderItem = course => {
        return <Card data={course}  type="test" />;
    };
        return (
            <div>
               <h2>
                   <IntlMessages id="test.question.answer1" />
                   {score}
                    <IntlMessages id="test.question.answer2" />
                   {total_question}
                    <IntlMessages id="test.question.answer3" />
               </h2>
                <p>
                    <IntlMessages id="test.question.student.level" />
                    {level}
                </p>
                <h3>
                    <IntlMessages id="test.question.recommended" />
                </h3>
                <Swiper data={recommended_courses} renderItem={({item}) => renderItem(item)} itemClassName="card-item"
                        {...swiperParams}  />
            </div>
        );
    };

export default Recommended;
