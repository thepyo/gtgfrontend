import { Box, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NewItem from "../item";

export default function RelatePost(){
    return(
        <Stack direction={"column"} spacing={2} mt={5}>
            <Stack direction="row" alignItems={"center"} spacing={1}>
                <Image
                    src="/new.svg"
                    width={30}
                    height={30}
                    alt="new icon"
                />
                <Typography variant="h2" component="h2" fontSize={20} fontWeight={600} color="neutral.cl900">
                    BÀI VIẾT LIÊN QUAN
                </Typography>
            </Stack>

            <Grid2 container spacing={2}>
                {Array.from([1,2,3]).map((item,key) =>
                    <Grid2 size={{ xs: 12, lg: 4 }} key={key}>
                        <NewItem />
                    </Grid2>
                )}
            </Grid2>

        </Stack>
    )
}