import CallToActionDefault from "@/components/cta/default";
import CallToActionAboutUs from "@/components/pages/about/cta";
import DoctorSection from "@/components/pages/about/doingu";
import ValueSection from "@/components/pages/about/giatri";
import AboutUsSection1 from "@/components/pages/about/section1";
import MissionSection from "@/components/pages/about/sumenh";
import VisionSection from "@/components/pages/about/tamnhin";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Container } from "@mui/material";
import { NextSeo } from "next-seo";

export default function AboutPage({data}){
    return(
        <>
            <NextSeo
                title={data?.seo?.title || "Giới thiệu"}
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
            <HeroPage
                title="Giới thiệu"
                sapo="Giới thiệu"
                thumbnail="/tin-tuc.jpg"
            />

            <AboutUsSection1 data={data}/>

            <VisionSection data={data}/>
            <MissionSection data={data}/>
            <ValueSection data={data}/>
            <CallToActionAboutUs data={data}/>
            <DoctorSection data={data}/>

            <Container maxWidth={gtgConfig.maxWidth}>
                <CallToActionDefault />
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/about?populate[0]=thumbnail_mission&populate[1]=thumbnail_value&populate[2]=thumbnail_vision&populate[3]=about&populate[4]=about.thumbnail&populate[5]=teams&populate[6]=teams.thumbnail&populate[7]=seo&populate[8]=seo.thumbnail`
    const getdata = await fetch(url)
    const response = await getdata.json()
    return{
        props: {
            data: response?.data?.attributes
        },
        revalidate: gtgConfig.revalidate
    }
}