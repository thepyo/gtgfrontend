import { Stack, Typography } from "@mui/material";
import { IconBrandFacebookFilled, IconBrandTwitterFilled, IconLink, IconMailFilled } from "@tabler/icons-react";

export default function ShareContent(){
    return(
        <Stack
            width={"100%"}
            height={60}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
            direction={"row"}
            bgcolor={"neutral.cl100"}
            px={3}
        >
            <Typography
                variant="body1"
                fontSize={16}
                fontWeight={500}
                color="neutral.cl900"
            >
                Chia sẻ bài viết nếu bạn thích
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <IconLink color="#00AEEF" size={19}/>
                <IconBrandFacebookFilled color="#1877F2" size={19}/>
                <IconBrandTwitterFilled color="#03A9F4" size={19}/>
                <IconMailFilled color="#666" size={19}/>
            </Stack>
        </Stack>
    )
}