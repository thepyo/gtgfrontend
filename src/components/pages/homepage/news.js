import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import NewItem from "../news/item";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function NewsHomepageSection({posts, data}){
    return(
        <Box py={8}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={1}>
                    <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                        <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                        <Typography variant="body2" fontSize={16} fontWeight={400} color={"primary.main"}>
                            {data?.sub_title_news}
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
                        {data?.title_news}
                    </Typography>
                </Stack>

                <Box py={4}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="slide-news"
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            1200: {
                              // width: 768,
                              slidesPerView: 3,
                            },
                        }}
                    >
                        {posts?.map(item =>
                            <SwiperSlide key={item.id}>
                                <NewItem item={item?.attributes}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    )
}