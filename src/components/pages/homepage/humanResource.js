import { gtgConfig } from "@/config/global";
import { Box, Button, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import HeadingHomePage from "./heading";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function HumanResourceHomePageSection(){
    return(
        <Box py={8} position={"relative"}>
            <Container maxWidth={gtgConfig.maxWidth} sx={{position: 'relative', zIndex: 2}}>
                <HeadingHomePage 
                    mode="dark"
                    subTitle="Về chúng tôi"
                    title="Gia nhập GTG"
                    justifyContent="center"
                    alignItem="center"
                />
                
                <Box maxWidth={950} m="auto">
                    <Typography
                        variant="body1" 
                        my={4}
                        textAlign={"center"}
                        color="primary.cl100"
                        fontSize={20}
                    >
                        Gia nhập công ty thẩm mỹ viện là cơ hội phát triển trong lĩnh vực làm đẹp. Chúng tôi cung cấp dịch vụ và sản phẩm chất lượng cao. Tham gia đội ngũ, bạn sẽ làm việc trong môi trường năng động và có cơ hội nâng cao kỹ năng. Chúng tôi chào đón ứng viên đam mê và sáng tạo.
                    </Typography>
                </Box>
            </Container>    

            <Stack
                width={"100%"}
                direction={"row"}
                minHeight={{ xs: 'unset', lg: 550 }}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                spacing={0}
                position={"relative"}
                pt={{xs:3, lg: 8}}
                zIndex={2}
            >

                <Stack
                    position={"absolute"}
                    top={'50%'}
                    left={0}
                    right={0}
                    bottom={0}
                    width={"100%"}
                    height={"100%"}
                    zIndex={0}
                    display={{ xs: 'none', lg: 'flex' }}
                >
                    <Divider light sx={{ height: "1px", width: '100%', bgcolor: '#fff' }} />
                </Stack>

                <Container maxWidth={gtgConfig.maxWidth} sx={{ position: 'relative', zIndex: 1 }}>

                    <Grid2 container spacing={5}>
                        <Grid2 size={{ xs: 12, lg: 4 }}>
                            <Stack direction={"column"} spacing={2} position={"relative"} top={{xs:0, lg: "72%"}}>
                                <Box display={{ xs: 'none', lg: 'block' }}>
                                    <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <circle cx="24" cy="24" r="24" fill="#ffffff" fillOpacity="0.2"/>
                                        <circle cx="24" cy="24" r="19.4717" fill="#ffffff" fillOpacity="0.4" />
                                        <circle cx="23.9999" cy="24.0001" r="12.2264" fill="#ffffff"/>
                                        <line x1="24.5" y1="48" x2="24.5" y2="81" stroke="#fff" />
                                    </svg>
                                </Box>

                                <Typography
                                    variant="h3"
                                    component={"h3"}
                                    fontSize={{xs:22, lg: 30}}
                                    fontWeight={600}
                                    color="#ffffff"
                                >
                                    Chế độ đãi ngộ
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontWeight={400}
                                    fontSize={{xs:16, lg: 18}}
                                    color="primary.cl50"
                                    textAlign={"justify"}
                                >
                                    Công ty thẩm mỹ viện chúng tôi cung cấp chế độ đãi ngộ hấp dẫn, bao gồm lương cạnh tranh, thưởng hiệu quả, và phúc lợi toàn diện.
                                </Typography>

                            </Stack>
                        </Grid2>
                        <Grid2 size={{ xs: 12, lg: 4 }}>
                            <Stack direction={"column"} spacing={2} position={"relative"} top={{xs: 0, lg: "3%"}}>
                                <Typography
                                    variant="h3"
                                    component={"h3"}
                                    fontSize={{xs:22, lg: 30}}
                                    fontWeight={600}
                                    color="#ffffff"
                                >
                                    Nhiều cơ hội
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontWeight={400}
                                    fontSize={{xs:16, lg: 18}}
                                    color="primary.cl50"
                                    textAlign={"justify"}
                                >
                                    Làm việc tại công ty thẩm mỹ viện, bạn sẽ có cơ hội phát triển và thăng tiến nhanh chóng.
                                </Typography>
                                <Box display={{ xs: 'none', lg: 'block' }}>
                                    <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="57" r="24" fill="#ffffff" fillOpacity="0.2" />
                                        <circle cx="23.999" cy="57" r="19.4717" fill="#ffffff" fillOpacity="0.4" />
                                        <circle cx="23.9999" cy="57.0001" r="12.2264" fill="#ffffff" />
                                        <line x1="24.5" y1="2.18557e-08" x2="24.5" y2="33" stroke="#fff" />
                                    </svg>
                                </Box>

                            </Stack>
                        </Grid2>
                        <Grid2 size={{ xs: 12, lg: 4 }}>
                            <Stack direction={"column"} spacing={2} position={"relative"} top={{xs: 0, lg: "72%"}}>
                                <Box display={{ xs: 'none', lg: 'block' }}>
                                    <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="#ffffff" fillOpacity="0.2" />
                                        <circle cx="24" cy="24" r="19.4717" fill="#ffffff" fillOpacity="0.4" />
                                        <circle cx="23.9999" cy="24.0001" r="12.2264" fill="#ffffff" />
                                        <line x1="24.5" y1="48" x2="24.5" y2="81" stroke="#fff" />
                                    </svg>
                                </Box>

                                <Typography
                                    variant="h3"
                                    component={"h3"}
                                    fontSize={{xs:22, lg: 30}}
                                    fontWeight={600}
                                    color="#ffffff"
                                >
                                    Nơi làm việc
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontWeight={400}
                                    fontSize={{xs:16, lg: 18}}
                                    color="primary.cl50"
                                    textAlign={"justify"}
                                >
                                    Công ty thẩm mỹ viện có môi trường làm việc hiện đại, chuyên nghiệp và thân thiện.
                                </Typography>

                            </Stack>
                        </Grid2>
                    </Grid2>

                </Container>

            </Stack>

            <Box textAlign={"center"} sx={{position: 'relative', zIndex: 2}}>
                <Button variant="outlined" color="white" endIcon={<IconArrowRight size={18}/>} sx={{py:1, px: 4}}>
                    Xem thêm
                </Button>
            </Box>

            <Box    
                position={"absolute"}
                left={0}
                top={0}
                bottom={0}
                right={0}
                width={"100%"}
                height={"100%"}
                zIndex={1}
                sx={{
                    background: "rgba(0, 122, 154, 0.7)"
                }}
            />

            <Box 
                position={"absolute"}
                left={0}
                top={0}
                bottom={0}
                right={0}
                zIndex={0}
            >
                <Image
                    src="/team-doctors-meeting.jpg"
                    width={1440}
                    height={1000}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
        </Box>
    )
}