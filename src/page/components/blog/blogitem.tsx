import { UserOutlined } from "@ant-design/icons"
import { Avatar, Col, Divider, Row } from "antd"


interface BlogItemProps {
    image: string,
    date: string,
    title: string,
    shortDescription: string,
    author: string
}

interface BlogItemList {
    data: BlogItemProps[]
}

const BlogItem: React.FC<BlogItemList> = ({ data }) => {

    const blogStyles: React.CSSProperties = {
        padding: "10px 20px",
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: "#C4EBF8",
        borderRadius: 8,
        boxShadow: "1px 1px 3px grey"
    }

    return (
        <Row>
            <Col span={24}>
                <h1>Thông tin mới nhất của KIDGO</h1>
            </Col>

            <Row>
                {data.length > 0
                    ? data.map((blog) => {
                        return (
                            <Col xs={24} md={11} xl={11} style={blogStyles}>
                                <Row gutter={[20, 0]}>
                                    <Col span={12}>
                                        <img width={"100%"} style={{ objectFit: "contain" }} src="https://s3-alpha-sig.figma.com/img/9052/8989/0f254467befe0395420ca74189208f23?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEVV2TrhxPG~l-nfIBS-5sgYCvPc-3g7Hd2cVWOoA1IvFcfld70u9wA-mOr2cjXu9s3hgP60ZwzsvTnLz-xQoRsMXcy8s9uNuQ96rZgu9~Wlog8u0BASmORKziTpuA6WX3xz16XSIi98TDy6fAkUQWXsWfuVGsFr4VhioQWHcMyVC~m2~JH0CTZ5~Et8e7tyQUEBwWf52yUSX4uqsDX0mtoy79uL7YrZ9206nYxZEAmjW8NBrEYxm4a1ku3BZrWSo4eH0NSg8pb64vHAx3GE0kEhHDR9551D2ZrfHpeeC81X7mkW09aTaK2ASjYNV6xZQrb3hqbSBELgABcO162miQ__" alt="" />
                                        <Row style={{ gap: 10 }} align={"middle"}>
                                            <Avatar shape="circle" icon={<UserOutlined />} size={"default"} />
                                            <h6>{blog.author}</h6>
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <p style={{ margin: 0 }}>
                                            {blog.date}
                                        </p>
                                        <div style={{ width: "50%" }}>
                                            <Divider style={{ margin: 0, borderColor: "rgba(0,0,0,0.3)" }}  />
                                        </div>
                                        <h2>{blog.title}</h2>
                                        <p>{blog.shortDescription}</p>

                                    </Col>
                                </Row>
                            </Col>
                        )
                    })
                    : <></>
                }
            </Row>
        </Row>

    )
}

export default BlogItem