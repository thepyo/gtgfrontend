import CallToActionDefault from "@/components/cta/default";
import ListNew from "@/components/pages/news/list";
import PaginationNew from "@/components/pages/news/pagination";
import NewsSection1 from "@/components/pages/news/section1";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container } from "@mui/material";

export default function NewsPage(){
    return(
        <>
            <HeroPage
                title="Tin tức"
                sapo="Tin tức"
                thumbnail="/tin-tuc.jpg"
            />
            <Box py={5}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <NewsSection1 />
                    <ListNew />
                    <PaginationNew />
                    <CallToActionDefault />
                </Container>
            </Box>
        </>
    )
}