import { gtgConfig } from "@/config/global";
import { Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import Widget1 from "./widget1";
import Widget2 from "./wiget2";
import Widget3 from "./wiget3";
import Widget4 from "./wiget4";
import Link from "next/link";
import { IconPointFilled } from "@tabler/icons-react";

export default function Footer(){
    return(
        <Stack 
            component={"footer"} 
            direction={"column"} 
            spacing={4} 
            bgcolor={"#fff"} 
            minHeight={"500px"}
            justifyContent={"center"}
            alignItems={"center"}
            py={{
                xs: 5,
                lg: 0
            }}
        >
            <Container maxWidth={gtgConfig.maxWidth}>
                <Divider light sx={{my: 5}}/>
                <Grid2 container spacing={{xs:2, lg: 8}}>
                    <Grid2 size={{xs: 12, lg: 3}}>
                        <Widget1 />
                    </Grid2>
                    <Grid2 size={{xs: 12, lg: 3}}>
                        <Widget2 />
                    </Grid2>
                    <Grid2 size={{xs: 12, lg: 3}}>
                        <Widget3 />
                    </Grid2>
                    <Grid2 size={{xs: 12, lg: 3}}>
                        <Widget4 />
                    </Grid2>
                </Grid2>

                <Divider sx={{my: 5}}/>

                <Grid2 container spacing={2}>
                    <Grid2 size={{xs: 12, lg: 6}}>
                        <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                            Copyright © 2024 by TGTG
                        </Typography>
                    </Grid2>

                    <Grid2 size={{xs: 12, lg: 6}}>
                        <Stack direction={"row"} justifyContent={{xs: 'start', lg: "end"}} alignItems={"center"} spacing={2}>
                            <Link href="/">
                                <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                                    Điều khoản dịch vụ
                                </Typography>
                            </Link>
                            <IconPointFilled size={15} color="#555"/>
                            <Link href="/">
                                <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                                    Chính sách bảo mật
                                </Typography>
                            </Link>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Stack>
    )
}