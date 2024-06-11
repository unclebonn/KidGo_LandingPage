import { Row } from "antd"
import BlogItem from "./components/blog/blogitem"

const BlogPage: React.FC = () => {

    const fakeData =
        [
            {
                image: "string",
                date: "12/2/2112",
                title: "Đảm bảo an toàn và tiện lợi với dịch vụ xe đưa đón học sinh",
                shortDescription: "Lợi ích của dịch vụ đưa đón học sinh và tại sao nó là một sự lựa chọn hàng đầu cho các phụ huynh trong kỳ nhập học mới.",
                author: "Lê Hồng Thịnh"
            },
            {
                image: "string",
                date: "12/2/2112",
                title: "Đảm bảo an toàn và tiện lợi với dịch vụ xe đưa đón học sinh",
                shortDescription: "Lợi ích của dịch vụ đưa đón học sinh và tại sao nó là một sự lựa chọn hàng đầu cho các phụ huynh trong kỳ nhập học mới.",
                author: "Lê Hồng Thịnh"
            },
            {
                image: "string",
                date: "12/2/2112",
                title: "Đảm bảo an toàn và tiện lợi với dịch vụ xe đưa đón học sinh",
                shortDescription: "Lợi ích của dịch vụ đưa đón học sinh và tại sao nó là một sự lựa chọn hàng đầu cho các phụ huynh trong kỳ nhập học mới.",
                author: "Lê Hồng Thịnh"
            },
            {
                image: "string",
                date: "12/2/2112",
                title: "Đảm bảo an toàn và tiện lợi với dịch vụ xe đưa đón học sinh",
                shortDescription: "Lợi ích của dịch vụ đưa đón học sinh và tại sao nó là một sự lựa chọn hàng đầu cho các phụ huynh trong kỳ nhập học mới.",
                author: "Lê Hồng Thịnh"
            },
        ]


    return (
        <Row>
            <BlogItem data={fakeData} />
        </Row>
    )
}

export default BlogPage