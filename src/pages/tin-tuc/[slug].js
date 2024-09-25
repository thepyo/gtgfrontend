import CallToActionDefault from "@/components/cta/default";
import ContentPost from "@/components/pages/news/detail/content";
import RelatePost from "@/components/pages/news/detail/relate";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container } from "@mui/material";
import { NextSeo } from "next-seo";

export default function NewDetailPage({post,posts}){
    return(
        <>
            <NextSeo
                title={post?.seo?.title || post?.title}
                description={post?.seo?.description || post?.description}
            />
            <HeroPage
                title={post?.title}
                sapo={post?.title}
                categories={[{id:1,name:'Tin tức',href:"/tin-tuc"}]}
                thumbnail={gtgConfig?.cdnDomain + post?.thumbnail?.data?.attributes?.url}
            />
            <Box py={5}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <ContentPost post={post}/>
                    <RelatePost posts={posts}/>
                    <CallToActionDefault />
                </Container>
            </Box>
        </>
    )
}

export async function getStaticProps({ params }) {
    const slug = params?.slug
    const res = await fetch(`${process.env.API_URL}/news?filters[slug][$eq]=${slug}&populate=*`)
    const data = await res.json()

    const getRelatePost = await fetch(`${process.env.API_URL}/news?pagination[page]=1&pagination[pageSize]=10&populate=*`)
    const resultRelatePost = await getRelatePost.json()

    return{
        props: {
            post: data?.data?.[0]?.attributes,
            posts: resultRelatePost?.data
        },
        revalidate: gtgConfig.revalidate
    }
    
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/news?pagination[page]=1&pagination[pageSize]=250`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            slug: `${post?.attributes?.slug}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}