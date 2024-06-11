import { Col, Image, Row } from "antd"

const ActivityPage: React.FC = () => {


    const itemStyles: React.CSSProperties = {
        backgroundColor: "#C4EBF8",
        padding: "20px 30px",
        color: "#6D758F",
        borderRadius: 10,
        boxShadow: "1px 1px 3px grey"
    }


    return (
        <Row gutter={[0, 50]}>
            {/* cach thuc hoat dong */}
            <Row align={"middle"} justify={"center"}>
                <Col span={24}>
                    <Row align={"middle"} justify={"center"}>
                        <h1>Cách thức hoạt động</h1>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row align={"middle"} justify={"center"}>
                        <Image src="https://s3-alpha-sig.figma.com/img/3d51/ad49/a5a2c593da6a3afe3c4132d08ac91d15?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cw4T705Tj4cWriflwsDThx681oiXOi62mr7hLiOLc5T-OOgOT5bzmgiAlcB4BtIAny21UluPaZeAO4txMYOknQUv9e~amQCa3s0RjmOofxhxCqcjfKVKMd~Kd8YJ4NMAam5GZxR6O9RclCiBusUkSepmw1xnaD1aAP2xK7Vm2BlxuO2kEpDu3wfmt3bi9egY6tbZUEUFaOiRuojF29tWddZ6aa-KweuEM8pWZPYEK6dZYuajliJHLAT9YXgxs2KVJgLs1J2wLP~zbh~TfJ0fZNZfJp9OpHQdjWt2RQN2cX~VgRx1c3GPbsBlutpq9BS0RJ4sWC39nGxj3SbaeqJ0zw__"></Image>
                    </Row>
                </Col>
                <Col span={16}>
                    <Row gutter={[20, 20]}>
                        <Col span={12}>
                            <Row>
                                <h2>Hoạt động</h2>
                                <p>Lorem ipsum dolor sit amet consectetur.
                                    Arcu odio eros pellentesque ac condimentum nisi.
                                    Eros non porttitor laoreet auctor accumsan.
                                    Lacinia pellentesque neque convallis auctor proin.
                                    Ut turpis vel interdum eu pulvinar.
                                    Sit posuere ultrices scelerisque amet nunc tincidunt. </p>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <h2>Hoạt động</h2>
                                <p>Lorem ipsum dolor sit amet consectetur.
                                    Arcu odio eros pellentesque ac condimentum nisi.
                                    Eros non porttitor laoreet auctor accumsan.
                                    Lacinia pellentesque neque convallis auctor proin.
                                    Ut turpis vel interdum eu pulvinar.
                                    Sit posuere ultrices scelerisque amet nunc tincidunt. </p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* quy trinh dua don */}
            <Row gutter={[20, 10]} justify={"space-between"} >
                <Col span={24}>
                    <Row justify={"center"}>
                        <h1>Quá trình đưa đón</h1>
                    </Row>
                </Col>
                <Col xl={7} style={itemStyles}>
                    <Row>
                        <h4>Đặt xe</h4>
                        <p>Phụ huynh vào trang của KidGo để đặt xe cho
                            con mình. Sau đó KidGo sẽ sắp xếp xe để đón
                            con của phụ huynh tại điểm đón.</p>

                    </Row>
                </Col>
                <Col xl={7} style={itemStyles}>
                    <Row>
                        <h4>Đặt xe</h4>
                        <p>Phụ huynh vào trang của KidGo để đặt xe cho
                            con mình. Sau đó KidGo sẽ sắp xếp xe để đón
                            con của phụ huynh tại điểm đón.</p>
                    </Row>
                </Col>
                <Col xl={7} style={itemStyles}>
                    <Row>
                        <h4>Đặt xe</h4>
                        <p>Phụ huynh vào trang của KidGo để đặt xe cho
                            con mình. Sau đó KidGo sẽ sắp xếp xe để đón
                            con của phụ huynh tại điểm đón.</p>
                    </Row>
                </Col>
            </Row>


            {/* cach thuc hoat dong */}
            <Row gutter={[30, 0]} align={"middle"} justify={"center"}>
                <Col span={14}>
                    <img width={"100%"} src="https://s3-alpha-sig.figma.com/img/99b0/b0e3/cb45d8772992c6b6dfac6384b5056856?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWGMwvUXxzYgDCHdtcSFu3b5QwkjEybShcazMNgu~Lo10dHvJ-sjJGApOH7LewSeRIjYsFSrMXY0CArlK-uWdJ4TGxze1AsYoKpXNoUKlp1MIPSzGP0YYv9YcXC9xVlLh6DN7tHtF-MUWE8wDE5tWfVJhTmjnEKdCnZZoUlxqOOYcjNg3hLGruuQtIEUz7HdWY446hh5-QGh9Q9Zlgti7vbp2aAi5wZxBZ0RzrEVpKmeL5DH9~PbJ456i8GrPdQ5z8i8-Srbl6j9FfLUJ~w1blp3gsBjy54DP0ggbrWfUK87hqv~JVaKtwgkru37nO3meYZOj6gR4zh8yKc0TLiqoA__" />
                </Col>
                <Col span={10}>
                    <Row>
                        <h1>Cách thức hoạt động</h1>
                    </Row>
                    <Row gutter={[0, 30]}>
                        <Col span={24}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
                                Arcu odio eros pellentesque ac condimentum nisi.
                                Eros non porttitor laoreet auctor accumsan. Lacinia pellentesque neque convallis auctor proin. Ut turpis vel interdum eu pulvinar.
                                Sit posuere ultrices scelerisque amet nunc tincidunt.
                            </p>
                        </Col>
                        <Col span={24}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
                                Arcu odio eros pellentesque ac condimentum nisi.
                                Eros non porttitor laoreet auctor accumsan. Lacinia pellentesque neque convallis auctor proin. Ut turpis vel interdum eu pulvinar.
                                Sit posuere ultrices scelerisque amet nunc tincidunt.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>


            {/* cap nhat thong tin qua zalo */}

            <Row style={{ flexDirection:"row-reverse", marginBottom: 50 }} align={"middle"}>
                <Col className="phone_image" span={14}>
                    <Row>
                        <img draggable={false}  src="https://s3-alpha-sig.figma.com/img/1001/0d5f/1c0a4cd119f631f9011bc2fc0816e774?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=onIJNS35IH2-yRPljuXr3sKEKVMDecHMeK3GLvTACGhRyZLWeUiTrqe1uq-PEB2WkZfFIJk5JUrDSi3WWYfix63JRjBp5f7glrqDZICJHWwmeCYdsiRBD3KhaqWC9AckOKVJQTzOeCIb8pGO2X-~kaUXr75bej3WLaQw6Vnm5MelzSGwFs4YIfJHuk4yQew99cqwqfUqUW8Uy7bSzJHj0QEHI1tpdnLxQSO~J3r-On4VAkD3PqZzjsxzNecbzOFdxF4fmN4-UfF2J0fPGR8673vcyPn-bWUawBwVJ26~UNl0USTI2AVIVqIbSgQkfSG1CfGP47jpcJMiP-E70TN1pg__" />
                    </Row>
                    <div className="msg_2">
                        <div className="msg_2--detail">
                            <h3>Bảo mẫu 1</h3>
                            <p>Bé đã đến trường</p>
                        </div>
                    </div>
                    <div className="msg_3">
                        <div className="msg_3--detail">
                            <h3>Bảo mẫu 1</h3>
                            <p>Xe sẽ ghé điểm đón trong 5 phút nữa ! </p>
                        </div>
                    </div>
                </Col>
                <Col span={10}>
                    <Row>
                        <h1>Cách thức hoạt động</h1>
                    </Row>
                    <Row gutter={[0, 30]}>
                        <Col span={24}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
                                Arcu odio eros pellentesque ac condimentum nisi.
                                Eros non porttitor laoreet auctor accumsan. Lacinia pellentesque neque convallis auctor proin. Ut turpis vel interdum eu pulvinar.
                                Sit posuere ultrices scelerisque amet nunc tincidunt.
                            </p>
                        </Col>
                        <Col span={24}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
                                Arcu odio eros pellentesque ac condimentum nisi.
                                Eros non porttitor laoreet auctor accumsan. Lacinia pellentesque neque convallis auctor proin. Ut turpis vel interdum eu pulvinar.
                                Sit posuere ultrices scelerisque amet nunc tincidunt.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}

export default ActivityPage