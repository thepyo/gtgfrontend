import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function DoctorItem(){
    return(
        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2} mt={5}>
            <Box>
                <Image
                    src="/doctor.webp"
                    width={300}
                    height={300}
                    alt="doctor kim"
                    style={{
                        width: '300px',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        objectPosition: 'center'
                    }}
                />
            </Box>
            <Typography 
                variant="h3"
                component={"h3"}
                fontSize={24}
                fontWeight={700}
                color="neutral.cl900"
            >
                Nguyễn Văn A
            </Typography>
            <Typography
                fontSize={18}
                fontWeight={400}
                color="neutral.cl500"
            >
                Chức vụ
            </Typography>
        </Stack>
    )
}