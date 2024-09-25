import CallToActionDefault from "@/components/cta/default";
import EventDetailContent from "@/components/pages/event/detail/content";
import FormRegisterEvent from "@/components/pages/event/detail/form";
import ThumbnailEventDetail from "@/components/pages/event/detail/thumbnail";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Container, Grid2 } from "@mui/material";
import { NextSeo } from "next-seo";

export default function EventDetailPage({posts}){

    const post = posts.attributes

    const thumbnail = post?.thumbnail?.data ? gtgConfig.cdnDomain + post?.thumbnail?.data?.attributes?.url : "/event-detail.jpg"

    return(
        <>
            <NextSeo
                title={post?.title}
                description={post?.description}
            />
            <HeroPage
                title={post?.title}
                sapo={"Event GTG Group"}
                categories={[{id:1,name:'Sự kiện',href:"/su-ken"}]}
                thumbnail={thumbnail}
            />

            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={8} sx={{my:6}}>
                    <Grid2 size={{xs: 12, lg: 7.5}}>
                        <ThumbnailEventDetail thunbnail={thumbnail}/>
                        <EventDetailContent title={post?.title} content={post?.content} />
                    </Grid2>
                    <Grid2 size={{xs: 12, lg: 4.5}}>
                        <FormRegisterEvent eventId={posts?.id}/>
                    </Grid2>
                </Grid2>
                <CallToActionDefault />
            </Container>
        </>
    )
}


export async function getStaticProps({ params }) {
    const slug = params?.slug
    const res = await fetch(`${process.env.API_URL}/events?filters[slug][$eq]=${slug}&populate=*`)
    const data = await res.json()

    return{
        props: {
            posts: data?.data?.[0]
        },
        revalidate: gtgConfig.revalidate
    }
    
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/events?pagination[page]=1&pagination[pageSize]=250`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            slug: `${post?.attributes?.slug}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}