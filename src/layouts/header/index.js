import Logo from "@/components/ui/logo";
import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack } from "@mui/material";
import Navbar from "./navbar";
import Search from "./search";

export default function Header(){
    return(
        <Stack component={"header"} bgcolor="#fff" minHeight={90} justifyContent={"center"} alignItems={"center"} sx={{zIndex: 999}}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{xs:5, lg: 2}}>
                        <Logo />
                    </Grid2>
                    <Grid2 size={{xs:1, lg: 8}}>
                        <Navbar />
                    </Grid2>
                    <Grid2 size={{xs:5.5, lg: 2}}>
                        <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"}>
                            <Search />
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Stack>
    )
}