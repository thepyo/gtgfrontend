import TestimonialItem from "@/components/testimonial/default";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2 } from "@mui/material";
import { NextSeo } from "next-seo";

export default function Testimonial({datas}){
    return(
        <>
            <NextSeo
                title="Phản hồi khách hàng"
                description="Phản hồi khách hàng"
            />
            
            <HeroPage
                title="Phản hồi khách hàng"
                sapo="Phản hồi khách hàng"
                thumbnail="/tin-tuc.jpg"
            />

            <Box py={6}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Grid2 container spacing={3}>
                        {datas?.map(item =>

                            <Grid2 size={{xs: 12, lg: 4}} key={item.id}>
                                <TestimonialItem 
                                    name={item.attributes?.name}
                                    content={item.attributes?.content}
                                    rating={item.attributes?.rating}
                                    width={"100%"}
                                    height={450}
                                />
                            </Grid2>

                        )}
                    </Grid2>
                </Container>
            </Box>
        </>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/testimonials?populate=*`
    const getdata = await fetch(url)
    const response = await getdata.json()
    return{
        props: {
            datas: response?.data
        },
        revalidate: gtgConfig.revalidate
    }
}