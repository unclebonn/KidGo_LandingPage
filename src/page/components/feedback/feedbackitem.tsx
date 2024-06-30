import { Avatar, Col, Row } from "antd"
import React from "react"

export interface ParentFeedBackProps {
    avartar: string,
    feedback: string,
    parentName: string
}

const FeedBackItem: React.FC<ParentFeedBackProps> = ({ feedback, parentName,avartar }) => {

    const feedbackStyle: React.CSSProperties = {
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        height: "100px",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
    }

    return (
        <Col style={{ marginRight: 10 }} xs={20} md={14} xl={8}>
            <Row gutter={[0, 20]} style={{ backgroundColor: "white", padding: "15px 20px", borderRadius: "10px" }}>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <p style={feedbackStyle}>
                                {feedback}
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row align={"middle"} justify={"space-between"}>
                        <Col span={6} >
                            <Avatar shape="circle" size={40} src={avartar} />
                        </Col>
                        <Col span={18}>
                            <h2 style={{ margin: 0 }}>{parentName}</h2>
                            <p>Phụ huynh</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default FeedBackItem