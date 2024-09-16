import CallToActionDefault from "@/components/cta/default";
import GalleryCulture from "@/components/pages/culture/gallery";
import HeroCulture from "@/components/pages/culture/hero";
import MapCultrue from "@/components/pages/culture/map";
import WorkingEnvironment from "@/components/pages/culture/workingEnvironment";
import { gtgConfig } from "@/config/global";
import { Container } from "@mui/material";

export default function VanhoaPage(){
    return(
        <>
            <HeroCulture />
            <MapCultrue />
            <WorkingEnvironment />
            <GalleryCulture />
            <Container maxWidth={gtgConfig.maxWidth}>
                <CallToActionDefault />
            </Container>
        </>
    )
}