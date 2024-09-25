import { gtgConfig } from "@/config/global";
import { Box, Button, Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { IconCalendarWeek, IconEye, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function ReadDayItem({
    link = "/",
    thumbnail = "/readday.jpg",
    title="",
    fakeView=9038
}){
    return(
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box className="hover-img" component={Link} href={link}>
                <figure>
                    <Image
                        src={thumbnail}
                        width={140}
                        height={90}
                        alt=""
                    />
                </figure>
            </Box>
            <Stack direction={"column"} spacing={1}>
                <Link href={link}>
                    <Typography
                        fontWeight={600}
                        fontSize={16}
                        color="neutral.cl900"
                    >
                        {title}
                    </Typography>
                </Link>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <IconEye stroke={1} color="#888" size={19}/>
                    <Typography variant="body2" fontSize={14} fontWeight={400} color="neutral.cl500">
                        {fakeView} lượt xem
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default function NewsSection1({config}){

    const math = useMediaQuery('(max-width:700px)');

    const feature = config.feature_post.data.attributes

    const read_today = config.read_today.data

    return(
        <Grid2 container spacing={5}>
            <Grid2 size={{xs: 12, lg: 8}}>
                <Stack direction={"column"} spacing={3}>
                    <Box position={"relative"}>
                        <Box className="hover-img" component={Link} href={`/tin-tuc/${feature?.slug}`}>
                            <figure>
                                <Image
                                    src={gtgConfig.cdnDomain + feature.thumbnail.data.attributes.url}
                                    width={792}
                                    height={375}
                                    alt="news"
                                    style={{
                                        width: '100%',
                                        height: math ? '200px' : '375px',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                />
                            </figure>
                        </Box>
                        <Box
                            position={"absolute"}
                            bottom={'-10px'}
                            left={20}
                        >
                            <Button variant="contained" sx={{borderRadius: 3}}>
                                <Typography variant="body2" color="#fff" textTransform={"capitalize"}>
                                    Sự kiện
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box px={1}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconCalendarWeek stroke={1} color="#888" size={19}/>
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    11-06-2024
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconEye stroke={1} color="#888" size={19}/>
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    {feature.fake_view} lượt xem
                                </Typography>
                            </Stack>
                        </Stack>
                        <Link href={`/tin-tuc/${feature?.slug}`}>
                            <Typography
                                fontWeight={700}
                                fontSize={24}
                                color="neutral.cl900"
                                letterSpacing={"-2.5%"}
                                component={"h2"}
                                mb={1}
                                mt={1.5}
                            >
                                {feature.title}
                            </Typography>
                        </Link>
                        <Typography
                            variant="body1"
                            fontSize={16}
                            fontWeight={400}
                            color="neutral.cl500"
                        >
                            {feature.description}
                        </Typography>
                    </Box>
                </Stack>
            </Grid2>

            <Grid2 size={{xs: 12, lg: 4}}>
                <Stack direction={"column"} spacing={3}>
                    <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                        <IconStarFilled 
                            size={24}
                            color="#FBBF00"
                        />
                        <Typography
                            fontSize={24}
                            fontWeight={700}
                            color="neutral.cl900"
                        >
                            ĐỌC GÌ HÔM NAY
                        </Typography>
                    </Stack>

                    {read_today && read_today?.map(item =>

                        <ReadDayItem 
                            key={item.id}
                            title={item?.attributes?.title}
                            fakeView={item?.attributes?.fake_view}
                            thumbnail={gtgConfig.cdnDomain + item?.attributes?.thumbnail?.data?.attributes?.url}
                            link={`/tin-tuc/${item?.attributes?.slug}`}
                        />

                    )}
                    
                </Stack>
            </Grid2>
        </Grid2>
    )
}