import theme from "@/config/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function TuyendungDetailDescription(){
    return(
        <Stack direction={"column"} spacing={2}>
            <Box>
                <Typography
                    variant="h3"
                    component={"h3"}
                    fontSize={20}
                    fontWeight={600}
                    color="neutral.cl900"
                    className="tuyendung-detail-h3"
                >
                    MÔ TẢ CÔNG VIỆC
                </Typography>
                <Divider light sx={{my:2, width: '190px', height: '2px', bgcolor: theme.palette.primary.main}} />
                <Box className="description-content" color={"neutral.cl900"} textAlign={"justify"}>
                    <ul>
                        <li>
                            <strong>Tìm kiếm và phát triển khách hàng mới:</strong> Chủ động tìm kiếm, xây dựng mối quan hệ với khách hàng tiềm năng, tư vấn và giới thiệu các dịch vụ thẩm mỹ.
                        </li>
                        <li>
                            <strong>Chăm sóc khách hàng hiện tại:</strong> Duy trì mối quan hệ tốt đẹp với khách hàng hiện có, giải đáp thắc mắc và hỗ trợ khách hàng trong quá trình sử dụng dịch vụ.
                        </li>
                        <li>
                            <strong>Xây dựng kế hoạch kinh doanh:</strong> Lên kế hoạch kinh doanh, đặt mục tiêu và chiến lược để đạt doanh số đề ra.
                        </li>
                        <li>
                            <strong>Phân tích thị trường:</strong> Theo dõi, cập nhật thông tin thị trường, đối thủ cạnh tranh và xu hướng làm đẹp để đưa ra các đề xuất kinh doanh phù hợp.
                        </li>
                        <li>
                            <strong>Tổ chức sự kiện:</strong> Phối hợp với các bộ phận khác tổ chức các sự kiện, hội thảo, chương trình khuyến mãi nhằm thu hút khách hàng.
                        </li>
                        <li>
                            <strong>Báo cáo:</strong> Lập báo cáo định kỳ về hoạt động kinh doanh, doanh số, phản hồi của khách hàng và đề xuất cải tiến.
                        </li>
                    </ul>
                </Box>
            </Box>
        </Stack>
    )
}