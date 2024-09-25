import { Box, Grid2 } from "@mui/material";
import NewItem from "./item";

export default function ListNew({datas}) {

    return (
        <Box py={5}>
            <Grid2 container spacing={2} sx={{p:0}}>
                {datas?.map((item) =>
                    <Grid2 size={{ xs: 12, lg: 4 }} key={item.id}>
                        <NewItem 
                            item={item?.attributes}
                        />
                    </Grid2>
                )}
            </Grid2>
        </Box>
    )
}