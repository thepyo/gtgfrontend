import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";

export default function WorkingEnvironment() {
    return (
        <Stack direction={"column"} spacing={3} py={{ xs: 3, lg: 9 }} alignItems={"center"}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack
                    direction={{
                        xs: 'column',
                        lg: "row"
                    }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={2}
                >
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45 50" fill="none">
                            <path d="M5.1573 15.8017L4.9871 16.0866L0 24.2918C9.56895 31.3411 11.0035 35.0936 15.8204 43.9364C15.8771 36.6511 15.715 30.8907 14.9964 27.6781C13.9698 23.5646 11.4601 20.4605 5.20593 15.8343L5.1573 15.799V15.8017Z" fill="#000002" />
                            <path d="M39.8429 15.8017L40.0131 16.0866L45.0002 24.2918C35.4312 31.3411 33.9967 35.0936 29.1798 43.9364C29.1231 36.6511 29.2852 30.8907 30.0038 27.6781C31.0304 23.5646 33.5402 20.4605 39.7943 15.8343L39.8429 15.799V15.8017Z" fill="#000002" />
                            <path d="M22.5013 4.4518C20.2212 5.45302 17.941 6.45696 15.6582 7.45819L5.57867 0.229828C5.55706 4.56847 5.51383 8.90712 5.57056 13.2485C13.3727 18.8461 16.1904 22.463 17.2548 27.1571C18.3328 31.9136 18.1599 38.1679 18.4489 47.9169C19.5782 48.7879 20.9614 49.3659 22.4986 49.7701C24.0358 49.3686 25.419 48.7879 26.5482 47.9169C26.84 38.1679 26.6644 31.9109 27.7423 27.1571C28.8067 22.463 31.6245 18.8461 39.4266 13.2485C39.4833 8.9044 39.4401 4.56847 39.4185 0.229828L29.3389 7.45819C27.0588 6.45696 24.7787 5.45302 22.4959 4.4518H22.5013Z" fill="#000002" />
                            <path d="M22.5014 9.2843C24.2737 9.2843 25.8784 10.0061 27.0401 11.1728C28.2018 12.3395 28.9204 13.9513 28.9204 15.7312C28.9204 17.5112 28.2018 19.1229 27.0401 20.2896C25.8784 21.4564 24.2737 22.1781 22.5014 22.1781C20.7292 22.1781 19.1245 21.4564 17.9628 20.2896C16.8011 19.1229 16.0825 17.5112 16.0825 15.7312C16.0825 13.9513 16.8011 12.3395 17.9628 11.1728C19.1245 10.0061 20.7292 9.2843 22.5014 9.2843ZM24.0657 10.9801V12.3965C25.3111 12.9853 26.1729 14.2579 26.1729 15.7339C26.1729 17.7689 24.5303 19.4214 22.5014 19.4214C20.4726 19.4214 18.83 17.7717 18.83 15.7339C18.83 14.2606 19.6918 12.988 20.9372 12.3965V10.9801C18.9516 11.6395 17.5198 13.5171 17.5198 15.7312C17.5198 18.4934 19.7513 20.7346 22.5014 20.7346C25.2516 20.7346 27.4831 18.4934 27.4831 15.7312C27.4831 13.5171 26.0513 11.6395 24.0657 10.9801ZM23.1795 9.69944V15.0529C23.1795 15.4273 22.8743 15.7339 22.5014 15.7339C22.1286 15.7339 21.8234 15.4273 21.8234 15.0529V9.69944C20.4239 9.85682 19.1704 10.4917 18.2276 11.4387C17.1334 12.5376 16.458 14.0544 16.458 15.7312C16.458 17.4081 17.1334 18.9248 18.2276 20.0237C19.3217 21.1226 20.8319 21.801 22.5014 21.801C24.171 21.801 25.6812 21.1226 26.7753 20.0237C27.8695 18.9248 28.5449 17.4081 28.5449 15.7312C28.5449 14.0544 27.8695 12.5376 26.7753 11.4387C25.8325 10.4917 24.5763 9.85411 23.1795 9.69944Z" fill="#00AEEF" />
                        </svg>
                    </Box>
                    <Typography
                        variant="h2"
                        component={"h2"}
                        fontSize={{
                            xs: 30,
                            lg: 48
                        }}
                        fontWeight={600}
                        lineHeight={1.2}
                        letterSpacing={"-0.25%"}
                        color="neutral.cl900"
                        textAlign={"center"}
                    >
                        Môi trường làm việc tại tập đoàn GTG
                    </Typography>
                </Stack>
            </Container>

            <Stack
                width={"100%"}
                direction={"row"}
                minHeight={{ xs: 'unset', lg: 690 }}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                spacing={0}
                position={"relative"}
                pt={{xs:3, lg: 8}}
            >

                <Stack
                    position={"absolute"}
                    top={'50%'}
                    left={0}
                    right={0}
                    bottom={0}
                    width={"100%"}
                    height={"100%"}
                    zIndex={0}
                    display={{ xs: 'none', lg: 'flex' }}
                >
                    <Divider light sx={{ height: "3px", width: '100%' }} />
                </Stack>

                <Container maxWidth={gtgConfig.maxWidth} sx={{ position: 'relative', zIndex: 1 }}>

                    <Grid2 container spacing={5}>
                        <Grid2 size={{ xs: 12, lg: 4 }}>
                            <Stack direction={"column"} spacing={2} position={"relative"} top={{xs:0, lg: "89%"}}>
                                <Box display={{ xs: 'none', lg: 'block' }}>
                                    <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <circle cx="24" cy="24" r="24" fill="#00AEEF" fillOpacity="0.2"/>
                                        <circle cx="24" cy="24" r="19.4717" fill="#00AEEF" fillOpacity="0.4" />
                                        <circle cx="23.9999" cy="24.0001" r="12.2264" fill="#00AEEF"/>
                                        <line x1="24.5" y1="48" x2="24.5" y2="81" stroke="#A5D7E8" />
                                    </svg>
                                </Box>

                                <Typography
                                    variant="h3"
                                    component={"h3"}
                                    fontSize={{xs:22, lg: 30}}
                                    fontWeight={600}
                                    color="neutral.cl900"
                                >
                                    Tôn trọng & Đoàn kết
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontWeight={400}
                                    fontSize={{xs:16, lg: 18}}
                                    color="neutral.cl500"
                                    textAlign={"justify"}
                                >
                                    Chúng tôi xây dựng môi trường tôn trọng lẫn nhau, nơi mọi cá nhân đều được đánh giá cao và có cơ hội phát triển. Sự đoàn kết là chìa khóa để vượt qua thử thách và đạt được thành công.
                                </Typography>

                            </Stack>
                        </Grid2>
                        <Grid2 size={{ xs: 12, lg: 4 }}>
                            <Stack direction={"column"} spacing={2} position={"relative"} top={{xs: 0, lg: "5%"}}>
                                <Typography
                                    variant="h3"
                                    component={"h3"}
                                    fontSize={{xs:22, lg: 30}}
                                    fontWeight={600}
                                    color="neutral.cl900"
                                >
                                    Phát Triển Cá Nhân và Nghề Nghiệp
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontWeight={400}
                                    fontSize={{xs:16, lg: 18}}
                                    color="neutral.cl500"
                                    textAlign={"justify"}
                                >
                                    GTG tạo điều kiện cho nhân viên phát triển chuyên môn và cá nhân thông qua các chương trình đào tạo và cơ hội thăng tiến, giúp họ vươn lên trong sự nghiệp.
                                </Typography>
                                <Box display={{ xs: 'none', lg: 'block' }}>
                                    <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="57" r="24" fill="#00AEEF" fillOpacity="0.2" />
                                        <circle cx="23.999" cy="57" r="19.4717" fill="#00AEEF" fillOpacity="0.4" />
                                        <circle cx="23.9999" cy="57.0001" r="12.2264" fill="#00AEEF" />
                                        <line x1="24.5" y1="2.18557e-08" x2="24.5" y2="33" stroke="#A5D7E8" />
                                    </svg>
                                </Box>

                            </Stack>
                        </Grid2>
                        <Grid2 size={{ xs: 12, lg: 4 }}>
                            <Stack direction={"column"} spacing={2} position={"relative"} top={{xs: 0, lg: "89%"}}>
                                <Box display={{ xs: 'none', lg: 'block' }}>
                                    <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="#00AEEF" fillOpacity="0.2" />
                                        <circle cx="24" cy="24" r="19.4717" fill="#00AEEF" fillOpacity="0.4" />
                                        <circle cx="23.9999" cy="24.0001" r="12.2264" fill="#00AEEF" />
                                        <line x1="24.5" y1="48" x2="24.5" y2="81" stroke="#A5D7E8" />
                                    </svg>
                                </Box>

                                <Typography
                                    variant="h3"
                                    component={"h3"}
                                    fontSize={{xs:22, lg: 30}}
                                    fontWeight={600}
                                    color="neutral.cl900"
                                >
                                    Cân Bằng Công Việc & Cuộc Sống
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontWeight={400}
                                    fontSize={{xs:16, lg: 18}}
                                    color="neutral.cl500"
                                    textAlign={"justify"}
                                >
                                    Chúng tôi hỗ trợ nhân viên duy trì cân bằng giữa công việc và cuộc sống, đảm bảo họ đạt hiệu quả cao và có cuộc sống hạnh phúc, viên mãn.
                                </Typography>

                            </Stack>
                        </Grid2>
                    </Grid2>

                </Container>

            </Stack>
        </Stack>
    )
}