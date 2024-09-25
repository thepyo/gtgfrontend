import CallToActionDefault from "@/components/cta/default";
import ListNew from "@/components/pages/news/list";
import PaginationNew from "@/components/pages/news/pagination";
import NewsSection1 from "@/components/pages/news/section1";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container } from "@mui/material";
import { NextSeo } from "next-seo";

export default function NewsPage({config, datas}){
    return(
        <>
            <NextSeo
                title={datas?.seo?.title || "Tin tức"}
                description={datas?.seo?.description || "Tin tức"}
            />
            <HeroPage
                title="Tin tức"
                sapo="Tin tức"
                thumbnail="/tin-tuc.jpg"
            />
            <Box py={5}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <NewsSection1 config={config}/>
                    <ListNew datas={datas}/>
                    <PaginationNew />
                    <CallToActionDefault />
                </Container>
            </Box>
        </>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/cau-hinh-tin-tuc?populate[0]=feature_post&populate[1]=feature_post.thumbnail&populate[2]=feature_post.category&populate[3]=read_today&populate[4]=read_today.thumbnail&populate[5]=seo&populate[6]=seo.thumbnail`

    const urlData = `${process.env.API_URL}/news?populate=*`

    const getdata = await fetch(url)
    const response = await getdata.json()

    const getdataPost = await fetch(urlData)
    const responsePost = await getdataPost.json()

    return{
        props: {
            config: response?.data?.attributes,
            datas: responsePost?.data,
        },
        revalidate: gtgConfig.revalidate
    }
}