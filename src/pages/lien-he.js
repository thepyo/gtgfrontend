import ContactForm from "@/components/pages/contact/form";
import InfoContactPage from "@/components/pages/contact/info";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container, Stack } from "@mui/material";
import { NextSeo } from "next-seo";

export default function LienHePage({data}){
    return(
        <>
            <NextSeo
                title={data?.seo?.title || data?.title}
                description={data?.seo?.description || data?.description}
                openGraph={{
                    url: gtgConfig.cdnDomain,
                    title: data?.seo?.title || "Thương hiệu GTG Group", 
                    description: data?.seo?.description || data?.description,
                    images: [
                        { url: data?.seo?.thubnail?.data ? gtgConfig.cdnDomain +  data?.seo?.thubnail?.data?.attributes?.url : '/sv-thumbnail.jpg'}
                    ],
                    siteName: "GTG Group",
                }}
            />
            <HeroPage 
                title="Liên hệ"
                sapo={data?.title}
            />
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack 
                    direction={{xs: 'column', lg: "row"}}
                    py={5}
                >
                    <ContactForm />
                    <InfoContactPage data={data}/>
                </Stack>
            </Container>

            <Box>
                <iframe 
                    src={data?.map}
                    width="100%" 
                    height="600" 
                    loading="lazy"
                    frameBorder="0"
                />
            </Box>
        </>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/contact?populate[0]=seo&populate[1]=seo.thumbnail`
    const getdata = await fetch(url)
    const response = await getdata.json()
    return{
        props: {
            data: response?.data?.attributes
        },
        revalidate: gtgConfig.revalidate
    }
}