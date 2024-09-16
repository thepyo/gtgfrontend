import { gtgConfig } from "@/config/global";
import { Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Philosopher } from 'next/font/google';

const philosopher = Philosopher({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

function Item({
    image = '/branding-item.png',
    number = "01",
    text1 = "Phòng khám thẩm mỹ y khoa",
    text2 = "Dr - Tiến"
}) {
    return (
        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={0}>
            <Image
                src={image}
                width={240}
                height={163}
                alt=""
                style={{
                    width: '240px',
                    height: 'auto'
                }}
            />
            <Typography
                fontSize={64}
                fontWeight={700}
                sx={{
                    background: 'linear-gradient(#60C3DB 0%, rgba(255, 255, 255, 0) 85%, #fff 100%)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: philosopher.style.fontFamily
                }}
            >
                {number}
            </Typography>

            <Typography
                fontSize={24}
                fontWeight={700}
                lineHeight={"27px"}
                color="neutral.cl900"
                textAlign={"center"}
                sx={{
                    fontFamily: philosopher.style.fontFamily
                }}
            >
                {text1}<br />{text2}
            </Typography>
        </Stack>
    )
}


export default function AboutBranding() {
    return (
        <Stack py={{ xs: 4, lg: 10 }}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3} mb={3}>

                    <Typography
                        variant="body1"
                        fontSize={16}
                        fontWeight={400}
                        color="neutral.cl900"
                        textAlign={{
                            xs: 'justify',
                            lg: "center"
                        }}
                        maxWidth={700}
                    >
                        Tập đoàn GTG là một hệ thống hàng đầu trong lĩnh vực chăm sóc sắc đẹp và sức khỏe, bao gồm ba thương hiệu nổi tiếng. Mỗi thương hiệu mang đến các dịch vụ và sản phẩm chất lượng cao, phục vụ nhu cầu đa dạng của khách hàng.
                    </Typography>
                </Stack>

                <Grid2 container spacing={5}>
                    <Grid2 size={{ xs: 12, lg: 4 }}>
                        <Item 
                            number = "01"
                            text1="Phòng khám thẩm mỹ y khoa"
                            text2="Dr - Tiến"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 4 }}>
                        <Item 
                            number = "02"
                            text1="Phòng khám thẩm mỹ"
                            text2="The Pyo"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 4 }}>
                        <Item 
                            number = "03"
                            text1="Công ty mỹ phẩm"
                            text2="Laurent"
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Stack>
    )
}