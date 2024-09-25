import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Button, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Markdown from 'react-markdown'

export default function MissionSection({data}) {
    return (
        <Box py={{xs:4, lg: 8}} bgcolor={"#F5F7F9"}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={8}>

                    <Grid2 size={{ xs: 12, lg: 6 }} display={{xs:'none', lg: 'block'}}>
                        {data?.thumbnail_mission?.data ? 
                                <Image
                                    src={gtgConfig.cdnDomain + data?.thumbnail_mission?.data?.attributes?.url}
                                    width={540}
                                    height={500}
                                    alt=""
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            :
                                <Box width={"100%"} height={"100%"} bgcolor={"#D9D9D9"} />
                        }   
                    </Grid2>

                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <Stack direction={"column"} spacing={1.5} position={"relative"}>
                            <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                                <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                                <Typography variant="body2" fontSize={18} fontWeight={400} color="primary.main">
                                    {data?.sub_title_mission}
                                </Typography>
                            </Stack>

                            <Typography variant="h2" component={"h2"} fontSize={48} fontWeight={600} lineHeight={"60px"} letterSpacing={"-3%"} color="neutral.cl900" zIndex={1}>
                                {data?.title_mission}
                            </Typography> 

                            <Typography fontSize={18} fontWeight={400} lineHeight={"28px"} color="neutral.cl900" textAlign={"justify"} zIndex={1}>
                                {data?.description_mission}
                            </Typography>

                            <Box className="about-content" color="neutral.cl900" zIndex={1}>
                                <Markdown>
                                    {data?.content_mission}
                                </Markdown>
                                
                            </Box>

                            <Box>
                                <Button variant="contained" endIcon={<IconArrowRight color="#fff" size={19}/>} sx={{px: 5, py: 2}}>
                                    <Typography color="#fff">Xem thêm</Typography>
                                </Button>
                            </Box>

                            <Box position={"absolute"} bottom={30} right={0} zIndex={0}>
                                <Image
                                    src={"/mission.svg"}
                                    width={268}
                                    height={236}
                                    alt=""
                                />
                            </Box>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}