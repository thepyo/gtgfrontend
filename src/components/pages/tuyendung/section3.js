import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack } from "@mui/material";
import Image from "next/image";

export default function Section3({data}) {
    return (
        <Stack py={5}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, lg: 5 }}>
                        {data?.img1?.data?.attributes?.url && 
                            <Box className="hover-img">
                                <figure>
                                    <Image
                                        src={gtgConfig.cdnDomain + data?.img1?.data?.attributes?.url}
                                        width={520}
                                        height={410}
                                        alt=""
                                        style={styles.imgMain}
                                    />
                                </figure>
                            </Box>
                        }
                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 3.5 }}>
                        <Stack direction={"column"} spacing={1}>
                            {data?.img2?.data?.attributes?.url && 
                                <Box className="hover-img">
                                    <figure>
                                        <Image
                                            src={gtgConfig.cdnDomain + data?.img2?.data?.attributes?.url}
                                            width={520}
                                            height={410}
                                            alt=""
                                            style={styles.img}
                                        />
                                    </figure>
                                </Box>
                            }
                            {data?.img3?.data?.attributes?.url && 
                                <Box className="hover-img">
                                    <figure>
                                        <Image
                                            src={gtgConfig.cdnDomain + data?.img3?.data?.attributes?.url}
                                            width={520}
                                            height={410}
                                            alt=""
                                            style={styles.img}
                                        />
                                    </figure>
                                </Box>
                            }
                        </Stack>

                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 3.5 }}>
                        <Stack direction={"column"} spacing={1}>
                            {data?.img4?.data?.attributes?.url && 
                                <Box className="hover-img">
                                    <figure>
                                        <Image
                                            src={gtgConfig.cdnDomain + data?.img4?.data?.attributes?.url}
                                            width={520}
                                            height={410}
                                            alt=""
                                            style={styles.img}
                                        />
                                    </figure>
                                </Box>
                            }
                            {data?.img5?.data?.attributes?.url && 
                                <Box className="hover-img">
                                    <figure>
                                        <Image
                                            src={gtgConfig.cdnDomain + data?.img5?.data?.attributes?.url}
                                            width={520}
                                            height={410}
                                            alt=""
                                            style={styles.img}
                                        />
                                    </figure>
                                </Box>
                            }
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Stack>
    )
}

const styles = {
    imgMain: {
        width: '100%',
        height: '415px',
        objectFit: 'cover',
        objectPosition: 'center'
    },
    img: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        objectPosition: 'center'
    }
}