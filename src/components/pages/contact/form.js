import theme from "@/config/theme";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";

export default function ContactForm(){
    return(
        <Stack
            width={{xs: '100%',lg: '685px'}}
            bgcolor={theme.palette.primary.main}
            minHeight={"400px"}
            p={{xs:2, lg: 4}}
            spacing={3}
        >
            <Typography 
                variant="h1" 
                component={"h1"} 
                fontSize={{xs:26, lg: 36}} 
                fontWeight={600} 
                lineHeight={1.3} 
                letterSpacing={"-1px"}
                color="#fff"
                textAlign={"center"}
            >
                LIÊN HỆ VỚI CHÚNG TÔI
            </Typography>

            <TextField 
                id="fullname"
                name="fullname"
                placeholder="Họ tên"
                variant="outlined"
                sx={{bgcolor: '#fff', borderRadius: '5px'}}
            />
            <Stack direction={{xs: 'column', lg: 'row'}} alignItems={"center"} spacing={2}>
                <TextField 
                    id="phone"
                    name="phone"
                    placeholder="Số điện thoại"
                    variant="outlined"
                    fullWidth
                    sx={{bgcolor: '#fff', borderRadius: '5px'}}
                />
                <TextField 
                    id="email"
                    name="email"
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    sx={{bgcolor: '#fff', borderRadius: '5px'}}
                />
            </Stack>
            <TextField 
                id="content"
                name="content"
                placeholder="Nội dung"
                variant="outlined"
                multiline
                rows={3}
                sx={{bgcolor: '#fff', borderRadius: '5px'}}
            />
            <Stack direction={"row"} justifyContent={"end"} alignItems={"end"}>
                <Button size="large" variant="contained" endIcon={<IconArrowRight />} color="primary" sx={{bgcolor: '#fff'}}>
                    Gửi ngay
                </Button>
            </Stack>
        </Stack>
    )
}