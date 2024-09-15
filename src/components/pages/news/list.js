import { Box, Grid2 } from "@mui/material";
import NewItem from "./item";

export default function ListNew() {

    return (
        <Box py={5}>
            <Grid2 container spacing={2} sx={{p:0}}>
                {Array.from([1,2,3,4,5,6,7,8,9]).map((item,key) =>
                    <Grid2 size={{ xs: 12, lg: 4 }} key={key}>
                        <NewItem />
                    </Grid2>
                )}
            </Grid2>
        </Box>
    )
}