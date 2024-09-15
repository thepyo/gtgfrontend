import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutUsItem({
    thumbnail = '/img1.jpg',
    number = "03",
    text = "Thương hiệu thẩm mỹ & Chăm sóc sức khỏe",
    direction = "row",
    spacing=2
}){
    return(
        <Stack direction={"column"} justifyContent={"flex-end"} alignItems={"center"} width={"100%"} height={"100%"} position={"relative"} minHeight={360}>
            <Stack direction={direction} spacing={spacing} alignItems={"center"} position={"relative"} zIndex={2} p={3}>
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Typography
                        fontSize={48}
                        fontWeight={700}
                        color="#fff"
                        letterSpacing={"-1.9px"}
                    >
                        {number}
                    </Typography>
                </Stack>

                <Typography
                    fontSize={20}
                    fontWeight={400}
                    color="#fff"
                >
                    {text}
                </Typography>
            </Stack>

            <Box 
                sx={{
                    background: 'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #00AEEF 100%)',
                    height: '152px',
                    position: 'absolute',
                    bottom: 0,
                    left:0,
                    right:0,
                    zIndex: 1
                }}
            />

            <Box position={"absolute"} top={0} left={0} right={0} bottom={0} width={"100%"} height={"100%"} zIndex={0}>
                <Image
                    src={thumbnail}
                    width={380}
                    height={380}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
        </Stack>
    )
}