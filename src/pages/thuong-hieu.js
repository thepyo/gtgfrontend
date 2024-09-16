import CallToActionDefault from "@/components/cta/default";
import HeroBrandingSection from "@/components/pages/branding/hero";
import AboutBranding from "@/components/pages/branding/section1";
import SectionDrTien from "@/components/pages/branding/section2";
import SectionThePyo from "@/components/pages/branding/section4";
import SectionLaurent from "@/components/pages/branding/section5";
import { gtgConfig } from "@/config/global";
import { Container } from "@mui/material";

export default function BrandPage(){
    return(
        <>
            <HeroBrandingSection />
            <AboutBranding />
            <SectionDrTien />
            <SectionThePyo />
            <SectionLaurent />
            <Container maxWidth={gtgConfig.maxWidth}>
                <CallToActionDefault />
            </Container>
        </>
    )
}