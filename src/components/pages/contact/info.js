import Logo from "@/components/ui/logo";
import { Stack, Typography } from "@mui/material";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";

export default function InfoContactPage({data}){
    return(
        <Stack 
            direction={"column"} 
            justifyContent={"center"} 
            alignItems={"center"} 
            py={3}
            px={4}
            width={{xs: '100%', lg: '520px'}}
            bgcolor={"#F7F7F7"}
            spacing={3}
        >
            <Logo />
            <Typography 
                variant="h2" 
                component={"h2"} 
                fontSize={"30px"} 
                fontWeight={600} 
                lineHeight={"40px"} 
                letterSpacing={"-2.5%"}
                color="neutral.cl900"
            >
                {data?.company}
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
                        {data?.address}
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
                        {data?.phone}
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
                        {data?.email}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}