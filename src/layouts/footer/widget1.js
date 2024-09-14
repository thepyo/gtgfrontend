import { Stack, Typography } from "@mui/material";

export default function Widget1(){
    return(
        <Stack direction={"column"} spacing={3}>
            <Typography variant="h2" component={"h2"} fontWeight={600} fontSize={20} lineHeight={"28px"} color="neutral.cl900">
                Trụ sở
            </Typography>

            <Stack direction={"column"} spacing={1}>
                <Typography variant="body1" fontWeight={400} color="neutral.cl500" fontSize={16} lineHeight={"24px"}>
                    Văn phòng đại diện
                </Typography>

                <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                    Tầng 5, 33 Giang Văn Minh, Kim Mã, Ba Đình, Hà Nội
                </Typography>
            </Stack>

            <Stack direction={"column"} spacing={1}>
                <Typography variant="body1" fontWeight={400} color="neutral.cl500" fontSize={16} lineHeight={"24px"}>
                    Trung tâm làm đẹp
                </Typography>

                <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                    Tầng 5, 33 Giang Văn Minh, Kim Mã, Ba Đình, Hà Nội
                </Typography>
            </Stack>
        </Stack>
    )
}