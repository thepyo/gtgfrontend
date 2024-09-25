import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import HeadingHomePage from "./heading";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import theme from "@/config/theme";
import { cutText } from "@/components/ui/cutText";

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
                justifyContent={"space-between"}
            >
                <Typography variant="h3" component={"h3"} fontSize={30} fontWeight={600} lineHeight={1.2} color="neutral.cl900">
                    {title}
                </Typography>
                <Typography flexGrow={1} variant="body1" fontSize={16} fontWeight={400} lineHeight={1.5} color="neutral.cl600">
                    {description}
                </Typography>
                <Box>
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


export default function ServiceHomePageSection({data}){

    const services = data?.services?.data

    return(
        <Box py={5}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <HeadingHomePage 
                    subTitle={data?.sub_title_service}
                    title={data?.title_service}
                />
                <Typography variant="body1" fontSize={20} fontWeight={400} lineHeight={1.5} textAlign={"justify"} color="neutral.cl500" my={3}>
                    {data?.description_service}
                </Typography>
                <Grid2 container spacing={3}>
                    {services?.map(item =>
                        <Grid2 size={{xs:12, lg: 4}} key={item.id}>
                            <Item 
                                title={item?.attributes?.title}
                                description={cutText(item?.attributes?.description, 90)}
                                image={item?.thumbnail?.data?.attributes?.url && gtgConfig?.cdnDomain + item?.thumbnail?.data?.attributes?.url}
                                link={`/dich-vu/${item?.attributes?.slug}`}
                            />
                        </Grid2>
                    )}

                </Grid2>
            </Container>
        </Box>
    )
}