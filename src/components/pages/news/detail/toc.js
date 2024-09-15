import theme from "@/config/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function TOC(){
    return(
        <Stack direction={"column"} spacing={2} position={"sticky"} top={10}>
            <Typography
                variant="h2"
                component={"h2"}
                fontSize={20}
                fontWeight={600}
                color="neutral.cl900"
            >
                TỔNG QUAN BÀI VIẾT
            </Typography>
            <Divider light sx={{my:2, height: '2px', bgcolor: theme.palette.primary.main}} />
            <Box
                sx={{
                    color: "#000",
                    fontWeight: 500,
                    '& ol': {
                        paddingLeft: '15px'
                    },
                    '& li': {
                        padding: '5px 0'
                    }
                }}
            >
                <ol>
                    <li>
                        <a href="#heading1">
                            Các chuyên đề chăm sóc da
                        </a>
                    </li>
                    <li>
                        <a href="#heading2">
                            Chia sẻ kinh nghiệm từ chuyên gia
                        </a>
                    </li>
                    <li>
                        <a href="#heading3">
                        Trải Nghiệm Thực Tế
                        </a>
                    </li>
                    <li>
                        <a href="#heading4">
                            Chương trình ưu đãi đặc biệt
                        </a>
                    </li>
                </ol>
            </Box>
        </Stack>
    )
}