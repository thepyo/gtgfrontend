import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Container, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function CallToActionAboutUs({data}){
    return(
        <Box py={{xs: 4, lg: 8}}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack maxWidth={"888px"} spacing={3}>
                    <Typography
                        fontSize={{
                            xs: 40,
                            lg: 72
                        }}
                        fontWeight={600}
                        lineHeight={1.3}
                        letterSpacing={"-1px"}
                        color="neutral.cl900"
                    >
                        {data?.title_cta}
                    </Typography>

                    <Stack direction={"row"} component={Link} href={data?.link_button_cta} alignItems={"center"} spacing={1}>
                        <Typography variant="body1" fontSize={20} fontWeight={500} color="neutral.cl500">
                            {data?.label_button_cta}
                        </Typography>
                        <IconArrowRight color={theme.palette.neutral.cl500} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}