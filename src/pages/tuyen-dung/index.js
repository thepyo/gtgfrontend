import Section1 from "@/components/pages/tuyendung/section1";
import Section2 from "@/components/pages/tuyendung/section2";
import Section3 from "@/components/pages/tuyendung/section3";
import Section4 from "@/components/pages/tuyendung/section4";
import HeroPage from "@/components/ui/hero";

export default function TuyenDungPage(){
    return(
        <>
            <HeroPage 
                title="Tuyển dụng"
                sapo="Tuyển dụng"
                thumbnail="/tuyendung.jpg"
            />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </>
    )
}