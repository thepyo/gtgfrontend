import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack } from "@mui/material";
import Image from "next/image";

export default function Section3() {
    return (
        <Stack py={5}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, lg: 5 }}>
                        <Box className="hover-img">
                            <figure>
                                <Image
                                    src="/tuyendung-gallary-1.jpg"
                                    width={520}
                                    height={410}
                                    alt=""
                                    style={styles.imgMain}
                                />
                            </figure>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 3.5 }}>
                        <Stack direction={"column"} spacing={1}>
                            <Box className="hover-img">
                                <figure>
                                    <Image
                                        src="/tuyendung-gallary-2.jpg"
                                        width={520}
                                        height={410}
                                        alt=""
                                        style={styles.img}
                                    />
                                </figure>
                            </Box>
                            <Box className="hover-img">
                                <figure>
                                    <Image
                                        src="/tuyendung-gallary-3.jpg"
                                        width={520}
                                        height={410}
                                        alt=""
                                        style={styles.img}
                                    />
                                </figure>
                            </Box>
                        </Stack>

                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 3.5 }}>
                        <Stack direction={"column"} spacing={1}>
                            <Box className="hover-img">
                                <figure>
                                    <Image
                                        src="/tuyendung-gallary-4.jpg"
                                        width={520}
                                        height={410}
                                        alt=""
                                        style={styles.img}
                                    />
                                </figure>
                            </Box>
                            <Box className="hover-img">
                                <figure>
                                    <Image
                                        src="/tuyendung-gallary-5.jpg"
                                        width={520}
                                        height={410}
                                        alt=""
                                        style={styles.img}
                                    />
                                </figure>
                            </Box>
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