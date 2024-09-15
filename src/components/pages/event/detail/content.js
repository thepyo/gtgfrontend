import { Box, Stack, Typography } from "@mui/material";

export default function EventDetailContent(){
    return(
        <Stack direction={"column"} spacing={2} my={4}>
            <Typography
                variant="h1"
                component={"h1"}
                fontSize={24}
                fontWeight={700}
                color="primary.main"
                textAlign={"center"}
                lineHeight={"38px"}
            >
                Chia sẻ về xu hướng làm đẹp mới nhất và tư vấn các giải pháp thẩm mỹ phù hợp cho từng đối tượng khách hàng
            </Typography>
            <Box className="post-content">
                <h2>1. Thời gian ra sự kiện</h2>
                <ul><li>11/06/2024</li></ul>                                                                                                                                                                        

                <h2>2. Nơi diễn ra sự kiện</h2>
                <ul><li>Số 2 Lô 13A - Trung Yên 6, Phường Trung Hoà, Quận Cầu Giấy, TP Hà Nội, Hanoi, Vietnam </li></ul>                                                                          
                <h2>3. Nội dung chương trình</h2>
                <ul>
                <li>Thử Nghiệm Sản Phẩm: Người tham gia sẽ có cơ hội thử nghiệm các sản phẩm chăm sóc da mới nhất của GTG, được tư vấn và hướng dẫn sử dụng từ các chuyên gia.</li>
                <li>Liệu Trình Mẫu: Trải nghiệm miễn phí các liệu trình chăm sóc da mẫu, bao gồm massage mặt, dưỡng ẩm sâu và điều trị các vấn đề da.</li>                                                          
                </ul>
                <h2>Đăng Ký Tham Dự</h2>
                <p>Thông tin đăng ký</p>
                <ul>
                    <li>Hotline: 1800 123 456</li>
                    <li>Email: info@gtgspa.vn</li>
                    <li>Website: www.gtgspa.vn</li>
                </ul>
                <p>Hãy nhanh tay đăng ký để không bỏ lỡ cơ hội tham gia Hội Thảo Chuyên Đề Làm Đẹp & Chăm Sóc Da Hiện Đại tại Thẩm Mỹ Viện GTG. Đây sẽ là dịp tuyệt vời để bạn nâng cao kiến thức về chăm sóc da, trải nghiệm các dịch vụ làm đẹp chất lượng và nhận được những ưu đãi đặc biệt.</p>                                              
                <h2>Thẩm Mỹ Viện GTG</h2>
                <p>Vì một làn da khỏe đẹp và tự tin hơn!</p>
            </Box>
        </Stack>
    )
}