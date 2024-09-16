import CallToActionDefault from "@/components/cta/default";
import TuyendungDetailDescription from "@/components/pages/tuyendung/detail/description";
import TuyendungDetailForm from "@/components/pages/tuyendung/detail/form";
import TuyendungDetailMeta from "@/components/pages/tuyendung/detail/meta";
import TuyendungDetailSalary from "@/components/pages/tuyendung/detail/quyenloi";
import TuyendungDetailRequirement from "@/components/pages/tuyendung/detail/requirement";
import SidebarTuyendungDetail from "@/components/pages/tuyendung/detail/sidebar";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";

export default function TuyendungDetailPage(){
    return(
        <>
            <HeroPage
                title="Chuyên viên kinh doanh"
                sapo="Chuyên viên kinh doanh"
                thumbnail="/tuyendung-detail.jpg"
                categories={[{id:1,name: "Tuyển dụng", href:"/tuyen-dung"}]}
            />
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack direction={"column"} py={5}>
                    <Grid2 container spacing={{
                        xs: 3,
                        lg: 10
                    }}>
                        <Grid2 size={{xs: 12, lg: 7}}>
                            <Typography
                                variant="h1"
                                component={"h1"}
                                fontSize={{
                                    xs: 30,
                                    lg: 48
                                }}
                                fontWeight={600}
                                color="primary.main"
                                letterSpacing={"-2.5%"}
                                mb={4}
                            >
                                Chuyên viên kinh doanh
                            </Typography>
                            <TuyendungDetailMeta />
                            <Divider light sx={{my:4}} />
                            <TuyendungDetailDescription />
                            <TuyendungDetailRequirement />
                            <TuyendungDetailSalary />
                            <TuyendungDetailForm />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 5}}>
                            <SidebarTuyendungDetail />
                        </Grid2>
                    </Grid2>

                    <CallToActionDefault />
                </Stack>

            </Container>
        </>
    )
}