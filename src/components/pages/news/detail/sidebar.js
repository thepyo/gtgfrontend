import theme from "@/config/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { IconPointFilled } from "@tabler/icons-react";

export default function SidebarPost(){
    return(
        <Box>
            <Stack direction={"column"} spacing={2}>
                <Typography
                    variant="h2"
                    component={"h2"}
                    fontSize={20}
                    fontWeight={600}
                    color="neutral.cl900"
                >
                    BÀI VIẾT MỚI NHẤT
                </Typography>
                <Divider light sx={{my:2, height: '2px', bgcolor: theme.palette.primary.main}} />

                <Stack direction={"column"} spacing={1.5} divider={<Divider light/>}>
                    <Stack direction={"row"} alignItems={"flex-start"} spacing={1}>
                        <Box pt={0.2} width={16} height={16}>
                            <IconPointFilled color={theme.palette.primary.main} size={20} />
                        </Box>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={15}
                            fontWeight={500}
                            color="neutral.cl900"
                            lineHeight={"24px"}
                        >
                            Chương trình khuyến mãi mùa hè với nhiều ưu đãi hấp dẫn
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"flex-start"} spacing={1}>
                        <Box pt={0.2} width={16} height={16}>
                            <IconPointFilled color={theme.palette.primary.main} size={20} />
                        </Box>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={15}
                            fontWeight={500}
                            color="neutral.cl900"
                            lineHeight={"24px"}
                        >
                            Workshop làm đẹp chuyên nghiệp cùng các chuyên gia
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Stack direction={"column"} spacing={2} mt={5}>
                <Typography
                    variant="h2"
                    component={"h2"}
                    fontSize={20}
                    fontWeight={600}
                    color="neutral.cl900"
                >
                    KHUYẾN MÃI HOT
                </Typography>
                <Divider light sx={{my:2, height: '2px', bgcolor: theme.palette.primary.main}} />

                <Stack direction={"column"} spacing={1.5} divider={<Divider light/>}>
                    <Stack direction={"row"} alignItems={"flex-start"} spacing={1}>
                        <Box pt={0.2} width={16} height={16}>
                            <IconPointFilled color={theme.palette.primary.main} size={20} />
                        </Box>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={15}
                            fontWeight={500}
                            color="neutral.cl900"
                            lineHeight={"24px"}
                        >
                            Chương trình khuyến mãi mùa hè với nhiều ưu đãi hấp dẫn
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"flex-start"} spacing={1}>
                        <Box pt={0.2} width={16} height={16}>
                            <IconPointFilled color={theme.palette.primary.main} size={20} />
                        </Box>
                        <Typography
                            variant="h2"
                            component={"h2"}
                            fontSize={15}
                            fontWeight={500}
                            color="neutral.cl900"
                            lineHeight={"24px"}
                        >
                            Workshop làm đẹp chuyên nghiệp cùng các chuyên gia
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}