import theme from "@/config/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function TuyendungDetailSalary(){
    return(
        <Stack direction={"column"} spacing={2} mt={4}>
            <Box>
                <Typography
                    variant="h3"
                    component={"h3"}
                    fontSize={20}
                    fontWeight={600}
                    color="neutral.cl900"
                    className="tuyendung-detail-h3"
                >
                    QUYỀN LỢI
                </Typography>
                <Divider light sx={{my:2, width: '115px', height: '2px', bgcolor: theme.palette.primary.main}} />
                <Box className="description-content" color={"neutral.cl900"} textAlign={"justify"}>
                    <ul>
                        <li>
                            <strong>Thu nhập:</strong> Lương cơ bản cạnh tranh + Hoa hồng hấp dẫn dựa trên doanh số.
                        </li>
                        <li>
                            <strong>Phúc lợi:</strong> Chế độ bảo hiểm y tế, bảo hiểm xã hội theo quy định của nhà nước.
                        </li>
                        <li>
                            <strong>Đào tạo:</strong> Được đào tạo chuyên sâu về sản phẩm, dịch vụ và kỹ năng bán hàng.
                        </li>
                        <li>
                            <strong>Môi trường làm việc:</strong>  Làm việc trong môi trường chuyên nghiệp, năng động và cơ hội thăng tiến cao.
                        </li>
                        <li>
                            <strong>Chế độ thưởng:</strong> Thưởng hiệu quả kinh doanh, thưởng lễ, Tết và các dịp đặc biệt khác.
                        </li>
                        <li>
                            <strong>Nghỉ phép:</strong> Chế độ nghỉ phép năm, nghỉ lễ Tết theo quy định của nhà nước và tập đoàn.
                        </li>
                    </ul>
                </Box>
            </Box>
        </Stack>
    )
}