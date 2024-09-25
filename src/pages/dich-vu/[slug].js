import CallToActionDefault from "@/components/cta/default";
import SidebarService from "@/components/pages/detailServices/sidebar";
import Faq from "@/components/ui/faq";
import FormatTime from "@/components/ui/fomatDate";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { IconCalendarWeek, IconEye } from "@tabler/icons-react";
import { NextSeo } from "next-seo";
import Markdown from "react-markdown";


export default function ServiceDetail({datas, services}){
    return(
        <>
            <NextSeo
                title={datas?.seo?.title || datas?.title}
                description={datas?.seo?.description || datas?.description}
            />
            <HeroPage
                title={datas?.title}
                sapo={datas?.title}
                categories={[{id:1,name:'Sự kiện',href:"/su-ken"}]}
                thumbnail={datas?.thumbnail?.data ? gtgConfig.cdnDomain + datas?.thumbnail?.data?.attributes?.url : "/event-detail.jpg"}
            />
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={{xs:4,lg:9}} sx={{my:6}}>
                    <Grid2 size={{xs: 12, lg: 9}}>
                        <Typography variant="h1" component={"h1"} fontSize={30} fontWeight={700} color="primary.main" mb={3}>
                            {datas?.title}
                        </Typography>
                        <Divider light sx={{my:2}} />
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconCalendarWeek stroke={1} color="#888" size={19} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    <FormatTime time={datas?.updatedAt} />
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconEye stroke={1} color="#888" size={19} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    {datas?.fake_view || 9000} lượt xem
                                </Typography>
                            </Stack>
                        </Stack>
                        <Divider light sx={{my:2}} />

                        <Box className="post-content" my={3} lineHeight={2}>
                            <Markdown>
                                {datas?.content}
                            </Markdown>
                        </Box>
                        <Box mb={3}>
                            <Faq title={datas?.title_faq} datas={datas?.faq} />
                        </Box>
                    </Grid2>
                    <Grid2 size={{xs: 12, lg: 3}}>
                        <SidebarService services={services}/>
                    </Grid2>
                </Grid2>
                <CallToActionDefault />
            </Container>
        </>
    )
}


export async function getStaticProps({ params }) {
    const slug = params?.slug

    const res = await fetch(`${process.env.API_URL}/services?filters[slug][$eq]=${slug}&populate=*`)
    const data = await res.json()

    const reqService = await fetch(`${process.env.API_URL}/services?popular=*`)
    const resService = await reqService.json()

    return{
        props: {
            datas: data?.data?.[0]?.attributes,
            services: resService?.data
        },
        revalidate: gtgConfig.revalidate
    }
    
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/services?pagination[page]=1&pagination[pageSize]=250`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            slug: `${post?.attributes?.slug}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}