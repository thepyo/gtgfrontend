import { gtgConfig } from "@/config/global";
import { Box, Button, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import HeadingHomePage from "./heading";
import { IconArrowRight } from "@tabler/icons-react";

export default function YoungBussinessHomePageSection(){
    return(
        <Box py={10}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Grid2 container spacing={8}>
                    <Grid2 size={{xs:12, lg: 5}}>
                        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                            <Image
                                src={"/young-bussiness.jpg"}
                                width={475}
                                height={523}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </Stack>
                    </Grid2>
                    <Grid2 size={{xs:12, lg: 7}}>
                        <Stack direction={"column"} spacing={2}>
                            <HeadingHomePage />
                            <Box 
                                className="description"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    color: "neutral.cl900",
                                    py: 2,
                                    "& p": {
                                        paddingBottom: '15px',
                                        textAlign: {
                                            xs: 'justify',
                                            lg: 'left'
                                        }
                                    }
                                }}
                            >
                                <p>
                                    Chúng tôi là một thẩm mỹ viện trẻ, năng động và sáng tạo, chuyên cung cấp dịch vụ làm đẹp toàn diện cho khách hàng. Với đội ngũ chuyên viên giàu kinh nghiệm và nhiệt huyết, chúng tôi cam kết mang đến những giải pháp làm đẹp an toàn, hiệu quả và phù hợp với từng nhu cầu riêng biệt. Tại thẩm mỹ viện của chúng tôi, khách hàng không chỉ được trải nghiệm các dịch vụ chăm sóc sắc đẹp hiện đại như phun xăm thẩm mỹ, điều trị da, mà còn được tư vấn tận tình về cách duy trì vẻ đẹp tự nhiên.
                                </p>
                                <p>
                                    Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu và nỗ lực không ngừng để trở thành điểm đến tin cậy cho mọi nhu cầu làm đẹp. Hãy đến với chúng tôi để trải nghiệm sự khác biệt!
                                </p> 
                            </Box>
                            <Box>
                                <Button variant="contained" endIcon={<IconArrowRight color="#fff"/>} size="large">
                                    <Typography color="#fff" fontWeight={600}>Xem thêm</Typography>
                                </Button>
                            </Box>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}