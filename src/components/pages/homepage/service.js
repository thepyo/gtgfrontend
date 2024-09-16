import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import HeadingHomePage from "./heading";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import theme from "@/config/theme";

function Item({
    image="/sv-thumbnail.jpg",
    title = "Dịch vụ 1",
    description = 'Lorem ipsum dolor sit amet consectetur. Massa tincidunt ...',
    link="/"
}){
    return(
        <Box position={"relative"}>
            <Image
                src={image}
                width={385}
                height={400}
                alt={title}
                style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            <Stack
                direction={"column"}
                spacing={2}
                p={2}
                position={"absolute"}
                bottom={0}
                right={0}
                width={275}
                height={190}
                bgcolor={"#fff"}
            >
                <Typography variant="h3" component={"h3"} fontSize={30} fontWeight={600} lineHeight={1.2} color="neutral.cl900">
                    {title}
                </Typography>
                <Typography variant="body2" fontSize={16} fontWeight={400} lineHeight={1.5} color="neutral.cl600">
                    {description}
                </Typography>
                <Box pt={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1} component={Link} href={link}>
                        <Typography variant="body2" fontSize={15} fontWeight={600} color="primary.main">
                            XEM CHI TIẾT
                        </Typography>
                        <IconArrowRight color={theme.palette.primary.main} size={18}/>
                    </Stack> 
                </Box>
            </Stack>
        </Box>
    )
}


export default function ServiceHomePageSection(){
    return(
        <Box py={5}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <HeadingHomePage 
                    subTitle="Dịch vụ"
                    title="Các lĩnh vực hoạt động"
                />
                <Typography variant="body1" fontSize={20} fontWeight={400} lineHeight={1.5} textAlign={"justify"} color="neutral.cl500" my={3}>
                    Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu và nỗ lực không ngừng để trở thành điểm đến tin cậy cho mọi nhu cầu làm đẹp. Hãy đến với chúng tôi để trải nghiệm sự khác biệt!
                </Typography>
                <Grid2 container spacing={3}>
                    <Grid2 size={{xs:12, lg: 4}}>
                        <Item title="Dịch vụ 1"/>
                    </Grid2>

                    <Grid2 size={{xs:12, lg: 4}}>
                        <Item title="Dịch vụ 2"/>
                    </Grid2>
                    <Grid2 size={{xs:12, lg: 4}}>
                        <Item title="Dịch vụ 3"/>
                    </Grid2>
                    <Grid2 size={{xs:12, lg: 4}}>
                        <Item title="Dịch vụ 4"/>
                    </Grid2>
                    <Grid2 size={{xs:12, lg: 4}}>
                        <Item title="Dịch vụ 5"/>
                    </Grid2>
                    <Grid2 size={{xs:12, lg: 4}}>
                        <Item title="Dịch vụ 6"/>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}