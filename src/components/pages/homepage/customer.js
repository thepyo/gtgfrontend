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
import Link from "next/link";
import TestimonialItem from "@/components/testimonial/default";

export default function CustomerTellingHomePageSection({data}){
    const testimonials = data?.testimonials?.data
    return(
        <Box py={10}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={4}>
                    <Grid2 size={{xs:12, lg:6}}>
                        <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={1}>
                            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                                <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color={"primary.main"}>
                                    {data?.sub_title_testimonial}
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
                                {data?.title_testimonial}
                            </Typography>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{xs:12, lg:6}}>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={3} height={"100%"}>
                            <Typography variant="body1" fontSize={18} fontWeight={400} color="neutral.cl600">
                                {data?.description_testimonial}
                            </Typography>

                            <Button component={Link} href={data?.link_btn_testimonial} variant="contained" size="large" endIcon={<IconArrowRight color="#fff"/>} color="primary">
                                <Typography variant="body1" fontSize={16} fontWeight={600} color="#ffffff">
                                    {data?.label_btn_testimonial}
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
                    {testimonials?.map(item => 
                        <SwiperSlide key={item.id}>
                            <TestimonialItem 
                                name={item.attributes?.name}
                                content={item.attributes?.content}
                                rating={item.attributes?.rating}
                            />
                        </SwiperSlide> 
                    )}
                    
                </Swiper>
            </Box>
        </Box>
    )
}