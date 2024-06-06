import { useEffect } from "react";
import "./landingpage.css";
import { Input } from "antd";

type MyComponentProps = {};

const MyComponent: React.FC<MyComponentProps> = () => {
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
        }else {
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
    <div className="div">
      <header className="header">
        <div className="logo">
          <img loading="lazy" src="kidgoLogo.png" alt="Logo" className="img" />
        </div>
        <nav className="nav">
          <div className="nav-links">
            <button className="nav-link" onClick={() => handleClick('Trang chủ')}>Trang chủ</button>
            <button className="nav-link" onClick={() => handleClick('Hoạt động')}>Hoạt động</button>
            <button className="nav-link" onClick={() => handleClick('Liên hệ')}>Liên hệ</button>
            <button className="nav-link" onClick={() => handleClick('Blog')}>Blog</button>
          </div>
          <button className="cta" onClick={() => handleClick('Đặt xe')}>Đặt xe</button>
        </nav>
      </header>

      <section className="about item">
        <div className="content">
          <div className="text-section">
            <h2 className="title">VỀ CHÚNG TÔI</h2>
            <p id="info" className="description">
              Với thời đại phát triển và nền kinh tế khó khăn hiện tại, phụ huynh phải hết sức mình làm việc vì để cho con họ có một cuộc sống tốt hơn. Vì thế, cũng sẽ có lúc họ bận rộn mà không thể đến đón con trẻ học tại trường được, khi đó họ không thể nhờ người thân đón trẻ, thì bây giờ phải làm sao?

              Vì lý do đó, KidGo ra đời.

              <br /><br />
              Là một ứng dụng thay thế phụ huynh đưa đón con trẻ khi họ bận việc. Với tiêu chí là chất lượng và an toàn nhất có thể, phụ huynh có thể an tâm khi sử dụng dịch vụ.
            </p>
          </div>
          <div className="image-section">
            <img loading="lazy" src="car.png" alt="About Us" className="img-2" />

          </div>
        </div>
      </section>

      <section className="history item">
        <h2 className="title-center">Lịch sử hình thành</h2>
        <div className="timeline">
          <div className="timeline-item">
            <img loading="lazy" src="light_bulb.png" alt="History 1" className="img-3" />
            <h3 className="subtitle">Lịch sử hình thành</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Nulla convallis dignissim purus ipsum enim praesent feugiat.
              Elit morbi augue eu faucibus in eget nunc. Quis scelerisque gravida nunc neque quam magna egestas.
            </p>
          </div>
          <div className="timeline-item">
            <img loading="lazy" src="light_bulb.png" alt="History 2" className="img-4" />
            <h3 className="subtitle">Lịch sử hình thành</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Nulla convallis dignissim purus ipsum enim praesent feugiat.
              Elit morbi augue eu faucibus in eget nunc. Quis scelerisque gravida nunc neque quam magna egestas.
            </p>
          </div>
          <div className="timeline-item">
            <img loading="lazy" src="light_bulb.png" alt="History 3" className="img-5" />
            <h3 className="subtitle">Lịch sử hình thành</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Nulla convallis dignissim purus ipsum enim praesent feugiat.
              Elit morbi augue eu faucibus in eget nunc. Quis scelerisque gravida nunc neque quam magna egestas.
            </p>
          </div>
        </div>
      </section>

      <section className="mission item">
        <div className="content">
          <div className="image-section">
            <img loading="lazy" src="sumenh.png" alt="Mission" className="img-6" />
          </div>
          <div className="text-section">
            <h2 className="title">SỨ MỆNH</h2>
            <p className="emphasis">
              Tối đa hóa an toàn cho trẻ em khi sử dụng dịch vụ đưa đón khi đến trường. Trở thành người đồng hành tin cậy hàng đầu thay phụ huynh đưa đón trẻ

            </p>
          </div>
        </div>
      </section>

      <section className="testimonials item">
        <h2 className="title-center">ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
        <p className="description-center">
          Nunc fringilla at consequat varius mauris elementum. Cras volutpat quis rhoncus rutrum sed bibendum
          posuere. Diam sed at pulvinar sapien amet. Quam sagittis lobortis urna viverra auctor augue.
        </p>
        <div className="testimonials-list">
          <div className="testimonial">
            <p className="testimonial-text">
              “Lorem ipsum dolor sit amet consectetur. Sagittis egestas nisl nisi sociis pellentesque
              nibh egestas cras tempus. Vitae ullamcorper arcu lobortis lectus faucibus maecenas.
              Malesuada donec elementum nec dolor vulputate cursus velit metus ornare”
            </p>
            <div className="testimonial-info">
              <div className="WhiteCircle">
                <img loading="lazy" src="user.png" alt="Customer 2" className="testimonial-img" />
              </div>
              <div className="testimonial-details">
                <h4 className="testimonial-name">Nguyễn Phương Hồng</h4>
                <p className="testimonial-title">Phụ huynh</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              “Lorem ipsum dolor sit amet consectetur. Sagittis egestas nisl nisi sociis pellentesque
              nibh egestas cras tempus. Vitae ullamcorper arcu lobortis lectus faucibus maecenas.
              Malesuada donec elementum nec dolor vulputate cursus velit metus ornare”
            </p>
            <div className="testimonial-info">
              <div className="WhiteCircle">
                <img loading="lazy" src="user.png" alt="Customer 2" className="testimonial-img" />
              </div>
              <div className="testimonial-details">
                <h4 className="testimonial-name">Trần Nguyễn Trung Quân</h4>
                <p className="testimonial-title">Phụ huynh</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              “Lorem ipsum dolor sit amet consectetur. Sagittis egestas nisl nisi sociis pellentesque
              nibh egestas cras tempus. Vitae ullamcorper arcu lobortis lectus faucibus maecenas.
              Malesuada donec elementum nec dolor vulputate cursus velit metus ornare”
            </p>
            <div className="testimonial-info">
              <div className="WhiteCircle">
                <img loading="lazy" src="user.png" alt="Customer 2" className="testimonial-img" />
              </div>
              <div className="testimonial-details">
                <h4 className="testimonial-name">Lê Đình Duy</h4>
                <p className="testimonial-title">Phụ huynh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact item">
        <div className="content">
          <div className="text-section">
            <div className="title-container">
              <h2 className="title">Tư vấn với KidGo ngay!</h2>
              <p className="emphasis">
                Nunc fringilla at consequat varius mauris elementum. Cras volutpat quis rhoncus
                rutrum sed bibendum posuere. Diam sed at pulvinar sapien amet. Quam sagittis lobortis
                urna viverra auctor augue.
              </p>
            </div>
          </div>
          <div className="image-section">
            <img id="phoneImage" loading="lazy" src="phone.png" alt="Contact Us" className="img-10" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content">
          <div className="newsletter">
            <div className="DangKiThongBao">
              <img loading="lazy" src="sendmail.png" alt="Newsletter" className="img-11" />
              <h3 className="title">Đăng ký để nhận thông báo mới</h3>
            </div>
            <div className="text-section">

              <p className="description">
                Donec eget dignissim id sit egestas in consequat volutpat elementum donec et.
              </p>
            </div>
            <div className="input-group">
              <Input size="large" name="mail" placeholder="Nhập email" />
              <button className="btn-subscribe" onClick={() => handleClick('Đăng ký')}>Đăng ký</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyComponent;