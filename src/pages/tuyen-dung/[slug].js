import CallToActionDefault from "@/components/cta/default";
import TuyendungDetailForm from "@/components/pages/tuyendung/detail/form";
import TuyendungDetailMeta from "@/components/pages/tuyendung/detail/meta";
import SidebarTuyendungDetail from "@/components/pages/tuyendung/detail/sidebar";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import Markdown from "react-markdown";

export default function TuyendungDetailPage({post}){
    return(
        <>
            <NextSeo
                title={post?.seo?.title || post?.title}
                description={post?.seo?.description || post?.description}
            />
            <HeroPage
                title={post?.title}
                sapo={post?.title}
                thumbnail="/tuyendung-detail.jpg"
                categories={[{id:1,name: "Tuyển dụng", href:"/tuyen-dung"}]}
            />
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack direction={"column"} py={5}>
                    <Grid2 container spacing={{
                        xs: 3,
                        lg: 10
                    }}>
                        <Grid2 size={{xs: 12, lg: 7}}>
                            <Typography
                                variant="h1"
                                component={"h1"}
                                fontSize={{
                                    xs: 30,
                                    lg: 48
                                }}
                                fontWeight={600}
                                color="primary.main"
                                letterSpacing={"-2.5%"}
                                mb={4}
                            >
                                {post?.title}
                            </Typography>
                            <TuyendungDetailMeta post={post}/>
                            <Divider light sx={{my:4}} />
                            <Box sx={{color: 'neutral.cl900', lineHeight: 1.7}} className="description-content">
                                <Markdown>
                                    {post?.content}
                                </Markdown>
                            </Box>
                            <TuyendungDetailForm />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 5}}>
                            <SidebarTuyendungDetail />
                        </Grid2>
                    </Grid2>

                    <CallToActionDefault />
                </Stack>

            </Container>
        </>
    )
}

export async function getStaticProps({ params }) {
    const slug = params?.slug
    const res = await fetch(`${process.env.API_URL}/tuyen-dungs?filters[slug][$eq]=${slug}&populate=*`)
    const data = await res.json()

    return{
        props: {
            post: data?.data?.[0]?.attributes
        },
        revalidate: gtgConfig.revalidate
    }
    
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/tuyen-dungs?pagination[page]=1&pagination[pageSize]=250`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            slug: `${post?.attributes?.slug}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}