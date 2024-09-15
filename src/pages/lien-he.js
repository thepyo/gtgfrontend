import ContactForm from "@/components/pages/contact/form";
import InfoContactPage from "@/components/pages/contact/info";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container, Stack } from "@mui/material";

export default function LienHePage(){
    return(
        <>
            <HeroPage 
                title="Liên hệ"
                sapo="Hãy để đội ngũ tư vấn của GTG hỗ trợ bạn dù ở bất kỳ nơi đâu"
            />
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack 
                    direction={{xs: 'column', lg: "row"}}
                    py={5}
                >
                    <ContactForm />
                    <InfoContactPage />
                </Stack>
            </Container>

            <Box>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5818.6967595845035!2d106.67455710235927!3d10.767468575469227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f004207347d%3A0x24ccc872eae5bd9a!2sThe%20Pyo%20%7C%20Center%20clinic!5e0!3m2!1svi!2s!4v1726311761179!5m2!1svi!2s"
                    width="100%" 
                    height="600" 
                    loading="lazy"
                    frameBorder="0"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </Box>
        </>
    )
}