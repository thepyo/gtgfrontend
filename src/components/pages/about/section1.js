import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import AboutUsItem from "./item";

export default function AboutUsSection1({data}){
    return(
        <Box position={"relative"} pt={{xs: 4, lg: 8}} sx={{overflow: 'hidden'}}>
            <Box position={"relative"} sx={{zIndex: 1}}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Box maxWidth={800} py={{xs:3, lg: 10}}>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={{
                                xs:48,
                                lg: 72
                            }}
                            fontWeight={600}
                            lineHeight={1.3}
                            letterSpacing={"-1.8px"}
                            color="neutral.cl900"
                        >
                            {data?.title}
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box 
                position={"relative"}
                sx={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: '0px -4px 13px rgba(0, 0, 0, 0.12)',
                    zIndex: 1
                }} 
            >
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Box maxWidth={626} py={{xs:3, lg:10}}>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={{xs:24, lg: 30}}
                            fontWeight={600}
                            lineHeight={1.3}
                            color="neutral.cl900"
                        >
                            {data?.sapo}
                        </Typography>
                    </Box>
                    <Grid2 container spacing={3}>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <Stack direction={"column"} spacing={2}  justifyContent={"center"} minHeight={{xs: 'unset', lg: 360}}>
                                <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                                    <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                                    <Typography variant="body2" fontSize={16} fontWeight={400} color="primary.main">
                                        {data?.sub_title_section_1}
                                    </Typography>
                                </Stack>

                                <Typography
                                    fontSize={{xs:20, lg: 24}}
                                    fontWeight={400}
                                    lineHeight={1.5}
                                    color="neutral.cl900"
                                    textAlign={"justify"}
                                >
                                    {data?.description_section_1}
                                </Typography>
                            </Stack>
                        </Grid2>
                        {data?.about && data?.about?.map(item =>
                            <Grid2 size={{xs: 12, lg: 4}} key={item.id}>
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

            <Box
                position={"absolute"}
                top="-150px"
                right="-150px"
                width={954}
                height={954}
                sx={{
                    background: 'linear-gradient(148.46deg, #00B2EF 15.95%, #A3E6FF 54.22%)',
                    filter: 'blur(20px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
        </Box>
    )
}