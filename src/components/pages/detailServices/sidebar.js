import { gtgConfig } from "@/config/global";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Item({
    image="/sv-thumbnail.jpg",
    title = "Dịch vụ 1",
    link="/"
}){
    return(
        <Stack mt={1} spacing={1}>
            <Box className="hoverhover-img" component={Link} href={link}>
                <figure>
                    <Image
                        src={image}
                        width={250}
                        height={150}
                        alt=""
                        style={{
                            width: "100%",
                            height: 150,
                            objectFit: "cover",
                            objectPosition: "center",
                            borderRadius: 8
                        }}
                    />
                </figure>
            </Box>
            <Link href={link}>
                <Typography fontSize={16} fontWeight={600} color="neutral.cl700">{title}</Typography>
            </Link>
        </Stack>
    )
}


export default function SidebarService({services}){
    return(
        <Stack direction={"column"} spacing={4} position={"sticky"} top={10}>
            <Typography variant="h2" component={"h2"} fontSize={20} fontWeight={700} color="primary.main">
                Dịch vụ liên quan
            </Typography>
        <Stack direction={"column"} spacing={2}>
            {services?.map(item => <Item 
                key={item.id}
                title={item?.attributes?.title}
                link={`/dich-vu/${item?.attributes?.slug}`}
                image={item?.thumbnail?.data && gtgConfig.cdnDomain + item?.thumbnail?.data?.attributes?.url}
            />)}
        </Stack>
        </Stack>
    )
}