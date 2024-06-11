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
        <Row style={{ margin: "30px 0px", border: "1px solid black", padding: 30, borderRadius: 10, borderWidth: "thick" }} gutter={[20, 0]} align={"middle"} justify={"center"}>
            <Col span={17}>
                <Image width={"100%"} src="../../product.png" alt="product" />
            </Col>
            <Col span={1} style={{ height: "80vh" }}>
                <Divider style={{borderColor:"rgba(0,0,0,0.4)", height:"100%" }} type="vertical" />
            </Col>
            <Col span={6}>
                <Row style={{ textAlign: "center" }} justify={"center"}>
                    <Col className="item" span={24}>
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
                        <h1 style={{ fontSize: 40, color: "lightskyblue" }}>Các bạn chờ nhé !</h1>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductPage