import { Col, Row } from "antd"
import { useNavigate, useNavigation } from "react-router-dom"

const Header: React.FC = () => {
    const navigate = useNavigate()

    const handleClick = (path:string) => {
        navigate(`/${path}`)
    }

    return (
        <div>
            <header className="header" >

                <Col className="logo" xs={20} md={2} xl={2}>
                    <Row>
                        <img loading="lazy" src="kidgoLogo.png" alt="Logo" className="img" />
                    </Row>
                </Col>

                <Col xs={0} md={22} xl={22}>
                    <Row style={{ display: "flex", justifyContent: "right" }}>
                        <nav className="nav">
                            <div className="nav-links">
                                <button className="nav-link" onClick={() => handleClick('')}>Trang chủ</button>
                                <button className="nav-link" onClick={() => handleClick('hoat-dong')}>Hoạt động</button>
                                <button className="nav-link" onClick={() => handleClick('lien-he')}>Liên hệ</button>
                                <button className="nav-link" onClick={() => handleClick('bai-viet')}>Blog</button>
                            </div>
                            <button className="cta" onClick={() => handleClick('dat-xe')}>Đặt xe</button>
                        </nav>
                    </Row>
                </Col>
                <Col xs={4} md={0} xl={0}>
                    123fdfds
                </Col>
            </header>
        </div>
    )
}

export default Header