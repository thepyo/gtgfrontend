import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroCulture(){
    return(
        <Stack minHeight={{xs: 500, lg: 735}} position={"relative"} sx={{overflow: 'hidden'}}>

            <Box position={"absolute"} zIndex={2} bottom={{xs: 0, lg: "-8px"}} left={0} right={0}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Grid2 container spacing={8}>
                        <Grid2 size={{xs:12, lg: 5.5}}>
                            <Box display={{xs: 'none', lg: 'block'}}>
                                <Image
                                    src={'/hero-culture-girl.png'}
                                    width={541}
                                    height={593}
                                    alt=""
                                    style={{
                                        width: 541,
                                        height: 'auto',
                                    }}
                                />
                            </Box>
                        </Grid2>
                        <Grid2 size={{xs:12, lg: 6.5}}>
                            <Stack 
                                direction={"column"} 
                                spacing={2} 
                                maxWidth={{xs: '100%', lg: 632}}
                                position={{xs: 'relative', lg: "absolute"}}
                                bottom={{xs: 20, lg: 150}}
                            >
                                <Typography
                                    fontSize={{xs: 24, lg: 30}}
                                    fontWeight={500}
                                    lineHeight={1.2}
                                    color="#1943DE"
                                >
                                    Bền vững - Đoàn kết - Sáng tạo
                                </Typography>
                                <Typography
                                    fontSize={48}
                                    fontWeight={600}
                                    lineHeight={1.3}
                                    letterSpacing={"-1px"}
                                    color="#fff"
                                    className="text-effect"
                                >
                                    Tập đoàn GTG tạo ra môi trường làm việc <span>lý tưởng</span> cho toàn bộ nhân viên
                                </Typography>
                            </Stack>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            <Box
                position={"absolute"}
                top={0}
                left={0}
                bottom={0}
                right={0}
                zIndex={0}
            >
                <Image
                    src="/hero-culture.jpg"
                    width={1920}
                    height={735}
                    alt=""
                    style={{
                        width: '100%',
                        height: 735,
                        objectFit: 'cover'
                    }}
                />
            </Box>

            <Box
                position={"absolute"}
                zIndex={1}
                bottom={0}
                left={0}
                right={0}
                top={0}
                bgcolor={'rgb(0,0,0,0.3)'}
                display={{xs: 'block', lg: 'none'}}
            />

            <Box
                position={"absolute"}
                zIndex={1}
                bottom={{
                    xs: 0,
                    lg: "-4%",
                    xl: '-10%'
                }}
                right={0}
                display={{
                    xs: 'none',
                    lg: 'block'
                }}
            >
                <Image
                    src={"/culture-pattern.svg"}
                    width={1102} 
                    height={608}
                    alt=""
                    style={{
                        width: '71vw',
                        height: 'auto'
                    }} 
                />
            </Box>
        </Stack>
    )
}