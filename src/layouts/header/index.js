import Logo from "@/components/ui/logo";
import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack } from "@mui/material";

export default function Header(){
    return(
        <Stack bgcolor="#fff" minHeight={"100px"} justifyContent={"center"} alignItems={"center"}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{xs:6, lg: 2}}>
                        <Logo />
                    </Grid2>
                </Grid2>
            </Container>
        </Stack>
    )
}