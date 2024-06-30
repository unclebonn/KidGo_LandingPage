import { Input } from "antd"

const Footer: React.FC = () => {


    const handleClick = (text: string) => {

    }

    return (
        <div>
            <footer className="footer">
                <div className="content">
                    <div className="newsletter">
                        <div className="DangKiThongBao">
                            <img loading="lazy" src="sendmail.png" alt="Newsletter" className="img-11" />
                            <h3 className="title">Đăng ký để nhận thông báo mới</h3>
                        </div>
                        <div className="text-section">

                            <p className="description">
                                Đăng ký để nhận thông tin mới nhất nhé
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
    )
}

export default Footer