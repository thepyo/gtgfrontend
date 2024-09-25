import Section1 from "@/components/pages/tuyendung/section1";
import Section2 from "@/components/pages/tuyendung/section2";
import Section3 from "@/components/pages/tuyendung/section3";
import Section4 from "@/components/pages/tuyendung/section4";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { NextSeo } from "next-seo";

export default function TuyenDungPage({data, posts}){
    return(
        <>
            <NextSeo
                title={data?.seo?.title || "Tuyển dụng"}
                description={data?.seo?.description || data?.description_sec1}
            />
            <HeroPage 
                title="Tuyển dụng"
                sapo="Tuyển dụng"
                thumbnail="/tuyendung.jpg"
            />
            <Section1 data={data}/>
            <Section2 data={data}/>
            <Section3 data={data}/>
            <Section4 data={data} posts={posts}/>
        </>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/tuyen-dung-config?populate=*`
    const url1 = `${process.env.API_URL}/tuyen-dungs?populate=*`

    const getdata = await fetch(url)
    const response = await getdata.json()

    const getdatapost = await fetch(url1)
    const responseDataPost = await getdatapost.json()

    return{
        props: {
            data: response?.data?.attributes,
            posts: responseDataPost?.data
        },
        revalidate: gtgConfig.revalidate
    }
}