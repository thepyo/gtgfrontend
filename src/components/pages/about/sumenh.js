import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Button, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function MissionSection() {
    return (
        <Box py={{xs:4, lg: 8}} bgcolor={"#F5F7F9"}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={8}>

                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <Box width={"100%"} height={"100%"} bgcolor={"#D9D9D9"} />
                    </Grid2>

                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <Stack direction={"column"} spacing={1.5} position={"relative"}>
                            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                                <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                                <Typography variant="body2" fontSize={18} fontWeight={400} color="primary.main">
                                    Giá trị đại diện
                                </Typography>
                            </Stack>

                            <Typography variant="h2" component={"h2"} fontSize={48} fontWeight={600} lineHeight={"60px"} letterSpacing={"-3%"} color="neutral.cl900" zIndex={1}>
                                Sứ mệnh
                            </Typography> 

                            <Typography fontSize={18} fontWeight={400} lineHeight={"28px"} color="neutral.cl900" textAlign={"justify"} zIndex={1}>
                                Thẩm Mỹ Viện GTG mang đến giải pháp làm đẹp toàn diện. Chúng tôi ứng dụng công nghệ tiên tiến, hỗ trợ khách hàng đạt được vẻ đẹp hoàn hảo thông qua các liệu trình chuyên nghiệp, giúp khách hàng tự tin và rạng rỡ mọi lúc, mọi nơi
                            </Typography>

                            <Box className="about-content" color="neutral.cl900" zIndex={1}>
                                <ul>
                                    <li>Tiết kiệm chi phí làm đẹp một cách tối ưu nhất</li>
                                    <li>Phù hợp với mọi nhu cầu làm đẹp khác nhau</li>
                                    <li>Công nghệ làm đẹp tiên tiến nhất</li>
                                    <li>Lưu trữ tập trung toàn bộ thông tin khách hàng và dịch vụ làm đẹp.</li>
                                </ul>
                            </Box>

                            <Box>
                                <Button variant="contained" endIcon={<IconArrowRight color="#fff" size={19}/>} sx={{px: 5, py: 1.5}}>
                                    <Typography color="#fff">Xem thêm</Typography>
                                </Button>
                            </Box>

                            <Box position={"absolute"} bottom={30} right={0} zIndex={0}>
                                <Image
                                    src={"/mission.svg"}
                                    width={268}
                                    height={236}
                                    alt=""
                                />
                            </Box>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}