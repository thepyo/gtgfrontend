import CallToActionDefault from "@/components/cta/default";
import ContentPost from "@/components/pages/news/detail/content";
import RelatePost from "@/components/pages/news/detail/relate";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container } from "@mui/material";

export default function NewDetailPage(){
    return(
        <>
            <HeroPage
                title="Hội thảo làm đẹp & chăm sóc da"
                sapo="Hội thảo làm đẹp & chăm sóc da"
                categories={[{id:1,name:'Tin tức',href:"/tin-tuc"}]}
                thumbnail="/tin-tuc.jpg"
            />
            <Box py={5}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <ContentPost />
                    <RelatePost />
                    <CallToActionDefault />
                </Container>
            </Box>
        </>
    )
}