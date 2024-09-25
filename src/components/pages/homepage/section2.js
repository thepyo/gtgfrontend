import theme from "@/config/theme";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import AboutUsItem from "../about/item";
import { gtgConfig } from "@/config/global";

export default function SectionAboutHomePage({data}) {
    return (
        <Box py={{xs:3, lg: 8}}>
        <Container maxWidth={gtgConfig.maxWidth}>
            <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, lg: 4 }}>
                    <Stack direction={"column"} spacing={2} justifyContent={"center"} minHeight={{ xs: 'unset', lg: 360 }}>
                        <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                            <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                            <Typography variant="body2" fontSize={16} fontWeight={400} color="primary.main">
                                {data.title_section_1}
                            </Typography>
                        </Stack>

                        <Typography
                            fontSize={{ xs: 20, lg: 24 }}
                            fontWeight={400}
                            lineHeight={1.5}
                            color="neutral.cl900"
                            textAlign={"justify"}
                        >
                            {data.description_section_1}
                        </Typography>
                    </Stack>
                </Grid2>

                {data?.about?.map(item =>
                    <Grid2 size={{ xs: 12, lg: 4 }} key={item.id}>
                        <AboutUsItem 
                            thumbnail={`${gtgConfig.cdnDomain}${item.thumbnail.data.attributes.url}`}
                            number={item.text1}
                            text={item.text2}
                            direction={item.vertical_layout ? "column" : "row"}
                        />
                    </Grid2>
                )}
            </Grid2>
        </Container>
        </Box>
    )
}