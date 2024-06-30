import { useEffect } from "react";
import "./landingpage.css";
import { Col, Image, Input, Row } from "antd";
import ActivityPage from "./howitwork_page";
import ContactPage from "./contact";
import FeedBackItem, { ParentFeedBackProps } from "./components/feedback/feedbackitem";

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


  const zaloStyles: React.CSSProperties = {
    width: "70%",
    backgroundColor: "#328EAE",
    color: "white",
    margin: "0 auto",
    padding: "35px",
    borderRadius: "10px",
    textAlign: "left",
    display: "grid",
    gap: 10
  }


  const fakeData: ParentFeedBackProps[] = [
    {
      avartar: "https://i.pravatar.cc/150?img=21",
      feedback: "Từ khi sử dụng dịch vụ bên KidGo thì tôi có nhiều thời gian cho bản thân hơn, và cũng rất an tâm. Đặc biệt, việc tích hợp camera và GPS cũng giúp tôi theo dõi lộ trình của con dễ dàng hơn. Cảm ơn KidGo rất nhiều!",
      parentName: "Nguyễn Phương Hồng"
    },
    {
      avartar: "https://i.pravatar.cc/150?img=14",
      feedback: "Ứng dụng này thiệt sự tiện lợi cho các bậc phụ huynh như tôi. Con tôi cũng rất mến các bác tài xế và cô bảo mẫu, nên tôi cũng phần nào giảm bớt được gánh nặng đưa đón hằng ngày.",
      parentName: "Nguyễn Văn Minh"
    },
    {
      avartar: "https://i.pravatar.cc/150?img=5",
      feedback: "Dịch vụ bên KidGo mình thấy rất chuyên nghiệp, các bác tài cũng rất đúng giờ. Việc theo dõi lộ trình giúp mình biết mấy giờ con sẽ về đến nhà nên rất yên tâm. Mình sẽ giới thiệu cho bạn bè cùng sử dụng.",
      parentName: " Trần Thu Hà"
    },
    {
      avartar: "https://i.pravatar.cc/150?img=16",
      feedback: "Tôi rất ấn tượng với mô hình bên KidGo, việc sử dụng không cần đăng ký gói dài hạn giúp tôi tiết kiệm được rất nhiều. Đồng thời, tôi cũng không cần lo lắng sẽ bận việc mà đón con muộn.",
      parentName: "Lâm Tú Anh"
    },
    {
      avartar: "https://i.pravatar.cc/150?img=17",
      feedback: "Mình nghĩ KidGo là một giải pháp thông minh và hiệu quả cho các gia đình bận rộn. Mình cũng rất thích việc đăng ký nhanh chóng nên sẽ tiếp tục ủng hộ KidGo.",
      parentName: "Hồ Duy Anh"
    },
  ]

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
          <h1 className="title-center">LỊCH SỬ HÌNH THÀNH</h1>
          <Row>
            <Col xs={24} md={8} xl={8} className="timeline-item">
              <img loading="lazy" src="light_bulb.png" alt="History 1" className="img-3" />
              <h3 className="subtitle">Lịch sử hình thành</h3>
              <p className="description">
                Khi thời đại phát triển, phụ huynh luôn trong vòng xoay bận rộn giữa việc cân bằng công việc và gia đình.
                Vì thế, có lúc họ sẽ gặp khó khăn trong việc đưa đón trẻ đi học. Với lý do đó, KidGo ra đời.
                Là một ứng dụng hỗ trợ phụ huynh đưa đón con trẻ khi họ bận việc.
              </p>
            </Col>
            <Col xs={24} md={8} xl={8} className="timeline-item">
              <img loading="lazy" src="light_bulb.png" alt="History 2" className="img-4" />
              <h3 className="subtitle">Lịch sử hình thành</h3>
              <p className="description">
                Ra mắt vào năm 2024
              </p>
            </Col>
            <Col xs={24} md={8} xl={8} className="timeline-item">
              <img loading="lazy" src="light_bulb.png" alt="History 3" className="img-5" />
              <h3 className="subtitle">Lịch sử hình thành</h3>
              <p className="description">
                Trong tương lai, chúng tôi cam kết tiếp tục nâng cao chất lượng dịch vụ và mang lại những trải nghiệm tốt nhất cho người dùng.
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
      <Row style={{ flexDirection: "row-reverse" }} justify={"center"} align={"middle"}>
        <Col xs={22} md={24} xl={14} style={{ textAlign: "center" }}>
          <Row justify={"center"}>
            <h1 className="title">CẬP NHẬP THÔNG TIN QUA ZALO</h1>
          </Row>
          <Row gutter={[0, 30]}>
            <Col span={24}>
              <p>
                Để đảm bảo phụ huynh luôn nắm bắt được thông tin về hành trình của con em mình,
                KidGo đã tích hợp hệ thống thông báo qua Zalo, bên cạnh các nền tảng mạng xã hội như Facebook và
                Instagram. Các thông báo qua Zalo bao gồm:

              </p>
            </Col>
            <Col span={24}>
              <Row>
                <ol style={zaloStyles}>
                  <li>
                    Xác nhận OTP khi đăng ký dịch vụ: Phụ huynh sẽ nhận được mã xác nhận OTP để hoàn tất quá trình đăng ký dịch vụ.
                  </li>
                  <li>
                    Xác nhận đặt chỗ thành công: Khi phụ huynh đặt chỗ cho con em mình, hệ thống sẽ gửi thông báo xác nhận đặt chỗ thành công.
                  </li>
                  <li>
                    Thông báo sắp tới giờ đón học sinh: Trước khi xe đến trường đón học sinh, phụ huynh sẽ nhận được thông báo nhắc nhở.
                  </li>
                  <li>
                    Thông báo đã đón học sinh: Khi học sinh đã lên xe an toàn, phụ huynh sẽ nhận được thông báo xác nhận.
                  </li>
                  <li>
                    Thông báo đã trả học sinh về nhà: Sau khi học sinh đã được đưa về nhà an toàn, phụ huynh sẽ nhận được thông báo xác nhận.
                  </li>
                  <li>
                    Lời cảm ơn phụ huynh đã sử dụng dịch vụ: Cuối mỗi chuyến đi, KidGo sẽ gửi lời cảm ơn tới phụ huynh đã tin tưởng và
                    sử dụng dịch vụ của chúng tôi.
                  </li>
                </ol>
              </Row>
            </Col>
          </Row>
        </Col>


        <Col xs={24} md={15} xl={10} className="phone_image" >
          <Row justify={"center"}>
            <Col xs={24} md={24} xl={24}>
              <img width={"100%"} height={"100%"} src="handwithphone.png" alt="phone" />
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
          <h1 className="title" style={{ color: "white" }}>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>
        </Col>

        <Col xs={24} md={20} xl={20}>
          <Row gutter={[0, 20]} style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
            {fakeData.length > 0 ?
              fakeData.map((feedback) => (
                <FeedBackItem avartar={feedback.avartar} feedback={feedback.feedback} parentName={feedback.parentName} />
              ))
              :
              <></>
            }

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