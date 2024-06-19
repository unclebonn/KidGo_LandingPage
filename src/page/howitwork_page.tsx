import { Col, Image, Row } from "antd"
import { useEffect } from "react";

const ActivityPage: React.FC = () => {


    const itemStyles: React.CSSProperties = {
        backgroundColor: "#C4EBF8",
        padding: "20px 30px",
        color: "#6D758F",
        borderRadius: 10,
        boxShadow: "1px 1px 3px grey"
    }


    useEffect(() => {
        const items = document.querySelectorAll('.item');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                    // observer.unobserve(entry.target);
                } else {
                    entry.target.classList.add('hidden');
                    entry.target.classList.remove('visible');
                }
            },
                {
                    rootMargin: '0px 0px -20% 0px'
                }
            );
        });

        items.forEach(item => {
            observer.observe(item);
        });
    }, [])

    return (
        <Row style={{ margin: "30px 0px" }} gutter={[0, 50]}>
            {/* cach thuc hoat dong */}
            <Row className="item" align={"middle"} justify={"center"}>
                <Col xs={24} md={24} xl={24}>
                    <Row align={"middle"} justify={"center"}>
                        <h1>Cách thức hoạt động</h1>
                    </Row>
                </Col>


                <Col xs={24} md={12} xl={12}>
                    <Row justify={"center"}>
                        <img width={"70%"} src="phone.png" alt="phone" />
                    </Row>
                </Col>
                <Col xs={24} md={10} xl={10}>
                    <Row gutter={[0, 20]} justify={"center"}>
                        <Col xs={20} md={24} xl={24}>
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
                        <Col xs={20} md={24} xl={24}>
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
            <Row className="item" gutter={[0, 10]}>
                <Col span={24}>
                    <Row justify={"center"}>
                        <h1>Quá trình đưa đón</h1>
                    </Row>
                </Col>

                <Row justify={"center"}>
                    <Col span={22}>
                        <Row gutter={[0, 20]} justify={"space-between"} >
                            <Col xs={24} md={7} xl={7} style={itemStyles}>
                                <Row>
                                    <h4>Đặt xe</h4>
                                    <p>Phụ huynh vào trang của KidGo để đặt xe cho
                                        con mình. Sau đó KidGo sẽ sắp xếp xe để đón
                                        con của phụ huynh tại điểm đón.</p>

                                </Row>
                            </Col>
                            <Col xs={24} md={7} xl={7} style={itemStyles}>
                                <Row>
                                    <h4>Đặt xe</h4>
                                    <p>Phụ huynh vào trang của KidGo để đặt xe cho
                                        con mình. Sau đó KidGo sẽ sắp xếp xe để đón
                                        con của phụ huynh tại điểm đón.</p>
                                </Row>
                            </Col>
                            <Col xs={24} md={7} xl={7} style={itemStyles}>
                                <Row>
                                    <h4>Đặt xe</h4>
                                    <p>Phụ huynh vào trang của KidGo để đặt xe cho
                                        con mình. Sau đó KidGo sẽ sắp xếp xe để đón
                                        con của phụ huynh tại điểm đón.</p>
                                </Row>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Row>


            {/* van hoa lam viec */}
            <Row className="item" gutter={[0, 30]} align={"middle"} justify={"center"}>
                <Col xs={0} md={10} xl={10} style={{ textAlign: "right" }}>
                    <Row>
                        <Col span={24}>
                            <h1>Văn hoá làm việc</h1>
                        </Col>
                        <Col span={24} style={{ margin: "10px 0px" }}>
                            <q>
                                Dám nghĩ - dám nói - dám thực hiện
                            </q>
                        </Col>
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
                <Col xs={22} md={0} xl={0} style={{ textAlign: "center" }}>
                    <Row>
                        <Col span={24}>
                            <h1>Văn hoá làm việc</h1>
                        </Col>
                        <Col span={24} style={{ margin: "10px 0px" }}>
                            <q>
                                Dám nghĩ - dám nói - dám thực hiện
                            </q>
                        </Col>
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
                <Col xs={24} md={12} xl={12}>
                    <Row justify={"center"}>
                        <img width={"70%"} src="piglet.png" alt="pig" />
                    </Row>
                </Col>
            </Row>


            {/* cap nhat thong tin qua zalo */}


        </Row>
    )
}

export default ActivityPage