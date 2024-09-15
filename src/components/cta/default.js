import theme from "@/config/theme";
import { Box, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";

export default function CallToActionDefault(){
    return(
        <Stack
            direction={{
                xs: 'column',
                lg: "row"
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{
                xs: 3,
                lg: 30
            }}
            pt={5}
        >
            <Typography variant="h2" component={"h2"} fontSize={60} fontWeight={600} color="neutral.cl900">
                Biến giấc mơ làm đẹp của bạn thành hiện thực
            </Typography>
            <Box display={{xs:'none', lg: 'block'}}><IconArrowRight size={80} color={theme.palette.neutral.cl900}/></Box>
        </Stack>
    )
}