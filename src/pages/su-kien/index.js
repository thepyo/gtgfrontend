import CallToActionDefault from "@/components/cta/default";
import HeroEvent from "@/components/pages/event/hero";
import EventItem from "@/components/pages/event/item";
import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2 } from "@mui/material";

export default function EventPage(){
    return(
        <>
            <HeroEvent />
            <Container maxWidth={gtgConfig.maxWidth}>
                <Box pb={10}>
                    <Grid2 container spacing={{xs:3, lg: 6}}>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <EventItem />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <EventItem />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <EventItem />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <EventItem />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <EventItem />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <EventItem />
                        </Grid2>
                    </Grid2>
                </Box>
                <CallToActionDefault />
            </Container>
        </>
    )
}