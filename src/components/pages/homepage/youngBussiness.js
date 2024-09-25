import { gtgConfig } from "@/config/global";
import { Box, Button, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import HeadingHomePage from "./heading";
import { IconArrowRight } from "@tabler/icons-react";
import Markdown from "react-markdown";
import Link from "next/link";

export default function YoungBussinessHomePageSection({data}){

    const thumbnail = data?.thumbnail_section_2?.data?.attributes?.url ? gtgConfig.cdnDomain + data?.thumbnail_section_2?.data?.attributes?.url : "/young-bussiness.jpg"

    return(
        <Box py={10}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={8}>
                    <Grid2 size={{xs:12, lg: 5}}>
                        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                            <Image
                                src={thumbnail}
                                width={475}
                                height={523}
                                alt=""
                                priority
                                quality={60}
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </Stack>
                    </Grid2>
                    <Grid2 size={{xs:12, lg: 7}}>
                        <Stack direction={"column"} spacing={2}>
                            <HeadingHomePage 
                                subTitle={data?.sub_title_section_2}
                                title={data?.title_section_2}
                            />
                            <Box 
                                className="description"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    color: "neutral.cl900",
                                    py: 2,
                                    "& p": {
                                        paddingBottom: '15px',
                                        textAlign: {
                                            xs: 'justify',
                                            lg: 'left'
                                        }
                                    }
                                }}
                            >
                               <Markdown>{data?.content_section_2}</Markdown>
                            </Box>
                            <Box>
                                <Button 
                                    variant="contained" 
                                    endIcon={<IconArrowRight color="#fff"/>} 
                                    size="large"
                                    component={Link}
                                    href={data?.link_btn_section_2 || "/"}
                                >
                                    <Typography color="#fff" fontWeight={600}>{data?.label_btn_section_2}</Typography>
                                </Button>
                            </Box>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}