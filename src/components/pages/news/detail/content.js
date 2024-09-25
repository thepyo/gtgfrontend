import { Box, Grid2, NoSsr, Stack, Typography } from "@mui/material";
import TOC from "./toc";
import { IconCalendarWeek, IconEye } from "@tabler/icons-react";
import SidebarPost from "./sidebar";
import ShareContent from "./share";
import Markdown from "react-markdown";

export default function ContentPost({post}){
    return(
        <Grid2 container spacing={5} >
            <Grid2 size={{xs: 12, lg: 2.5}}>
                <NoSsr>
                    <TOC content={post?.content}/>
                </NoSsr>
            </Grid2>

            <Grid2 size={{xs: 12, lg: 7}}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconCalendarWeek stroke={1} color="#888" size={19} />
                        <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                            11-06-2024
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <IconEye stroke={1} color="#888" size={19} />
                        <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl500">
                            {post?.fake_view} lượt xem
                        </Typography>
                    </Stack>
                </Stack>

                <Box className="post-content" my={3}>
                    <Markdown>
                        {post?.content}
                    </Markdown>
                </Box>
                <ShareContent />
            </Grid2>

            <Grid2 size={{xs: 12, lg: 2.5}}>
                <SidebarPost />
            </Grid2>
        </Grid2>
    )
}