import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Container, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function CallToActionAboutUs(){
    return(
        <Box py={{xs: 4, lg: 8}}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack maxWidth={"888px"} spacing={3}>
                    <Typography
                        fontSize={72}
                        fontWeight={600}
                        lineHeight={"90px"}
                        letterSpacing={"-3%"}
                        color="neutral.cl900"
                    >
                        Thẩm Mỹ Viện GTG - đối tác làm đẹp, nâng cao sự tự tin và sức khỏe cho cộng đồng
                    </Typography>

                    <Stack direction={"row"} component={Link} href="#" alignItems={"center"} spacing={1}>
                        <Typography variant="body1" fontSize={20} fontWeight={500} color="neutral.cl500">
                            Khám phá thành tích
                        </Typography>
                        <IconArrowRight color={theme.palette.neutral.cl500} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}