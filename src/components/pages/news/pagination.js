import { Box, Pagination, Stack } from "@mui/material";

export default function PaginationNew(){
    return(
        <Stack py={3} direction={"row"} justifyContent={"flex-end"} alignItems={"center"}>
            <Pagination count={10} shape="rounded" color="primary"/>
        </Stack>
    )
}