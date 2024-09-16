import { Grid2, Stack } from "@mui/material";
import Image from "next/image";

export default function GalleryCulture() {
    return (
        <Grid2 container spacing={2} mt={{xs:4, lg: 10}}>
            <Grid2 size={{ xs: 12, lg: 3 }} className="hover-img">
                <figure>
                    <Image
                        src="/culture1.jpg"
                        width={378}
                        height={408}
                        alt=""
                        style={{
                            width: '100%',
                            height: '408px',
                            objectFit: 'cover'
                        }}
                    />
                </figure>
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 3 }} className="hover-img">
                <Stack direction={"column"} spacing={1.4}>
                    <figure>
                        <Image
                            src="/culture2.jpg"
                            width={378}
                            height={200}
                            alt=""
                            style={{
                                width: '100%',
                                height: '196px',
                                objectFit: 'cover'
                            }}
                        />
                    </figure>
                    <figure>
                        <Image
                            src="/culture3.jpg"
                            width={378}
                            height={200}
                            alt=""
                            style={{
                                width: '100%',
                                height: '196px',
                                objectFit: 'cover'
                            }}
                        />
                    </figure>
                </Stack>
            </Grid2>

            <Grid2 size={{ xs: 12, lg: 3 }} className="hover-img">
                <figure>
                    <Image
                        src="/culture4.jpg"
                        width={378}
                        height={408}
                        alt=""
                        style={{
                            width: '100%',
                            height: '408px',
                            objectFit: 'cover'
                        }}
                    />
                </figure>
            </Grid2>

            <Grid2 size={{ xs: 12, lg: 3 }} className="hover-img">
                <Stack direction={"column"} spacing={1.4}>
                    <figure>
                        <Image
                            src="/culture5.jpg"
                            width={378}
                            height={200}
                            alt=""
                            style={{
                                width: '100%',
                                height: '196px',
                                objectFit: 'cover'
                            }}
                        />
                    </figure>
                    <figure>
                        <Image
                            src="/culture6.jpg"
                            width={378}
                            height={200}
                            alt=""
                            style={{
                                width: '100%',
                                height: '196px',
                                objectFit: 'cover'
                            }}
                        />
                    </figure>
                </Stack>
            </Grid2>
        </Grid2>
    )
}