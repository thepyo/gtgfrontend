import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Widget4(){
    return(
        <Stack direction={"column"} spacing={3}>
            <Typography variant="h2" component={"h2"} fontWeight={600} fontSize={20} lineHeight={"28px"} color="neutral.cl900">
                Liên kết
            </Typography>

            <Stack direction={"column"} spacing={2}>
                <Link href={`/`}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Image
                            src="/facebook-icon.svg"
                            width={32}
                            height={32}
                            alt="facebook icon"
                        />

                        <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                            Facebook
                        </Typography>
                    </Stack>
                </Link>

                <Link href={`/`}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Image
                            src="/instagram-icon.svg"
                            width={32}
                            height={32}
                            alt="facebook icon"
                        />
                        <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                            Instagram
                        </Typography>
                    </Stack>
                </Link>

                <Link href={`/`}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Image
                            src="/youtube-icon.svg"
                            width={32}
                            height={32}
                            alt="facebook icon"
                        />


                        <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                            Youtube
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}