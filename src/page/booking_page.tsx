import { Col, Divider, Image, Row } from "antd"
import { useEffect } from "react"

const ProductPage: React.FC = () => {


    useEffect(() => {
        const items = document.querySelectorAll('.item');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible_bookingpage');
                    entry.target.classList.remove('hidden');
                    // observer.unobserve(entry.target);
                } else {
                    entry.target.classList.add('hidden');
                    entry.target.classList.remove('visible_bookingpage');
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
        <Row style={{ paddingTop: 100 }} justify={"center"}>
            <Col span={22}>
                <Row style={{ margin: "30px 0px", border: "1px solid black", padding: 30, borderRadius: 10, borderWidth: "thick" }} gutter={[20, 0]} align={"top"} justify={"start"}>
                    <Col xs={24} md={17} xl={17}>
                        <Image width={"100%"} src="../../product.png" alt="product" />
                    </Col>
                    <Col xs={0} md={1} xl={1} style={{ height: "80vh" }}>
                        <Divider style={{ borderColor: "rgba(0,0,0,0.4)", height: "100%" }} type="vertical" />
                    </Col>
                    <Col xs={24} md={0} xl={0}>
                        <Divider style={{ borderColor: "rgba(0,0,0,0.4)", height: "100%" }} type="horizontal" />
                    </Col>

                    <Col xs={24} md={6} xl={6}>
                        <div>
                            <h1>Sản phẩm thử nghiệm hiện đã có ở</h1>
                        </div>
                        <a target="_blank" href="https://drive.usercontent.google.com/download?id=1xYwy701gLTwOGrESJUE_I8y5HRt7bTQY&export=download&authuser=0&confirm=t&uuid=84f621e3-502e-4efc-a26e-689778a94e0b&at=APZUnTVkaUb9Hfu0hnm2d9pPRWcS%3A1720945224650">
                            <img width={240} height={100} src="chplay.png" alt="chplay" />
                        </a>
                    </Col>
                    {/* <Col xs={24} md={6} xl={6}>
                        <Row style={{ textAlign: "center" }} justify={"center"}>
                            <Col className="item" span={24} style={{ textAlign: "center" }}>
                                <h1 style={{ margin: 0, fontSize: 40 }}>Sản phẩm sẽ sớm được hoàn thiện</h1>
                            </Col>

                            {/* <Col className="item" span={24}>
                                <h1 style={{ margin: 0, fontSize: 80 }}>Sản</h1>
                            </Col>
                            <Col className="item" span={24} style={{ textAlign: "right" }}>
                                <h1 style={{ margin: 0, fontSize: 40 }}>phẩm</h1>
                            </Col>
                            <Col className="item" span={12} style={{ textAlign: "right" }}>
                                <h1 style={{ fontSize: 30 }}>sẽ</h1>
                            </Col>
                            <Col className="item" span={12}>
                                <h1 style={{ fontSize: 30 }}>sớm</h1>
                            </Col>
                            <Col className="item" span={12}>
                                <h1 style={{ fontSize: 30 }}>được</h1>
                            </Col>
                            <Col className="item" span={12}>
                                <h1 style={{ fontSize: 30 }}>hoàn</h1>
                            </Col>
                            <Col className="item" span={12}>
                                <h1 style={{ fontSize: 30 }}>thiện !</h1>
                            </Col> 

                    <Col className="item" span={24}>
                        <h1 style={{ fontSize: 40, color: "lightskyblue" }}>Các bạn chờ nhé!</h1>
                    </Col>
                </Row>
            </Col> */}
                </Row>
            </Col >

        </Row >
    )
}

export default ProductPage