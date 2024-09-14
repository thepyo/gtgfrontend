import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Widget3(){
    return(
        <Stack direction={"column"} spacing={3}>
            <Typography variant="h2" component={"h2"} fontWeight={600} fontSize={20} lineHeight={"28px"} color="neutral.cl900">
                Dịch vụ
            </Typography>

            <Stack direction={"column"} spacing={2}>
                <Link href={`/`}>
                    <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                        Về chúng tôi
                    </Typography>
                </Link>
                <Link href={`/`}>
                    <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                        Sản phẩm - dịch vụ
                    </Typography>
                </Link>
                <Link href={`/`}>
                    <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                        Đội ngũ nhân sự
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}