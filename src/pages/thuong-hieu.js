import CallToActionDefault from "@/components/cta/default";
import HeroBrandingSection from "@/components/pages/branding/hero";
import AboutBranding from "@/components/pages/branding/section1";
import SectionDrTien from "@/components/pages/branding/section2";
import SectionThePyo from "@/components/pages/branding/section4";
import SectionLaurent from "@/components/pages/branding/section5";
import { gtgConfig } from "@/config/global";
import { Container } from "@mui/material";
import { NextSeo } from "next-seo";

export default function BrandPage({data}){
    return(
        <>
            <NextSeo
                title={data?.seo?.title || "Thương hiệu GTG Group"}
                description={data?.seo?.description || data?.sapo}
                openGraph={{
                url: gtgConfig.cdnDomain,
                title: data?.seo?.title || "Thương hiệu GTG Group", 
                description: data?.seo?.description || data?.sapo,
                images: [
                    { url: data?.seo?.thubnail?.data ? gtgConfig.cdnDomain +  data?.seo?.thubnail?.data?.attributes?.url : '/sv-thumbnail.jpg'}
                ],
                siteName: "GTG Group",
                }}
            />
            <HeroBrandingSection />
            <AboutBranding data={data}/>
            <SectionDrTien data={data}/>
            <SectionThePyo data={data}/>
            <SectionLaurent data={data}/>
            <Container maxWidth={gtgConfig.maxWidth}>
                <CallToActionDefault />
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/brand?populate[0]=company&populate[1]=company.thumbnail&populate[2]=seo&populate[3]=seo.thumbnail`
    const getdata = await fetch(url)
    const response = await getdata.json()
    return{
        props: {
            data: response?.data?.attributes
        },
        revalidate: gtgConfig.revalidate
    }
}