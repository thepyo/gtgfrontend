import { Box, Grid2, Stack, Typography } from "@mui/material";
import TOC from "./toc";
import { IconCalendarWeek, IconEye } from "@tabler/icons-react";
import SidebarPost from "./sidebar";
import ShareContent from "./share";

export default function ContentPost(){
    return(
        <Grid2 container spacing={5} >
            <Grid2 size={{xs: 12, lg: 2.5}}>
                <TOC />
            </Grid2>

            <Grid2 size={{xs: 12, lg: 7}}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconCalendarWeek stroke={1} color="#888" size={19} />
                        <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                            11-06-2024
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconEye stroke={1} color="#888" size={19} />
                        <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                            9038 lượt xem
                        </Typography>
                    </Stack>
                </Stack>

                <Box className="post-content" my={3}>
                    <p>
                        Thẩm Mỹ Viện GTG tự hào giới thiệu Hội Thảo Chuyên Đề Làm Đẹp & Chăm Sóc Da Hiện Đại, sự kiện sẽ diễn ra vào ngày 20/08/2024 tại cơ sở chính của chúng tôi. Hội thảo hứa hẹn mang đến nhiều kiến thức bổ ích và cơ hội trải nghiệm thực tế cho những người quan tâm đến lĩnh vực chăm sóc sắc đẹp.
                    </p>
                    <img src="/news.jpg" />
                    <h2 id="heading1">Các Chuyên Đề Chăm Sóc Da:</h2>
                    <ul>
                        <li>Cách Chăm Sóc Da Hằng Ngày: Hướng dẫn chi tiết từ cơ bản đến nâng cao về cách chăm sóc da hàng ngày, bao gồm quy trình làm sạch, dưỡng ẩm và bảo vệ da.</li>
                        <li>Xu Hướng Làm Đẹp Mới Nhất: Cập nhật những xu hướng và công nghệ làm đẹp tiên tiến nhất hiện nay, giúp người tham gia hiểu rõ hơn về các liệu pháp chăm sóc da hiệu quả.</li>
                    </ul>
                    <h2 id="heading2">Chia Sẻ Kinh Nghiệm Từ Chuyên Gia:</h2>
                    <ul>
                        <li>Diễn Giả Khách Mời: Hội thảo sẽ có sự tham gia của các chuyên gia hàng đầu trong lĩnh vực thẩm mỹ và chăm sóc da, chia sẻ kinh nghiệm và bí quyết làm đẹp.</li>
                        <li>Câu Chuyện Thành Công: Những câu chuyện thành công của khách hàng khi sử dụng dịch vụ tại Thẩm Mỹ Viện GTG, giúp người tham gia có cái nhìn thực tế và động lực làm đẹp. </li>
                    </ul>
                    <h2 id="heading3">Trải Nghiệm Thực Tế:</h2>
                    <ul>                              
                    <li>Thử Nghiệm Sản Phẩm: Người tham gia sẽ có cơ hội thử nghiệm các sản phẩm chăm sóc da mới nhất của GTG, được tư vấn và hướng dẫn sử dụng từ các chuyên gia.</li>
                    <li>Liệu Trình Mẫu: Trải nghiệm miễn phí các liệu trình chăm sóc da mẫu, bao gồm massage mặt, dưỡng ẩm sâu và điều trị các vấn đề da.</li>    
                    </ul>           
                    <h2 id="heading4">Chương Trình Ưu Đãi Đặc Biệt:</h2>
                    <ul>
                        <li>
                            Ưu Đãi Dành Riêng Cho Người Tham Dự: Những người tham gia hội thảo sẽ nhận được phiếu giảm giá và ưu đãi đặc biệt khi đăng ký các liệu trình chăm sóc da tại Thẩm Mỹ Viện GTG.
                        </li>
                        <li>
                            Quà Tặng Hấp Dẫn: Phần quà tặng hấp dẫn từ GTG dành cho tất cả người tham dự, bao gồm sản phẩm chăm sóc da và phiếu quà tặng.
                        </li>
                    </ul>
                </Box>
                <ShareContent />
            </Grid2>

            <Grid2 size={{xs: 12, lg: 2.5}}>
                <SidebarPost />
            </Grid2>
        </Grid2>
    )
}