import { gtgConfig } from "@/config/global";
import { Box, Button, Container, Dialog, Stack, Typography, useMediaQuery } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


function Item(){

    const matches = useMediaQuery('(max-width:720px)');

    const height = matches ? 450 : 'calc(100vh - 90px)'

    const [open,setOpen] = useState(false)

    return(
        <Box height={height} position={"relative"}>
            <Box position={"absolute"} top={0} left={0} right={0} bottom={0} zIndex={0}>
                <Image
                    src={"/slide.jpg"}
                    width={1920}
                    height={700}
                    alt=""
                    quality={60}
                    priority
                    style={{
                        width: '100%',
                        height: height,
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
            <Box
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={1}
                sx={{
                    background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #000000 62.99%)',
                    opacity: '50%'
                }}
            />

            <Container maxWidth={gtgConfig.maxWidth} sx={{position: 'relative', zIndex: 2}}>
                <Stack 
                    direction={"column"} 
                    maxWidth={670} 
                    height={height} 
                    justifyContent={"center"} 
                    alignItems={"flex-start"}
                    spacing={4}
                >
                    <Typography
                        fontSize={{xs: 38, lg: 60}}
                        lineHeight={1.2}
                        letterSpacing={"-1px"}
                        color="#fff"
                        fontWeight={600}
                    >
                        Giải pháp thẩm mỹ tối ưu, giúp bạn tự tin và tỏa sáng
                    </Typography>

                    <Stack direction={"row"} alignItems={"center"} spacing={5}>
                        <Button variant="contained" color="primary" endIcon={<IconArrowRight color="#fff" />} size="large">
                            <Typography color="#fff" fontWeight={600}>Đặt lịch ngay</Typography>
                        </Button>

                        <Button variant="text" className="button-play-animation is-play" onClick={()=>setOpen(true)}>
                            <Box className="button-outer-circle has-scale-animation"></Box>
                            <Box className="button-outer-circle has-scale-animation has-delay-short"></Box>
                            <Box className="button-icon is-play">
                                <svg height="100%" width="100%" fill="#00AEEF">
                                    <polygon className="triangle" points="5,0 30,15 5,30" viewBox="0 0 30 15"></polygon>
                                    <path className="path" d="M5,0 L30,15 L5,30z" fill="none" stroke="#00AEEF"></path>
                                </svg>
                            </Box>
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="video-dialog-title"
                aria-describedby="video-dialog-description"
                maxWidth="lg"
            >
                <iframe 
                    width="1000" 
                    height="550" 
                    src="https://www.youtube.com/embed/8epqhJU7l3Q?si=DbW0S94ToHAhNP3U?modestbranding=1&showinfo=0" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen 
                />
            </Dialog>
        </Box>
    )
}

export default function SlideHomePageDefault(){

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <Box position={"relative"}>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
                <SwiperSlide><Item /></SwiperSlide>
            </Swiper>

            <Box 
                position={"absolute"}
                bottom={20}
                right={"-200px"}
                width={800}
                display={{
                    xs: 'none',
                    lg: 'block'
                }}
            >
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image
                            src={"/slide.jpg"}
                            width={262}
                            height={161}
                            quality={60}
                            priority
                            alt=""
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={"/thumb1.jpg"}
                            width={262}
                            height={161}
                            quality={60}
                            priority
                            alt=""
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={"/thumb2.jpg"}
                            width={262}
                            height={161}
                            quality={60}
                            priority
                            alt=""
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={"/thumb3.jpg"}
                            width={262}
                            height={161}
                            quality={60}
                            priority
                            alt=""
                            style={{
                                borderRadius: '8px'
                            }}
                        />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box> 
    )
}