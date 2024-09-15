import Logo from "@/components/ui/logo";
import { Button, Stack, Typography } from "@mui/material";
import { IconArrowRight, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function SidebarTuyendungDetail(){
    return(
        <Stack
            direction={"column"}
            spacing={4}
            bgcolor="#F7F7F7"
            px={2}
            py={5}
            justifyContent={"flex-start"}
            alignItems={"center"}
            borderRadius={2}
            position={"sticky"}
            top={0}
        >
            <Logo />
            <Typography
                variant="h2"
                component={"h2"}
                fontSize={36}
                fontWeight={600}
                color="neutral.cl900"
                letterSpacing={"-2.5%"}
            >
                TẬP ĐOÀN GTG
            </Typography>

            <Stack direction={"row"} spacing={2} width={"100%"} alignItems={"start"}>
                <IconMapPin size={30} color="#555" stroke={1.5}/>
                <Stack direction={"column"} spacing={0.2}>
                    <Typography 
                        variant="body2" 
                        fontSize={"16px"} 
                        fontWeight={400} 
                        lineHeight={"24px"} 
                        color="neutral.cl500"
                    >
                        Văn phòng đại diện
                    </Typography>
                    <Typography 
                        variant="body2" 
                        fontSize={"16px"} 
                        fontWeight={400} 
                        lineHeight={"24px"} 
                        color="neutral.cl900"
                    >
                        Tầng 5, 33 Giang Văn Minh, Kim Mã, Ba Đình, Hà Nội
                    </Typography>
                </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2} width={"100%"} alignItems={"start"}>
                <IconPhone size={30} color="#555" stroke={1.5}/>
                <Stack direction={"column"} spacing={0.2}>
                    <Typography 
                        variant="body2" 
                        fontSize={"16px"} 
                        fontWeight={400} 
                        lineHeight={"24px"} 
                        color="neutral.cl500"
                    >
                        Điện thoại
                    </Typography>
                    <Typography 
                        variant="body2" 
                        fontSize={"16px"} 
                        fontWeight={400} 
                        lineHeight={"24px"} 
                        color="neutral.cl900"
                    >
                        (+84) 97 531 9898
                    </Typography>
                </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2} width={"100%"} alignItems={"start"}>
                <IconMail size={30} color="#555" stroke={1.5}/>
                <Stack direction={"column"} spacing={0.2}>
                    <Typography 
                        variant="body2" 
                        fontSize={"16px"} 
                        fontWeight={400} 
                        lineHeight={"24px"} 
                        color="neutral.cl500"
                    >
                        Email
                    </Typography>
                    <Typography 
                        variant="body2" 
                        fontSize={"16px"} 
                        fontWeight={400} 
                        lineHeight={"24px"} 
                        color="neutral.cl900"
                    >
                        gtg@beauty.vn
                    </Typography>
                </Stack>
            </Stack>

            <Button
                variant="contained"
                size="large"
                endIcon={<IconArrowRight size={18}/>} 
                fullWidth
                component={Link}
                href="#form-tuyen-dung"
                sx={{
                    color: '#fff',
                }}
                scroll={false}
            >
                Ứng tuyển ngay
            </Button>
        </Stack>
    )
}