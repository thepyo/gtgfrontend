import { Box, Divider, Stack, Typography } from "@mui/material";
import { IconCalendarWeek } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Item(){
    return(
        <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={2}>
            <Link href={"/tin-tuc/lorem-ipsum"}>
                <Image
                    src="/readday.jpg"
                    width={40}
                    height={40}
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: 4
                    }}
                />
            </Link>
            <Stack flexGrow={1} direction={"column"} spacing={1}>
                <Link href={"/tin-tuc/lorem-ipsum"}>
                    <Typography variant="body1" fontSize={15} fontWeight={500} lineHeight={1.3} color="neutral.cl600">
                        Lorem ipsum dolor sit amet consectetur. Leo.
                    </Typography>
                </Link>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <IconCalendarWeek stroke={1} color="#888" size={15} />
                    <Typography variant="body2" fontSize={13} fontWeight={400} color="neutral.cl500">
                        11-06-2024
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default function SearchResult(){
    return(
        <Stack direction={"column"} spacing={3} px={2} pb={2}>
            <Typography variant="body1" fontSize={15} fontWeight={500} color="#888">
                Gợi ý nội dung hôm nay
            </Typography>
            <Stack direction={"column"} spacing={1} divider={<Divider light />}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Stack>
        </Stack>
    )
}