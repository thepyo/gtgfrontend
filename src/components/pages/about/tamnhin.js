import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Button, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function VisionSection() {
    return (
        <Box py={{xs:4, lg: 8}}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={8}>
                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <Stack direction={"column"} spacing={1.5} position={"relative"}>
                            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                                <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                                <Typography variant="body2" fontSize={18} fontWeight={400} color="primary.main">
                                    Giá trị đại diện
                                </Typography>
                            </Stack>

                            <Typography variant="h2" component={"h2"} fontSize={48} fontWeight={600} lineHeight={"60px"} letterSpacing={"-3%"} color="neutral.cl900" zIndex={1}>
                                Tầm nhìn
                            </Typography> 

                            <Typography fontSize={18} fontWeight={400} lineHeight={"28px"} color="neutral.cl900" textAlign={"justify"} zIndex={1}>
                                Dịch vụ của Thẩm Mỹ Viện GTG giúp bạn cải thiện ngoại hình, tăng cường sự tự tin, nhờ đó bạn có thể tự tin và thành công hơn trong cuộc sống, với các liệu trình làm đẹp chuyên nghiệp và hiện đại, mang lại kết quả rõ rệt và lâu dài.
                            </Typography>

                            <Box className="about-content" color="neutral.cl900" zIndex={1}>
                                <ul>
                                    <li>Liệu trình làm đẹp toàn diện và tùy chỉnh</li>
                                    <li>Tích hợp các giải pháp chuyên nghiệp cho thẩm mỹ viện</li>
                                    <li>Đáp ứng mọi nhu cầu làm đẹp của khách hàng chỉ với một liệu trình duy nhất</li>
                                    <li>Liệu trình làm đẹp nhanh chóng và dễ dàng, thấy rõ hiệu quả trong vài ngày đến vài tuần</li>
                                </ul>
                            </Box>

                            <Box>
                                <Button variant="contained" endIcon={<IconArrowRight color="#fff" size={19}/>} sx={{px: 5, py: 1.5}}>
                                    <Typography color="#fff">Xem thêm</Typography>
                                </Button>
                            </Box>

                            <Box position={"absolute"} bottom={30} right={0} zIndex={0}>
                                <Image
                                    src={"/vision.svg"}
                                    width={268}
                                    height={236}
                                    alt=""
                                />
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <Box width={"100%"} height={"100%"} bgcolor={"#D9D9D9"} />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}