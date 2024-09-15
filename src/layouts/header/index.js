import Logo from "@/components/ui/logo";
import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack } from "@mui/material";
import Navbar from "./navbar";

export default function Header(){
    return(
        <Stack component={"header"} bgcolor="#fff" minHeight={{xs: '80px', lg: "100px"}} justifyContent={"center"} alignItems={"center"} sx={{zIndex: 999}}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{xs:6, lg: 2}}>
                        <Logo />
                    </Grid2>
                    <Grid2 size={{xs:6, lg: 10}}>
                        <Navbar />
                    </Grid2>
                </Grid2>
            </Container>
        </Stack>
    )
}