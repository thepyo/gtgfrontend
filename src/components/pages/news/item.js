import FormatTime from "@/components/ui/fomatDate";
import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { IconCalendarWeek, IconEye } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function NewItem({item}) {
    return (
        <Card sx={{ boxShadow: 0, border: '1px solid #eee' }}>
            <CardContent sx={{ p: 0 }}>
                <Stack direction={"column"} spacing={3}>
                    <Box position={"relative"}>
                        <Box className="hover-img" component={Link} href={`/tin-tuc/${item.slug}`}>
                            <figure>
                                <Image
                                    src={gtgConfig.cdnDomain + item?.thumbnail?.data?.attributes?.url}
                                    width={385}
                                    height={280}
                                    alt="news"
                                    style={{
                                        width: '100%',
                                        height: '220px',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        borderBottom: `4px solid ${theme.palette.primary.main}`
                                    }}
                                />
                            </figure>
                        </Box>
                        <Box
                            position={"absolute"}
                            bottom={'-10px'}
                            left={20}
                        >
                            <Button variant="contained" sx={{ borderRadius: 3 }}>
                                <Typography variant="body2" color="#fff" textTransform={"capitalize"}>
                                    {item?.category?.data?.attributes?.name}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box px={2} py={1}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconCalendarWeek stroke={1} color="#888" size={19} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    <FormatTime time={item?.updatedAt} />
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconEye stroke={1} color="#888" size={19} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    {item?.fake_view} lượt xem
                                </Typography>
                            </Stack>
                        </Stack>
                        <Link href={`/tin-tuc/${item.slug}`}>
                            <Typography
                                fontWeight={700}
                                fontSize={20}
                                color="neutral.cl900"
                                letterSpacing={"-2.5%"}
                                component={"h2"}
                                mb={1}
                                mt={1.5}
                            >
                                {item?.title}
                            </Typography>
                        </Link>
                        <Typography
                            variant="body1"
                            fontSize={16}
                            fontWeight={400}
                            color="neutral.cl500"
                        >
                            {item?.description}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}