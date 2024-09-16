import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Button, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { IconArrowRight, IconStarFilled } from "@tabler/icons-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function Item(){
    return(
        <Stack 
            direction={"column"} 
            width={400}
            height={450}
            p={2}
            bgcolor={"rgba(243, 244, 246, 1)"}
            spacing={2}
            justifyContent={"space-between"}
        >
            <Box>
                <svg width="68" height="54" viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.359 54V38.5967C38.359 28.2098 40.8581 19.7115 45.8564 13.1016C50.8547 6.37377 58.2359 2.00656 68 0V13.2787C63.9316 14.223 60.5607 15.9934 57.8872 18.5902C55.3299 21.0689 53.6444 24.0197 52.8308 27.4426H64.5128V54H38.359ZM0 54V38.5967C0 28.2098 2.49915 19.7115 7.49744 13.1016C12.4957 6.37377 19.8769 2.00656 29.641 0V13.2787C25.5726 14.223 22.2017 15.9934 19.5282 18.5902C16.9709 21.0689 15.2855 24.0197 14.4718 27.4426H26.1538V54H0Z" fill="#00AEEF"/>
                </svg>
            </Box>

            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <IconStarFilled color="rgba(251, 191, 0, 1)" />
                <IconStarFilled color="rgba(251, 191, 0, 1)" />
                <IconStarFilled color="rgba(251, 191, 0, 1)" />
                <IconStarFilled color="rgba(251, 191, 0, 1)" />
                <IconStarFilled color="rgba(251, 191, 0, 1)" />
            </Stack>

            <Box flexDirection={1}>
                <Typography
                    fontSize={18}
                    fontWeight={400}
                    textAlign={"justify"}
                    color="neutral.cl900"
                >
                    Tôi đã có trải nghiệm tuyệt vời tại thẩm mỹ viện GTG. Dịch vụ ở đây không chỉ chuyên nghiệp mà còn rất tận tâm. Tôi rất hài lòng với kết quả làm đẹp sau khi được các chuyên viên tư vấn và chăm sóc kỹ lưỡng
                </Typography>
            </Box>

            <Box py={2}>
                <Typography color="neutral.cl900" fontSize={18} fontWeight={700}>
                    Chị Lan Anh
                </Typography>
            </Box>
        </Stack>
    )
}

export default function CustomerTellingHomePageSection(){
    return(
        <Box py={10}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={4}>
                    <Grid2 size={{xs:12, lg:6}}>
                        <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={1}>
                            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                                <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color={"primary.main"}>
                                    NHẬN XÉT
                                </Typography>
                            </Stack>
                            <Typography
                                variant="h2"
                                component={"h2"}
                                fontSize={{xs: 30, lg: 60}}
                                fontWeight={700}
                                lineHeight={1.3}
                                letterSpacing={"-1px"}
                                color={"neutral.cl900"}
                            >
                                Khách hàng nói gì về GTG?
                            </Typography>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{xs:12, lg:6}}>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={3} height={"100%"}>
                            <Typography variant="body1" fontSize={18} fontWeight={400} color="neutral.cl600">
                                Khách hàng nói rằng công ty thẩm mỹ viện GTG cung cấp dịch vụ tuyệt vời, nhân viên thân thiện và kết quả làm đẹp ấn tượng.
                            </Typography>

                            <Button variant="contained" size="large" endIcon={<IconArrowRight color="#fff"/>} color="primary">
                                <Typography variant="body1" fontSize={16} fontWeight={600} color="#ffffff">
                                    XEM THÊM
                                </Typography>
                            </Button>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
            <Box pt={5}>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="slide-customer"
                >
                    <SwiperSlide><Item /></SwiperSlide>
                    <SwiperSlide><Item /></SwiperSlide>
                    <SwiperSlide><Item /></SwiperSlide>
                    <SwiperSlide><Item /></SwiperSlide>
                    <SwiperSlide><Item /></SwiperSlide>
                    <SwiperSlide><Item /></SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    )
}