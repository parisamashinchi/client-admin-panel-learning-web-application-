import React from 'react';
import Style from './style';
import {Col, Card} from "antd";

const CommentCards = ({data}) => {
    const {profile_media, name, content} = data;
    return (
        <Style>
            <div className="card-wrapper">
                <Card>
                    <Col span={6} >
                        <img src={profile_media} alt={name} />
                        <h4>{name}</h4>
                    </Col>
                    <Col span={18}>
                        <p className="description">
                             {content}
                        </p>
                    </Col>
                </Card>
            </div>
        </Style>
    );
};
export default CommentCards;
