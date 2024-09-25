import CallToActionDefault from "@/components/cta/default";
import HeroEvent from "@/components/pages/event/hero";
import EventItem from "@/components/pages/event/item";
import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2 } from "@mui/material";
import { format } from "date-fns";
import { NextSeo } from "next-seo";

export default function EventPage({data}){
    return(
        <>
            <NextSeo
                title={"Sự kiện"}
                description="Dịp để chia sẻ thành công - Nơi gắn kết tập thể, thúc đẩy sự phát triển cá nhân & tập thể."
            />
            <HeroEvent />
            <Container maxWidth={gtgConfig.maxWidth}>
                <Box pb={10}>
                    <Grid2 container spacing={{xs:3, lg: 6}}>
                        {data?.map(item =>
                            <Grid2 size={{xs: 12, lg: 4}} key={item.id}>
                                <EventItem 
                                    title={item?.attributes?.title}
                                    link={`/su-kien/${item?.attributes?.slug}`}
                                    thumbnail={
                                        item?.attributes?.thumbnail?.data && gtgConfig.cdnDomain + item?.attributes?.thumbnail?.data?.attributes?.url
                                    }
                                    date={format(new Date(item?.attributes?.date), 'dd.MM.yyyy')}
                                />
                            </Grid2>
                        )}
                    </Grid2>
                </Box>
                <CallToActionDefault />
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/events?populate[0]=seo&populate[1]=seo.thumbnail&populate[2]=thumbnail`
    const getdata = await fetch(url)
    const response = await getdata.json()
    return{
        props: {
            data: response?.data
        },
        revalidate: gtgConfig.revalidate
    }
}