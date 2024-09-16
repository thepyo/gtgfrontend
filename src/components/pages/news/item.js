import theme from "@/config/theme";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { IconCalendarWeek, IconEye } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function NewItem() {
    return (
        <Card sx={{ boxShadow: 0, border: '1px solid #eee' }}>
            <CardContent sx={{ p: 0 }}>
                <Stack direction={"column"} spacing={3}>
                    <Box position={"relative"}>
                        <Box className="hover-img" component={Link} href="/tin-tuc/hoi-thao-lam-dep-cham-soc-da">
                            <figure>
                                <Image
                                    src="/news.jpg"
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
                                    Sự kiện
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box px={2} py={1}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconCalendarWeek stroke={1} color="#888" size={19} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    11-06-2024
                                </Typography>
                            </Stack>

                            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                <IconEye stroke={1} color="#888" size={19} />
                                <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                                    9038 lượt xem
                                </Typography>
                            </Stack>
                        </Stack>
                        <Link href="/tin-tuc/hoi-thao-lam-dep-cham-soc-da">
                            <Typography
                                fontWeight={700}
                                fontSize={20}
                                color="neutral.cl900"
                                letterSpacing={"-2.5%"}
                                component={"h2"}
                                mb={1}
                                mt={1.5}
                            >
                                Khai trương chi nhánh mới
                            </Typography>
                        </Link>
                        <Typography
                            variant="body1"
                            fontSize={16}
                            fontWeight={400}
                            color="neutral.cl500"
                        >
                            Công ty khai trương chi nhánh mới tại trung tâm thành phố, đánh dấu bước phát triển...
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}