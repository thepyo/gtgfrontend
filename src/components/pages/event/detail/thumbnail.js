import { Box } from "@mui/material";
import Image from "next/image";

export default function ThumbnailEventDetail({
    thunbnail = "/event-detail.jpg"
}){
    return(
        <Box>
            <Image
                src={thunbnail}
                width={720}
                height={480}
                alt=""
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            />
        </Box>
    )
}