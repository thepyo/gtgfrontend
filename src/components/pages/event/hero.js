import { Box, Button, Stack, Typography } from "@mui/material";
import { IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";

export default function HeroEvent(){
    return(
        <Stack 
            direction={"column"} 
            spacing={0}
            minHeight={1000}
            sx={{
                background: 'linear-gradient(180deg, #00AEEF 0%, rgba(0, 174, 239, 0) 80%)'
            }}
            justifyContent={"flex-start"}
            alignItems={"center"}
            position={"relative"}
        >
            <Image
                src="/titleEvent.svg"
                width={1380}
                height={380}
                alt=""
                style={{
                    width: '90%',
                    height: 'auto',
                    zIndex: 1
                }}
            />

            <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={3}
                position={"relative"}
                top={-20}
                sx={{zIndex: 1}}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={1}
                    border="1px solid #fff"
                    borderRadius={10}
                >
                    <Typography
                        fontSize={44}
                        fontWeight={500}
                        lineHeight={1}
                        color="#fff"
                    >
                        Sáng tạo.
                    </Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={1}
                    border="1px solid #fff"
                    borderRadius={10}
                >
                    <Typography
                        fontSize={44}
                        fontWeight={500}
                        lineHeight={1}
                        color="#fff"
                    >
                        Đổi mới.
                    </Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={1}
                    border="1px solid #fff"
                    borderRadius={10}
                >
                    <Typography
                        fontSize={44}
                        fontWeight={500}
                        lineHeight={1}
                        color="#fff"
                    >
                        Đoàn kết.
                    </Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={1}
                    border="1px solid #fff"
                    borderRadius={10}
                >
                    <Typography
                        fontSize={44}
                        fontWeight={500}
                        lineHeight={1}
                        color="#fff"
                    >
                        Thành công.
                    </Typography>
                </Stack>
            </Stack>
            
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} maxWidth={1150} mt={3} mb={6}>
                <Typography
                    variant="h2"
                    component={"h2"}
                    textAlign={"center"}
                    fontSize={60}
                    fontWeight={600}
                    letterSpacing={"-3%"}
                    color="primary.main"
                    sx={{
                        textShadow: '0px 4px 4px 0px #00000040 inset',
                        zIndex: 1
                    }}
                >
                    Dịp để chia sẻ thành công - Nơi gắn kết tập thể, thúc đẩy sự phát triển cá nhân & tập thể.
                </Typography>
            </Stack>

            <Button
                variant="contained"
                size="large"
                endIcon={<IconArrowDown
                size={20}
                color="#fff"/>}
                sx={{py:2, px: 6, borderRadius: 10, zIndex: 1}}
            >
                <Typography variant="body2" textTransform={"capitalize"} color="#fff" fontWeight={600}>
                    Khám phá ngay
                </Typography>
            </Button>
            

            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                position={"absolute"}
                sx={{opacity: 0.5}}
            >
                <Box
                    width={530}
                    height={530}
                    sx={{
                        background: 'radial-gradient(36.31% 36.31% at 50% 50%, #00B2EF 0%, #A3E6FF 100%)',
                        boxShadow: 'inset 0px 4px 4px rgba(255, 255, 255, 0.25)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}
                />
            </Stack>

            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                position={"absolute"}
                sx={{opacity: 0.5}}
            >
                <Box
                    width={840}
                    height={840}
                    sx={{
                        background: 'radial-gradient(36.31% 36.31% at 50% 50%, #00B2EF 0%, #A3E6FF 100%)',
                        boxShadow: 'inset 0px 4px 4px rgba(255, 255, 255, 0.25)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}
                />
            </Stack>

            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                position={"absolute"}
                sx={{opacity: 0.5}}
            >
                <Box
                    width={840}
                    height={840}
                    sx={{
                        background: 'radial-gradient(36.31% 36.31% at 50% 50%, #00B2EF 0%, #A3E6FF 100%)',
                        boxShadow: 'inset 0px 4px 4px rgba(255, 255, 255, 0.25)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}
                    className="scale-pattern"
                />
            </Stack>
        </Stack>
    )
}