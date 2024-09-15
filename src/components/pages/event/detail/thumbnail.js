import { Box } from "@mui/material";
import Image from "next/image";

export default function ThumbnailEventDetail(){
    return(
        <Box>
            <Image
                src="/event-detail.jpg"
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