import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function DoctorItem({
    thumbnail = "/doctor.webp",
    title ="Nguyễn Văn A",
    position="",
    link="/doi-ngu"
}){

    const matches = useMediaQuery('(max-width:700px)');

    if(matches === undefined) return

    return(
        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={{xs:1, lg: 2}} mt={{xs:2, lg: 5}}>
            <Box component={Link} href={link}>
                <Image
                    src={thumbnail}
                    width={matches ? 150 : 300}
                    height={matches ? 150 : 300}
                    alt="doctor kim"
                    style={{
                        width: matches ? '150px' : '300px',
                        height: matches ? '150px' : '300px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        objectPosition: 'center'
                    }}
                />
            </Box>
            <Link href={link}>
            <Typography 
                variant="h3"
                component={"h3"}
                fontSize={{xs: 20, lg: 24}}
                fontWeight={700}
                color="neutral.cl900"
            >
                {title}
            </Typography>
            </Link>
            <Typography
                fontSize={{xs: 16, lg:18}}
                fontWeight={400}
                color="neutral.cl500"
            >
                {position}
            </Typography>
        </Stack>
    )
}