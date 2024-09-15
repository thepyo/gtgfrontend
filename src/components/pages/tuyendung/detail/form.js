import theme from "@/config/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function TuyendungDetailForm(){
    return(
        <Stack direction={"column"} spacing={2} mt={4} id={"form-tuyen-dung"}>
            <Box>
                <Typography
                    variant="h3"
                    component={"h3"}
                    fontSize={20}
                    fontWeight={600}
                    color="neutral.cl900"
                    className="tuyendung-detail-h3"
                >
                    MẪU ĐĂNG KÝ
                </Typography>
                <Divider light sx={{my:2, width: '140px', height: '2px', bgcolor: theme.palette.primary.main}} />
                <Box className="description-content" color={"neutral.cl900"} textAlign={"justify"}>
                    
                </Box>
            </Box>
        </Stack>
    )
}