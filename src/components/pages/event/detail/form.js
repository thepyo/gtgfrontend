import { Button, Stack, TextField, Typography } from "@mui/material";

export default function FormRegisterEvent(){
    return(
        <Stack direction={"column"} spacing={3} p={3} bgcolor={"#F5F7F9"} position={"sticky"} top={10}>
            <Typography
                fontSize={20}
                fontWeight={600}
                color="neutral.cl900"
                textAlign={"center"}
                component={"h2"}
            >
                FORM ĐĂNG KÝ THAM GIA
            </Typography>
            <Stack direction={"column"} spacing={1}>
                <Typography
                    fontSize={16}
                    color="#999999"
                >
                    Họ và tên
                </Typography>
                <TextField
                    id="fullname"
                    name="fullname"
                    placeholder="Họ tên"
                    variant="outlined"
                    sx={{bgcolor: '#fff', borderRadius: '5px'}}
                />
            </Stack>
            <Stack direction={"column"} spacing={1}>
                <Typography
                    fontSize={16}
                    color="#999999"
                >
                    Email
                </Typography>
                <TextField
                    id="email"
                    name="email"
                    placeholder="Email"
                    variant="outlined"
                    sx={{bgcolor: '#fff', borderRadius: '5px'}}
                />
            </Stack>
            <Stack direction={"column"} spacing={1}>
                <Typography
                    fontSize={16}
                    color="#999999"
                >
                    Số điện thoại
                </Typography>
                <TextField
                    id="phone"
                    name="phone"
                    placeholder="Số điện thoại"
                    variant="outlined"
                    sx={{bgcolor: '#fff', borderRadius: '5px'}}
                />
            </Stack>
            <Stack direction={"column"} spacing={1}>
                <Typography
                    fontSize={16}
                    color="#999999"
                >
                    Ghi chú
                </Typography>
                <TextField
                    id="note"
                    name="note"
                    placeholder="Ghi chú"
                    variant="outlined"
                    sx={{bgcolor: '#fff', borderRadius: '5px'}}
                    multiline
                    rows={5}
                />
            </Stack>
            <Button variant="contained" size="large" sx={{py:2}}>
                <Typography color="#fff" fontWeight={700}>Đăng ký tham dự</Typography>
            </Button>
        </Stack>
    )
}