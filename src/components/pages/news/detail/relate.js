import { Box, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NewItem from "../item";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function RelatePost({posts}){
    return(
        <Stack direction={"column"} spacing={2} mt={5}>
            <Stack direction="row" alignItems={"center"} spacing={1}>
                <Image
                    src="/new.svg"
                    width={30}
                    height={30}
                    alt="new icon"
                />
                <Typography variant="h2" component="h2" fontSize={20} fontWeight={600} color="neutral.cl900">
                    BÀI VIẾT LIÊN QUAN
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

        </Stack>
    )
}