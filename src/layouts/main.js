import { Box, Stack } from "@mui/material";
import Footer from "./footer";
import Header from "./header";

export default function MainLayout({children}){
    return(
        <Stack direction={"column"} minHeight={'100vh'}>
            <Header />
            <Box component={"main"} flexGrow={1} bgcolor={"#fff"}>
                {children}
            </Box>
            <Footer />
        </Stack>
    )
}