import CallToActionDefault from "@/components/cta/default";
import EventDetailContent from "@/components/pages/event/detail/content";
import FormRegisterEvent from "@/components/pages/event/detail/form";
import ThumbnailEventDetail from "@/components/pages/event/detail/thumbnail";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Container, Grid2 } from "@mui/material";

export default function EventDetailPage(){
    return(
        <>
            <HeroPage
                title="Event ưu đãi khách hàng mới"
                sapo="Event ưu đãi khách hàng mới"
                categories={[{id:1,name:'Sự kiện',href:"/su-ken"}]}
                thumbnail="/event-detail.jpg"
            />

            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={8} sx={{my:6}}>
                    <Grid2 size={{xs: 12, lg: 7.5}}>
                        <ThumbnailEventDetail />
                        <EventDetailContent />
                    </Grid2>
                    <Grid2 size={{xs: 12, lg: 4.5}}>
                        <FormRegisterEvent />
                    </Grid2>
                </Grid2>
                <CallToActionDefault />
            </Container>
        </>
    )
}