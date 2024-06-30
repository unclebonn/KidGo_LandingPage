import { Button, Col, Form, Input, Row } from "antd"

const ContactPage: React.FC = () => {


    const contactStyles: React.CSSProperties = {
        backgroundColor: "#328EAE",
        padding: "50px",
        borderRadius: 10,
        boxShadow: "1px 1px 3px grey"
    }

    return (
        <Row gutter={[0, 30]} style={{ margin: "20px 0px" }} align={"middle"} justify={"center"}>
            {/* lien lac chung toi */}
            <Col style={{paddingTop:80}} span={24}>
                <Row align={"middle"} justify={"center"}>
                    <h1>Thông tin tư vấn</h1>
                </Row>
                <Row align={"middle"} justify={"center"}>
                    <p>Nếu có bất kỳ câu hỏi nào về các dịch vụ của KidGo, vui lòng liên hệ với chúng tôi</p>
                </Row>
            </Col>
            <Col xs={24} md={10} xl={8}>
                <h4>Liên lạc chúng tôi qua</h4>
                <Row align={"middle"}>
                    <Col xs={4} md={5} xl={4}>
                        <Row>
                            <div>
                                <img src="../../email_icon.png" alt="" />
                            </div>

                        </Row>
                    </Col>
                    <Col xs={20} md={19} xl={20}>
                        <Row>
                            <div>
                                <h4 style={{ margin: 0 }}>Email</h4>
                                <p>ungdungkidgo@gmail.com</p>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row align={"middle"}>
                    <Col xs={4} md={5} xl={4}>
                        <div>
                            <img src="../../phone_icon.png" alt="" />
                        </div>
                    </Col>
                    <Col xs={20} md={19} xl={20}>
                        <div>
                            <h4 style={{ margin: 0 }}>Số điện thoại</h4>
                            <p>093 343 80 42</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <h4>Các mạng xã hội của KidGo</h4>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[5, 0]}>
                            <Col xs={2} md={2} xl={2}>
                                <a target="_blank" href="https://www.facebook.com/profile.php?id=61559638062969">
                                    <img src="../../Facebook.png" alt="" />
                                </a>
                            </Col>
                            <Col xs={2} md={2} xl={2}>
                                <a target="_blank" href="https://www.instagram.com/kidgo_2024">
                                    <img src="../../Instagram.png" alt="" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>



            {/* thong tin tu van */}
            <Col xs={24} md={14} xl={16} style={contactStyles}>
                <Form layout="vertical">
                    <Row>
                        <Col span={24}>
                            <Form.Item name="fullname" label="Họ và tên">
                                <Input placeholder="Lê Huỳnh Minh" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[20, 0]}>
                        <Col span={12}>
                            <Form.Item name="phone" label="Số điện thoại">
                                <Input placeholder="Lê Huỳnh Minh" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="email" label="Email">
                                <Input placeholder="Lê Huỳnh Minh" type="email" />
                            </Form.Item>
                        </Col>
                    </Row>


                    <Row>
                        <Col span={24}>
                            <Form.Item name="note" label="Tin nhắn">
                                <Input.TextArea placeholder="Lê Huỳnh Minh" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <button className="contactBtn" style={{ backgroundColor: "rgb(250 191 3 / 30%)", padding: "10px 20px", borderRadius: 8 }} type="submit">Đăng ký</button>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default ContactPage