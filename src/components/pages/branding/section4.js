import { gtgConfig } from "@/config/global";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { Philosopher } from 'next/font/google';
import Image from "next/image";

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
                color="neutral.cl900"
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
    text1= 'KHÁCH HÀNG',
    text2= '2,084+'
}){
    return(
        <Stack 
            position={"relative"}
            width={300}
            height={300}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            direction={"column"}
        >
            <Typography
                textAlign={"center"}
                fontSize={24}
                fontWeight={400}
                color="neutral.cl400"
            >
                {text1}
            </Typography>
            <Typography
                textAlign={"center"}
                fontSize={60}
                fontWeight={700}
                color="primary.main"
            >
                {text2}
            </Typography>
            <Box
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                sx={{
                    background: 'linear-gradient(180deg, #00AEEF 0%, rgba(0, 174, 239, 0) 100%)',
                    opacity: 0.2,
                    zIndex: 0,
                    borderRadius: '50%'
                }}
            />
        </Stack>
    )
}

export default function SectionThePyo(){
    return(
        <Box 
            pt={{xs: 4, lg: 8}} 
            sx={{
                overflow: 'hidden',
            }}
            position={"relative"}
        >
            <Box position={"relative"} sx={{zIndex: 1}}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Box maxWidth={800} py={{xs:3, lg: 10}}>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={{xs:38, lg: 68}}
                            fontWeight={600}
                            lineHeight={1.3}
                            letterSpacing={"-1.8px"}
                            color="neutral.cl900"
                        >
                            Xoá sổ hôi nách - Không còn khoảng cách Ứng dụng công nghệ PYOULTIMATE
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box 
                position={"relative"}
                pb={{xs:3,lg: 8}}
                sx={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: '0px -4px 13px rgba(0, 0, 0, 0.12)',
                    zIndex: 1
                }} 
            >
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                        direction={"column"}
                        maxWidth={740}
                        py={{xs:4, lg: 10}}
                        m="auto"
                        spacing={3}
                    >
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={{xs:38, lg: 48}}
                            fontWeight={700}
                            lineHeight={"40px"}
                            color="primary.main"
                            textAlign={"center"}
                            fontFamily={philosopher.style.fontFamily}
                        >
                            Phòng khám thẩm mỹ The Pyo
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={400}
                            lineHeight={"24px"}
                            color="neutral.cl500"
                            textAlign={"center"}
                            maxWidth={545}
                        >
                            Nổi bật với các dịch vụ thẩm mỹ tiên tiến, kết hợp giữa công nghệ hiện đại và tay nghề của các chuyên gia hàng đầu trong lĩnh vực, mang đến giải pháp làm đẹp toàn diện cho khách hàng.
                        </Typography>
                    </Stack>
                    <Grid2 container spacing={3}>
                        <Grid2 size={{xs: 12, lg: 6}}>
                            <ItemLocation />
                        </Grid2>

                        <Grid2 size={{xs: 12, lg: 6}}>
                            <ItemLocation 
                                address="75 Phạm Viết Chánh, Ho Chi Minh City, Vietnam"
                                deg={270}
                            />
                        </Grid2>
                    </Grid2>

                    <Stack 
                        position={"relative"} 
                        minHeight={{xs: 'auto', lg: 720}}
                        justifyContent={{xs: "center", lg: 'flex-start'}}
                        alignItems={{xs: 'center', lg: 'flex-start'}}
                    >
                        <Box
                            position={{xs: 'relative', lg: "absolute"}}
                            top={{xs: 0, lg: 100}}
                        >
                            <Item />
                        </Box>

                        <Box display={{xs: 'none', lg: 'block'}} position={"absolute"} top={480} width={147} height={147} left={50}>
                            <Image src={"/pyo1.jpg"} width={147} height={147} alt="" style={{borderRadius: '50%'}}/>
                        </Box>

                        <Box display={{xs: 'none', lg: 'block'}} position={"absolute"} top={50} width={167} height={167} left={"35%"}>
                            <Image src={"/pyo5.jpg"} width={167} height={167} alt="" style={{borderRadius: '50%'}}/>
                        </Box>

                        <Box display={{xs: 'none', lg: 'block'}} position={"absolute"} top={250} width={184} height={184} left={"50%"}>
                            <Image src={"/pyo4.jpg"} width={184} height={184} alt="" style={{borderRadius: '50%'}}/>
                        </Box>

                        <Box display={{xs: 'none', lg: 'block'}} position={"absolute"} top={450} width={258} height={258} left={"30%"}>
                            <Image src={"/pyo2.jpg"} width={258} height={258} alt="" style={{borderRadius: '50%'}}/>
                        </Box>

                        <Box display={{xs: 'none', lg: 'block'}} position={"absolute"} top={50} width={348} height={348} right={0}>
                            <Image src={"/pyo3.jpg"} width={348} height={348} alt="" style={{borderRadius: '50%'}}/>
                        </Box>

                        <Box 
                            position={{xs: 'relative', lg: "absolute"}}
                            top={{xs: 'unset', lg: 420}} 
                            right={{xs: 'unset', lg: 20}}
                        >
                            <Item text1="NHÂN VIÊN" text2="600+"/>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box
                position={"absolute"}
                top="20px"
                right="-150px"
                width={954}
                height={954}
                sx={{
                    background: 'linear-gradient(148.46deg, #00B2EF 15.95%, #A3E6FF 54.22%)',
                    filter: 'blur(20px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
            <Divider light sx={{
                height: 5,
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0px -4px 13px rgba(0, 0, 0, 0.12)',
                border: 'none'
            }}/>
        </Box>
    )
}