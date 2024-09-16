import theme from "@/config/theme";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import AboutUsItem from "../about/item";
import { gtgConfig } from "@/config/global";

export default function SectionAboutHomePage() {
    return (
        <Box py={{xs:3, lg: 8}}>
        <Container maxWidth={gtgConfig.maxWidth}>
            <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, lg: 4 }}>
                    <Stack direction={"column"} spacing={2} justifyContent={"center"} minHeight={{ xs: 'unset', lg: 360 }}>
                        <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                            <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                            <Typography variant="body2" fontSize={16} fontWeight={400} color="primary.main">
                                NHỮNG ĐIỀU CHÚNG TÔI ĐÃ ĐẠT ĐƯỢC
                            </Typography>
                        </Stack>

                        <Typography
                            fontSize={{ xs: 20, lg: 24 }}
                            fontWeight={400}
                            lineHeight={1.5}
                            color="neutral.cl900"
                            textAlign={"justify"}
                        >
                            Thành lập vào tháng 11/2011, trải qua chặng đường hơn 12 năm phát triển, GTG  hiện nay đang sở hữu các thương hiệu uy tín hàng đầu trong ngành
                        </Typography>
                    </Stack>
                </Grid2>

                <Grid2 size={{ xs: 12, lg: 4 }}>
                    <AboutUsItem />
                </Grid2>

                <Grid2 size={{ xs: 12, lg: 4 }}>
                    <AboutUsItem
                        thumbnail="/img2.jpg"
                        number="03"
                        text="Chi nhánh trên toàn quốc"
                    />
                </Grid2>

                <Grid2 size={{ xs: 12, lg: 4 }}>
                    <AboutUsItem
                        thumbnail="/img3.jpg"
                        number="3000+"
                        text="Nhân sự chuyên nghiệp"
                        direction="column"
                        spacing={0}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 4 }}>
                    <AboutUsItem
                        thumbnail="/img4.jpg"
                        number="35 triệu"
                        text="Khách hàng hài lòng"
                        direction="column"
                        spacing={0}
                    />
                </Grid2>

                <Grid2 size={{ xs: 12, lg: 4 }}>
                    <AboutUsItem
                        thumbnail="/img5.jpg"
                        number="12 năm"
                        text="Hành trình & Phát triển"
                        direction="column"
                        spacing={0}
                    />
                </Grid2>
            </Grid2>
        </Container>
        </Box>
    )
}