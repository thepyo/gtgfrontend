import { gtgConfig } from "@/config/global";
import theme from "@/config/theme";
import { Box, Container, Divider, Grid2, Stack, Typography } from "@mui/material";
import AboutUsItem from "./item";

export default function AboutUsSection1(){
    return(
        <Box position={"relative"} pt={{xs: 4, lg: 8}} sx={{overflow: 'hidden'}}>
            <Box position={"relative"} sx={{zIndex: 1}}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Box maxWidth={800} py={{xs:3, lg: 10}}>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={{
                                xs:48,
                                lg: 72
                            }}
                            fontWeight={600}
                            lineHeight={1.3}
                            letterSpacing={"-1.8px"}
                            color="neutral.cl900"
                        >
                            Thấu cảm và sự đổi mới tạo ra những trải nghiệm số lôi cuốn
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box 
                position={"relative"}
                sx={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: '0px -4px 13px rgba(0, 0, 0, 0.12)',
                    zIndex: 1
                }} 
            >
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Box maxWidth={626} py={{xs:3, lg:10}}>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={{xs:24, lg: 30}}
                            fontWeight={600}
                            lineHeight={1.3}
                            color="neutral.cl900"
                        >
                            Đối với Thẩm Mỹ Viện GTG, mỗi dịch vụ không chỉ là cơ hội đem lại vẻ đẹp cho khách hàng mà còn là cách chúng tôi cùng đồng hành với khách hàng, mang lại giá trị tự tin và hạnh phúc thông qua từng liệu trình làm đẹp.
                        </Typography>
                    </Box>
                    <Grid2 container spacing={3}>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <Stack direction={"column"} spacing={2}  justifyContent={"center"} minHeight={{xs: 'unset', lg: 360}}>
                                <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={1} zIndex={1}>
                                    <Divider light sx={{ bgcolor: theme.palette.primary.main, width: 31, height: 1 }} />
                                    <Typography variant="body2" fontSize={16} fontWeight={400} color="primary.main">
                                        NHỮNG ĐIỀU CHÚNG TÔI ĐÃ ĐẠT ĐƯỢC
                                    </Typography>
                                </Stack>

                                <Typography
                                    fontSize={{xs:20, lg: 24}}
                                    fontWeight={400}
                                    lineHeight={1.5}
                                    color="neutral.cl900"
                                    textAlign={"justify"}
                                >
                                Thành lập vào tháng 11/2011, trải qua chặng đường hơn 12 năm phát triển, GTG  hiện nay đang sở hữu các thương hiệu uy tín hàng đầu trong ngành
                                </Typography>
                            </Stack>
                        </Grid2>

                        <Grid2 size={{xs: 12, lg: 4}}>
                            <AboutUsItem />
                        </Grid2>

                        <Grid2 size={{xs: 12, lg: 4}}>
                            <AboutUsItem 
                                thumbnail="/img2.jpg"
                                number="03"
                                text="Chi nhánh trên toàn quốc"
                            />
                        </Grid2>

                        <Grid2 size={{xs: 12, lg: 4}}>
                            <AboutUsItem 
                                thumbnail="/img3.jpg"
                                number="3000+"
                                text="Nhân sự chuyên nghiệp"
                                direction="column"
                                spacing={0}
                            />
                        </Grid2>
                        <Grid2 size={{xs: 12, lg: 4}}>
                            <AboutUsItem 
                                thumbnail="/img4.jpg"
                                number="35 triệu"
                                text="Khách hàng hài lòng"
                                direction="column"
                                spacing={0}
                            />
                        </Grid2>

                        <Grid2 size={{xs: 12, lg: 4}}>
                            <AboutUsItem 
                                thumbnail="/img5.jpg"
                                number="12 năm"
                                text="Hành trình & Phát triển"
                                direction="column"
                                spacing={0}
                            />
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            <Box
                position={"absolute"}
                top="-150px"
                right="-150px"
                width={954}
                height={954}
                sx={{
                    background: 'linear-gradient(148.46deg, #00B2EF 15.95%, #A3E6FF 54.22%)',
                    filter: 'blur(20px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
        </Box>
    )
}