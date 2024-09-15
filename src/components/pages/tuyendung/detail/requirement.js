import theme from "@/config/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function TuyendungDetailRequirement(){
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
                    YÊU CẦU
                </Typography>
                <Divider light sx={{my:2, width: '90px', height: '2px', bgcolor: theme.palette.primary.main}} />
                <Box className="description-content" color={"neutral.cl900"} textAlign={"justify"}>
                    <ul>
                        <li>
                            <strong>Trình độ:</strong> Tốt nghiệp đại học chuyên ngành Kinh doanh, Marketing, Quản trị kinh doanh hoặc các ngành liên quan
                        </li>
                        <li>
                            <strong>Kinh nghiệm:</strong> Có ít nhất 2 năm kinh nghiệm trong lĩnh vực kinh doanh, ưu tiên ứng viên có kinh nghiệm trong ngành thẩm mỹ hoặc làm đẹp.
                        </li>
                        <li>
                            <strong>Kỹ năng giao tiếp:</strong> Khả năng giao tiếp, thuyết phục và đàm phán tốt.
                        </li>
                        <li>
                            <strong>Kỹ năng phân tích:</strong> Khả năng phân tích thị trường, lập kế hoạch kinh doanh và quản lý thời gian hiệu quả.
                        </li>
                        <li>
                            <strong>Ngoại hình:</strong> Ưa nhìn, tự tin, chuyên nghiệp.
                        </li>
                        <li>
                            <strong>Tinh thần làm việc:</strong> Chủ động, sáng tạo, có tinh thần trách nhiệm cao và khả năng làm việc nhóm.
                        </li>
                    </ul>
                </Box>
            </Box>
        </Stack>
    )
}