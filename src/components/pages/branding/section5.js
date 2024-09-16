import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { Philosopher } from 'next/font/google';

const philosopher = Philosopher({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

function Item({
    text1 = "Khách hàng",
    text2 = "2,084+"
}) {
    return (
        <Stack direction={"column"} spacing={0}>
            <Typography
                fontSize={{xs:20, lg: 24}}
                color="neutral.cl500"
            >
                {text1}
            </Typography>
            <Typography
                fontSize={{xs: 50, lg: 66}}
                color="neutral.cl900"
                fontWeight={700}
            >
                {text2}
            </Typography>
        </Stack>
    )
}

export default function SectionLaurent() {
    return (
        <Stack
            minHeight={750}
            direction={"column"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            position={"relative"}
            py={{xs: 4, lg: 0}}
        >
            <Container maxWidth={gtgConfig.maxWidth} sx={{position: 'relative', zIndex: 1}}>
                <Grid2 container spacing={5}>
                    <Grid2 size={{ xs: 12, lg: 5 }}>
                        <Image
                            src="/laurent.png"
                            width={514}
                            height={745}
                            alt=""
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 7 }}>
                        <Stack direction={"column"} spacing={4} justifyContent={"center"} height={"100%"}>
                            <Stack direction={"column"} spacing={2}>
                                <Stack direction={"row"}>
                                    <Typography
                                        fontSize={{xs: 38, lg: 48}}
                                        lineHeight={1.1}
                                        fontWeight={700}
                                        color="primary.main"
                                        sx={{
                                            fontFamily: philosopher.style.fontFamily
                                        }}
                                    >
                                        Công ty mỹ phẩm Laurent
                                    </Typography>
                                    <Image src="/laurent.svg" width={28} height={21} alt="laurent icon" />
                                </Stack>
                                <Typography
                                    fontSize={16}
                                    fontWeight={400}
                                    color="neutral.cl500"
                                    sx={{
                                        maxWidth: 486
                                    }}
                                >
                                    Là thương hiệu mỹ phẩm cao cấp, cung cấp các sản phẩm chăm sóc da và trang điểm được sản xuất theo tiêu chuẩn quốc tế, cam kết chất lượng và an toàn cho người sử dụng.
                                </Typography>
                            </Stack>

                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                px={2}
                                pt={2}
                                pb={1}
                                sx={{
                                    background: 'linear-gradient(90deg, #3CC5F6 0%, rgba(255, 255, 255, 0) 100%)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    borderRadius: '8px'
                                }}
                                spacing={2}
                                maxWidth={486}
                            >
                                <Image src="/location-icon.svg" width={26} height={26} alt="" />
                                <Typography
                                    color="neutral.cl900"
                                    lineHeight={1.6}
                                >
                                    Số 2 Lô 13A - Trung Yên 6, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội , Hanoi, Vietnam
                                </Typography>
                            </Stack>

                            <Stack direction={{ xs: 'column', lg: "row" }} spacing={{ xs: 3, lg: 8 }}>
                                <Item />
                                <Item 
                                    text1="NHÂN VIÊN"
                                    text2="1,000+"
                                />
                            </Stack>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>

            <Box
                position={"absolute"}
                bottom={6}
                left={0}
                right={0}
                top={0}
                sx={{
                    background: 'linear-gradient(0deg, rgba(0, 174, 239, 0.6) 0%, rgba(0, 174, 239, 0) 80%)',
                }}
            />
        </Stack>
    )
}