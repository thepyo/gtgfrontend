import { Box, Button, Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { IconCalendarWeek, IconEye, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function ReadDayItem(){
    return(
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box className="hover-img">
                <figure>
                    <Image
                        src="/readday.jpg"
                        width={140}
                        height={90}
                        alt=""
                    />
                </figure>
            </Box>
            <Stack direction={"column"} spacing={1}>
                <Typography
                    fontWeight={600}
                    fontSize={16}
                    color="neutral.cl900"
                >
                    Lorem ipsum dolor sit amet consectetur. Leo.
                </Typography>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <IconEye stroke={1} color="#888" size={19}/>
                    <Typography variant="body2" fontSize={14} fontWeight={400} color="neutral.cl500">
                        9038 lượt xem
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default function NewsSection1(){

    const math = useMediaQuery('(max-width:700px)');

    return(
        <Grid2 container spacing={5}>
            <Grid2 size={{xs: 12, lg: 8}}>
                <Stack direction={"column"} spacing={3}>
                    <Box position={"relative"}>
                        <Box className="hover-img">
                            <figure>
                                <Image
                                    src="/news.jpg"
                                    width={792}
                                    height={375}
                                    alt="news"
                                    style={{
                                        width: '100%',
                                        height: math ? '300px' : '375px',
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
                                    Hội thảo làm đẹp
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
                                    9038 lượt xem
                                </Typography>
                            </Stack>
                        </Stack>
                        <Link href="/tin-tuc/hoi-thao-lam-dep-cham-soc-da">
                            <Typography
                                fontWeight={700}
                                fontSize={24}
                                color="neutral.cl900"
                                letterSpacing={"-2.5%"}
                                component={"h2"}
                                mb={1}
                                mt={1.5}
                            >
                                Hội thảo làm đẹp & chăm sóc da
                            </Typography>
                        </Link>
                        <Typography
                            variant="body1"
                            fontSize={16}
                            fontWeight={400}
                            color="neutral.cl500"
                        >
                            Công ty tổ chức hội thảo chuyên đề về chăm sóc da và xu hướng làm đẹp hiện đại, với sự ...
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
                    <ReadDayItem />
                    <ReadDayItem />
                    <ReadDayItem />
                    <ReadDayItem />
                </Stack>
            </Grid2>
        </Grid2>
    )
}