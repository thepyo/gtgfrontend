import { Box, Stack, Typography } from "@mui/material";
import Markdown from "react-markdown";

export default function EventDetailContent({
    title="Chia sẻ về xu hướng làm đẹp mới nhất và tư vấn các giải pháp thẩm mỹ phù hợp cho từng đối tượng khách hàng",
    content = ""
}){
    return(
        <Stack direction={"column"} spacing={2} my={4}>
            <Typography
                variant="h1"
                component={"h1"}
                fontSize={24}
                fontWeight={700}
                color="primary.main"
                textAlign={{
                    xs: 'justify',
                    lg: "center"
                }}
                lineHeight={"38px"}
            >
                {title}
            </Typography>
            <Box className="post-content">
                <Markdown>{content}</Markdown>
            </Box>
        </Stack>
    )
}