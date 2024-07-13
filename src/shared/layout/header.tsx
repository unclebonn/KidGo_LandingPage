import { BarsOutlined } from "@ant-design/icons"
import { Col, Drawer, Row } from "antd"
import { useState } from "react"
import { useNavigate, useNavigation } from "react-router-dom"

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const handleClick = (path: string) => {
        navigate(`/${path}`)
    }


    const linkStyles: React.CSSProperties = {
        color: `${open ? "black" : "white"}`
    }


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Row justify={"space-between"}>
            <header className="header" style={{ zIndex: 10, width: "calc(100% - 40px) ", position: "fixed" }} >
                <Col className="logo" xs={20} md={2} xl={2}>
                    <Row>
                        <a href="/#landing_page">
                            <img loading="lazy" src="kidgoLogo.png" alt="Logo" className="img" />
                        </a>
                    </Row>
                </Col>

                <Col xs={0} md={22} xl={22}>
                    <Row style={{ display: "flex", justifyContent: "right" }}>
                        <nav className="nav">
                            <div className="nav-links">
                                <button className="nav-link" onClick={() => handleClick('')}>
                                    <a style={linkStyles} href="/#landing_page">
                                        Trang chủ
                                    </a>
                                </button>
                                {/* <button className="nav-link" >
                                    <a style={linkStyles} href="/#activitypage">
                                        Hoạt động
                                    </a>
                                </button>
                                <button className="nav-link">
                                    <a style={linkStyles} href="/#contactpage">
                                        Liên hệ
                                    </a>
                                </button> */}
                                {/* <button className="nav-link" onClick={() => handleClick('bai-viet')}>Blog</button> */}
                            </div>
                            <button className="cta" onClick={() => handleClick('dat-xe')}>Đặt xe</button>
                            <a href="kidgo://Result">Về app</a>
                        </nav>
                    </Row>
                </Col>

                <Col xs={4} md={0} xl={0}>
                    <BarsOutlined onClick={showDrawer} style={{ cursor: "pointer", fontSize: 25 }} />
                </Col>
                <Col xs={24} md={0} xl={0}>
                    <Drawer width={250} onClose={onClose} open={open}>
                        <Row justify={"center"} gutter={[0, 20]}>

                            <button className="cta" onClick={() => handleClick('')}>
                                <a style={linkStyles} href="/#landing_page">
                                    Trang chủ
                                </a>
                            </button>

                            {/* <button className="cta" >
                                <a style={linkStyles} href="/#activitypage">
                                    Hoạt động
                                </a>
                            </button>

                            <button className="cta">
                                <a style={linkStyles} href="/#contactpage">
                                    Liên hệ
                                </a>
                            </button> */}

                            {/* <button className="cta" onClick={() => handleClick('bai-viet')}>
                                <a style={linkStyles} >
                                    Blog
                                </a>
                            </button> */}

                            <button className="cta" onClick={() => handleClick('dat-xe')}>
                                <a style={linkStyles} >
                                    Đặt xe
                                </a></button>

                        </Row>
                    </Drawer>
                </Col>
            </header>
        </Row>
    )
}

export default Header