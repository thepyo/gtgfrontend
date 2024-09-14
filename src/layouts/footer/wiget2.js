import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Widget2(){
    return(
        <Stack direction={"column"} spacing={3}>
            <Typography variant="h2" component={"h2"} fontWeight={600} fontSize={20} lineHeight={"28px"} color="neutral.cl900">
                Liên hệ
            </Typography>

            <Stack direction={"column"} spacing={1}>
                <Typography variant="body1" fontWeight={400} color="neutral.cl500" fontSize={16} lineHeight={"24px"}>
                    Điện thoại
                </Typography>

                <Link href={`tel:0975319898`}>
                    <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                        (+84) 97 531 9898
                    </Typography>
                </Link>
            </Stack>

            <Stack direction={"column"} spacing={1}>
                <Typography variant="body1" fontWeight={400} color="neutral.cl500" fontSize={16} lineHeight={"24px"}>
                    Email
                </Typography>
                <Link href={`mailto:gtg@beauty.vn`}>
                    <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                        gtg@beauty.vn
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}