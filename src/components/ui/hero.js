import { gtgConfig } from "@/config/global";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HeroPage({
    thumbnail = '/bg-contact.jpg',
    categories = [],
    title="Liên hệ",
    sapo="Hãy để đội ngũ tư vấn của GTG hỗ trợ bạn dù ở bất kỳ nơi đâu",
    sizeTitleXs = 40,
    sizeTitleLg = 60
}) {
    return (
        <Box position={"relative"}>
            <Container maxWidth={gtgConfig.maxWidth}>
                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    minHeight={288}
                    spacing={2}
                    sx={{zIndex: 2}}
                    position={"relative"}
                >
                    <Breadcrumbs
                        separator={<Typography variant="body2" fontWeight={400} fontSize={16} lineHeight={"24px"} color="#fff">/</Typography>}
                        aria-label="breadcrumb"
                    >
                        <Link href="/">
                            <Typography variant="body2" fontWeight={400} fontSize={16} lineHeight={"24px"} color="#fff">
                                Trang chủ
                            </Typography>
                        </Link>

                        {categories && categories?.length > 0 && categories?.map(item =>
                            <Link href={item.href} key={item.id}>
                                <Typography variant="body2" fontWeight={400} fontSize={16} lineHeight={"24px"} color="#fff">
                                    {item.name}
                                </Typography>
                            </Link>
                        )}

                        <Typography variant="body2" fontWeight={400} fontSize={16} lineHeight={"24px"} color="#fff">
                            {title}
                        </Typography>
                    </Breadcrumbs>

                    <Typography
                        textAlign={{
                            xs: "left",
                            lg: "center"
                        }}
                        variant="body2"
                        fontWeight={600}
                        fontSize={{
                            xs: sizeTitleXs,
                            lg: sizeTitleLg
                        }}
                        lineHeight={{
                            xs: 1.2,
                            lg: "72px"
                        }}
                        color="#fff"
                        letterSpacing={"-2.5%"}
                        textTransform={"uppercase"}
                    >
                        {sapo}
                    </Typography>
                </Stack>
            </Container>
            <Box 
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                width={'100%'}
                height={'100%'}
                bgcolor={'primary.cl900'}
                sx={{
                    opacity: '0.7',
                    zIndex: 1
                }}
            />
            <Box 
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                width={'100%'}
                height={'100%'}
                sx={{zIndex: 0}}
            >
                <Image
                    src={thumbnail}
                    width={1920}
                    height={300}
                    alt="hero background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>
        </Box>
    )
}