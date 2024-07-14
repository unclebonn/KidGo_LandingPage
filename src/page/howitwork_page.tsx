import { Col, Image, Row } from "antd"
import { useEffect } from "react";

const ActivityPage: React.FC = () => {


    const itemStyles: React.CSSProperties = {
        backgroundColor: "#328EAE",
        padding: "20px 30px",
        color: "#6D758F",
        borderRadius: 10,
        boxShadow: "1px 1px 3px grey"
    }


    const paragraphStyles: React.CSSProperties = {
        color: "white"
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
                        <h1 className="title">CÁCH THỨC HOẠT ĐỘNG</h1>
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
                            <Row wrap={false}>
                                <Col span={24}>
                                    <h2>Hoạt động</h2>
                                    <p>KidGo tự hào mang đến cho phụ huynh và học sinh dịch vụ đưa đón an toàn, tiện lợi và chuyên nghiệp.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={20} md={24} xl={24}>
                            <Row>
                                <Col>
                                    <h2>Hoạt động</h2>
                                    <p>Với lộ trình được tính toán kỹ lưỡng, KidGo không chỉ giúp tiết kiệm thời gian mà còn đảm bảo sự
                                        an tâm cho phụ huynh trong mỗi chuyến đi. Dưới đây là quy trình hoạt động và cách thức cập nhật thông tin của KidGo.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* quy trinh dua don */}
            <Row className="item" gutter={[0, 10]}>
                <Col span={24}>
                    <Row justify={"center"}>
                        <h1 className="title" style={{ fontSize: "35px" }}>Quá trình đưa đón</h1>
                    </Row>
                </Col>

                <Row justify={"center"}>
                    <Col span={22}>
                        <Row gutter={[0, 20]} justify={"space-between"} >
                            <Col xs={24} md={7} xl={7} style={itemStyles}>
                                <Row>
                                    <h2 style={paragraphStyles}>Đặt xe</h2>
                                    <p style={paragraphStyles}>Phụ huynh vào trang của KidGo để đặt xe cho
                                        con mình. Sau đó KidGo sẽ sắp xếp xe để đón
                                        con của phụ huynh tại điểm đón.</p>

                                </Row>
                            </Col>
                            <Col xs={24} md={7} xl={7} style={itemStyles}>
                                <Row>
                                    <h2 style={paragraphStyles}>Xe đưa đón của Kidgo</h2>
                                    <p style={paragraphStyles}>Xe của chúng tôi sẽ đến đón trẻ tại điểm
                                        đón và đưa trẻ đến trường. Sau khi tan học thì
                                        xe sẽ đưa trẻ về lại điểm đón. Thời gian đưa
                                        đón có thể bị chênh lệch phụ thuộc
                                        tình trạng giao thông của tuyến đường.</p>
                                </Row>
                            </Col>
                            <Col xs={24} md={7} xl={7} style={itemStyles}>
                                <Row>
                                    <h2 style={paragraphStyles}>Cập nhật liên tục</h2>
                                    <p style={paragraphStyles}>Trước và sau khi trẻ đi xe, phụ huynh sẽ được
                                        cập nhập hình ảnh của con mình.</p>
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
                            <h1 className="title">Văn hoá làm việc</h1>
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
                                Công ty luôn mong muốn các bạn đồng hành phải không ngừng suy nghĩ, bay bổng với những idea,
                                tuy có thể khó thực hiện, hơi điên rồ, nhưng phải nghĩ để trí óc được sử dụng hết mức có thể.
                            </p>
                        </Col>
                        <Col span={24}>
                            <p>
                                Dám nói, nói lên idea của mình để mọi người cùng hiểu.
                                Có thể 1 người thì idea đó khó thực hiện nhưng với nhiều người thì điều đó không phải điều không thể.
                            </p>
                        </Col>
                        <Col span={24}>
                            <p>
                                Cuối cùng là dám thực hiện, công ty luôn mong muốn các bạn đồng hành phải dám thực hiện,
                                tìm hiểu, khảo sát, làm bất cứ mọi thứ để thực hiện được điều mong muốn. Nếu kết quả trả lại là fail thì bạn cũng đừng buồn,
                                vì bạn đã cố gắng thực hiện, thất bại là mẹ thành công và cũng là bước đệm để bạn thực hiện những điều tuyệt vời khác.
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
                                Công ty luôn mong muốn các bạn đồng hành phải không ngừng suy nghĩ, bay bổng với những idea,
                                tuy có thể khó thực hiện, hơi điên rồ, nhưng phải nghĩ để trí óc được sử dụng hết mức có thể.
                            </p>
                        </Col>
                        <Col span={24}>
                            <p>
                                Dám nói, nói lên idea của mình để mọi người cùng hiểu.
                                Có thể 1 người thì idea đó khó thực hiện nhưng với nhiều người thì điều đó không phải điều không thể.
                            </p>
                        </Col>
                        <Col span={24}>
                            <p>
                                Cuối cùng là dám thực hiện, công ty luôn mong muốn các bạn đồng hành phải dám thực hiện,
                                tìm hiểu, khảo sát, làm bất cứ mọi thứ để thực hiện được điều mong muốn. Nếu kết quả trả lại là fail thì bạn cũng đừng buồn,
                                vì bạn đã cố gắng thực hiện, thất bại là mẹ thành công và cũng là bước đệm để bạn thực hiện những điều tuyệt vời khác.
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
        </Row>
    )
}

export default ActivityPage
