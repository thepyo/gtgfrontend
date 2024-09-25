import { gtgConfig } from "@/config/global";
import { Box, Container, Divider, Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

import { Philosopher } from 'next/font/google';
import theme from "@/config/theme";

const philosopher = Philosopher({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

function ItemLocation({
    address="Số 2 Lô 13A - Trung Yên 6, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội , Hanoi, Vietnam",
    minHeight=68,
    deg=90
}){
    return(
        <Stack
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            spacing={2}
            px={2}
            pt={1}
            pb={1}
            position={"relative"}
            minHeight={minHeight}
        >
            <Image src="/location-icon.svg" width={26} height={26} alt="" />
            <Typography
                color="#fff"
                lineHeight={1.6}
            >
                {address}
            </Typography>
            <Box
                position={"absolute"}
                top={0}
                bottom={0}
                left={0}
                right={0}
                sx={{
                    background: `linear-gradient(${deg}deg, #3CC5F6 0%, rgba(255, 255, 255, 0) 100%)`,
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '8px',
                    opacity: '0.2',
                    marginLeft: '0 !important'
                }}
            />
        </Stack>
    )
}


function Item({
    text1 = "Khách hàng",
    text2 = "2,084+"
}) {
    return (
        <Stack direction={"column"} spacing={0}>
            <Typography
                fontSize={24}
                color="neutral.cl500"
            >
                {text1}
            </Typography>
            <Typography
                fontSize={66}
                fontWeight={700}
                color="#fff"
            >
                {text2}
            </Typography>
        </Stack>
    )
}

export default function SectionDrTien({data}){

    const matches = useMediaQuery('(max-width:700px)');

    return(
        <Stack 
            minHeight={1024}
            position={"relative"}
            overflow={"hidden"}
        >
            <Box position={"relative"} zIndex={1}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Grid2 container spacing={{xs:2, lg: 8}}>
                        <Grid2 size={{xs:12,lg:7}}>
                            <Stack direction={"column"} spacing={3} mt={{xs:3, lg: 6}}>
                                <Stack
                                    direction={"column"}
                                    maxWidth={700}
                                    py={{xs:3, lg: 10}}
                                    m="auto"
                                    spacing={3}
                                >
                                    <Typography
                                        variant="h2"
                                        component={"h2"}
                                        fontSize={48}
                                        fontWeight={700}
                                        lineHeight={"54px"}
                                        color="primary.main"
                                        fontFamily={philosopher.style.fontFamily}
                                    >
                                        {data?.title_dr_tien}
                                    </Typography>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={400}
                                        lineHeight={"24px"}
                                        color="#fff"
                                        maxWidth={545}
                                        textAlign={"justify"}
                                    >
                                        {data?.description_dr_tien}
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Stack 
                                direction={{
                                    xs: 'column',
                                    lg: 'row'
                                }} 
                                spacing={{
                                    xs: 2,
                                    lg: 6
                                }} 
                                divider={
                                    <Divider orientation="vertical" flexItem sx={{bgcolor: theme.palette.neutral.cl700}}/>
                                }
                            >
                                <Item 
                                    text1={data?.title_sec1_dr_tien}
                                    text2={data?.content_sec1_dr_tien}
                                />
                                <Item 
                                    text1={data?.title_sec2_dr_tien}
                                    text2={data?.content_sec2_dr_tien}
                                />
                            </Stack>
                            
                            <Box mt={{xs:3, lg: 10}}>
                                <ItemLocation 
                                    address={data?.address_dr_tien}
                                />
                            </Box>

                        </Grid2>
                        <Grid2 size={{xs:12,lg:5}}>
                            <Stack 
                                direction={"column"} 
                                justifyContent={"flex-end"} 
                                alignItems={"flex-end"} 
                                position={"relative"}
                                bottom={"-50px"}
                            >
                                <Image
                                    src="/dr-tien.png"
                                    width={matches ? 500 : 1920}
                                    height={matches ? 400 : 1024}
                                    alt=""
                                    style={{
                                        width: matches ? '100%' : 690,
                                        height: matches ? 'auto' : 970,
                                        objectFit: matches ? "unset" : 'cover',
                                        objectPosition: matches ? "unset" : 'center'
                                    }}
                                />
                            </Stack>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            <Box
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={0}
            >
                <Image
                    src="/bg-dr-tien.jpg"
                    width={1920}
                    height={1024}
                    alt=""
                    style={{
                        width: '100vw',
                        height: matches? '100%' : 1024,
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
        </Stack>
    )
}