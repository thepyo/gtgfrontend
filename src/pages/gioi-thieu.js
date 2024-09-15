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

export default function AboutPage(){
    return(
        <>
            <HeroPage
                title="Giới thiệu"
                sapo="Giới thiệu"
                thumbnail="/tin-tuc.jpg"
            />

            <AboutUsSection1 />

            <VisionSection />
            <MissionSection />
            <ValueSection />
            <CallToActionAboutUs />
            <DoctorSection />

            <Container maxWidth={gtgConfig.maxWidth}>
                <CallToActionDefault />
            </Container>
        </>
    )
}