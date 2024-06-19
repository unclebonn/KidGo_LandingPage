import { useEffect } from "react";
import "./landingpage.css";
import { Col, Image, Input, Row } from "antd";
import ActivityPage from "./howitwork_page";
import ContactPage from "./contact";
import FeedBackItem from "./components/feedback/feedbackitem";

type MyComponentProps = {};

const LandingPage: React.FC<MyComponentProps> = () => {
  const handleClick = (message: string) => {
    alert(message);
  };

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
    <Row className="div">
      <Col style={{ paddingTop: 120 }} span={24} id="landing_page">
        <section className="item">
          <Row justify={"center"}>
            <Col xs={22} md={10} xl={10} className="text-section">
              <h2 className="title">VỀ CHÚNG TÔI</h2>
              <p id="info" className="description">
                Với thời đại phát triển và nền kinh tế khó khăn hiện tại, phụ huynh phải hết sức mình làm việc vì để cho con họ có một cuộc sống tốt hơn. Vì thế, cũng sẽ có lúc họ bận rộn mà không thể đến đón con trẻ học tại trường được, khi đó họ không thể nhờ người thân đón trẻ, thì bây giờ phải làm sao?

                Vì lý do đó, KidGo ra đời.

                <br /><br />
                Là một ứng dụng thay thế phụ huynh đưa đón con trẻ khi họ bận việc. Với tiêu chí là chất lượng và an toàn nhất có thể, phụ huynh có thể an tâm khi sử dụng dịch vụ.
              </p>
            </Col>
            <Col xs={22} md={10} xl={10}>
              <img loading="lazy" src="car.png" alt="About Us" className="img-2" />
            </Col>
          </Row>
        </section>
      </Col>

      <Col span={24}>
        <section className="history">
          <h1 className="title-center">Lịch sử hình thành</h1>
          <Row>
            <Col xs={24} md={8} xl={8} className="timeline-item">
              <img loading="lazy" src="light_bulb.png" alt="History 1" className="img-3" />
              <h3 className="subtitle">Lịch sử hình thành</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Nulla convallis dignissim purus ipsum enim praesent feugiat.
                Elit morbi augue eu faucibus in eget nunc. Quis scelerisque gravida nunc neque quam magna egestas.
              </p>
            </Col>
            <Col xs={24} md={8} xl={8} className="timeline-item">
              <img loading="lazy" src="light_bulb.png" alt="History 2" className="img-4" />
              <h3 className="subtitle">Lịch sử hình thành</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Nulla convallis dignissim purus ipsum enim praesent feugiat.
                Elit morbi augue eu faucibus in eget nunc. Quis scelerisque gravida nunc neque quam magna egestas.
              </p>
            </Col>
            <Col xs={24} md={8} xl={8} className="timeline-item">
              <img loading="lazy" src="light_bulb.png" alt="History 3" className="img-5" />
              <h3 className="subtitle">Lịch sử hình thành</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Nulla convallis dignissim purus ipsum enim praesent feugiat.
                Elit morbi augue eu faucibus in eget nunc. Quis scelerisque gravida nunc neque quam magna egestas.
              </p>
            </Col>
          </Row>
        </section>
      </Col>

      <Col span={24}>
        <section className="mission item">
          <Row gutter={[0, 30]} align={"middle"} justify={"center"}>
            <Col xs={22} md={10} xl={10} style={{ textAlign: "center" }}>
              <Row>
                <Col span={24}>
                  <h2 className="title">Tầm nhìn</h2>
                  <p className="emphasis">
                    Tối đa hóa an toàn cho trẻ em khi sử dụng dịch vụ đưa đón khi đến trường. Trở thành người đồng hành tin cậy hàng đầu thay phụ huynh đưa đón trẻ
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <h2 className="title">Sứ mệnh</h2>
                  <p className="emphasis">
                    Tối đa hóa an toàn cho trẻ em khi sử dụng dịch vụ đưa đón khi đến trường. Trở thành người đồng hành tin cậy hàng đầu thay phụ huynh đưa đón trẻ
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={22} md={12} xl={14}>
              <img width={"100%"} src="bro.png" />
            </Col>
          </Row>
        </section>
      </Col>



      <Col style={{ paddingTop: 100 }} id="activitypage">
        <ActivityPage />
      </Col>

      {/* cap nhat thong tin qua zalo */}
      <Row style={{ flexDirection: "row-reverse" }} justify={"space-between"} align={"bottom"}>
        <Col xs={22} md={12} xl={14} style={{ paddingRight: 50, paddingTop: 50, textAlign: "center", paddingBottom: 30 }}>
          <Row justify={"center"}>
            <h1>CẬP NHẬP  THÔNG TIN QUA ZALO</h1>
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


        <Col xs={24} md={12} xl={10} className="phone_image" >
          <Row justify={"center"}>
            <Col xs={24} md={24} xl={24}>
              <img width={"100%"} src="handwithphone.png" alt="phone" />
            </Col>
            <Row>
              <Col xs={0} md={0} xl={24} className="msg_1">
                <Col xs={0} md={0} xl={24} className="msg_1--detail">
                  <h3>Bảo mẫu</h3>
                  <p>Bé đã đến trường</p>
                </Col>
              </Col>
              <Col xs={0} md={0} xl={24} className="msg_2">
                <Col xs={0} md={0} xl={24} className="msg_2--detail">
                  <h3>Bảo mẫu</h3>
                  <p>Xe sẽ ghé điểm đón trong 5 phút nữa!</p>
                </Col>
              </Col>
              <Col xs={0} md={0} xl={24} className="msg_3">
                <Col xs={0} md={0} xl={24} className="msg_3--detail">
                  <h3>Bảo mẫu</h3>
                  <p>Xe sẽ đến đón trong 15 phút nữa!</p>
                </Col>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>


      {/* danh gia cua khach hang */}
      <Row gutter={[0, 30]} justify={"center"} style={{ width: "100%", padding: "50px 0px", backgroundColor: "#328EAE" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h1 style={{ color: "white" }}>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>
          <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <div>
              <p style={{ color: "white" }}>Nunc fringilla at consequat varius mauris elementum.
                Cras volutpat quis rhoncus rutrum sed bibendum posuere.
                Diam sed at pulvinar sapien amet. Quam sagittis lobortis urna viverra auctor augue.</p>

            </div>
          </div>
        </Col>

        <Col xs={24} md={20} xl={20}>
          <Row gutter={[0, 20]} style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
            <FeedBackItem />
            <FeedBackItem />
            <FeedBackItem />
            <FeedBackItem />
            <FeedBackItem />

          </Row>
        </Col>

      </Row>

      <Col span={22} className="item" id="contactpage">
        <ContactPage />
      </Col>


    </Row >
  );
};

export default LandingPage;