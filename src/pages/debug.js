import EmptyLayout from "@/layouts/empty";
import { Box } from "@mui/material";

export default function DebugPage(){
    return(
        <Box minHeight={"500vh"}>
            <Box width={200} height={200} bgcolor="#333" position={"sticky"} top={0} />
        </Box>
    )
}

DebugPage.Layout = EmptyLayout