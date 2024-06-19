import { Avatar, Col, Row } from "antd"
import React from "react"

const FeedBackItem: React.FC = () => {
    return (
        <Col style={{marginRight:10}} xs={20} md={14} xl={8}>
            <Row gutter={[0, 20]} style={{ backgroundColor: "white", padding: "15px 20px", borderRadius: "10px" }}>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            “Lorem ipsum dolor sit amet consectetur. Sagittis egestas nisl nisi sociis pellentesque nibh egestas cras tempus.
                            Vitae ullamcorper arcu lobortis lectus faucibus maecenas. Malesuada donec elementum nec dolor vulputate cursus velit metus ornare”
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row align={"middle"} justify={"space-between"}>
                        <Col span={6} >
                            <Avatar shape="circle" size={40} src="user.png" />
                        </Col>
                        <Col span={18}>
                            <h2 style={{ margin: 0 }}>Nguyễn Phương Hồng</h2>
                            <p>Phụ huynh</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default FeedBackItem