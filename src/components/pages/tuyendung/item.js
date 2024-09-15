import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function ItemTuyenDung(){
    return(
        <Card>
            <CardContent>
                <Stack direction={"column"} spacing={1} mb={3}>
                    <Typography variant="body1" fontSize={16} fontWeight={400} color="neutral.cl500" textTransform={"uppercase"}>
                        Kinh Doanh
                    </Typography>
                    <Link href={`/tuyen-dung/nhan-vien-kinh-doanh`}>
                        <Typography variant="h3" component={"h3"} fontSize={30} fontWeight={600} color="neutral.cl900">
                            Chuyên viên kinh doanh
                        </Typography>
                    </Link>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1.5} mb={3}>
                    <Stack direction={"row"} justifyContent={"center"} alignContent={"center"} p={"4px 12px"} bgcolor="neutral.cl100">
                        <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl700">
                            30-35tr
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"center"} alignContent={"center"} p={"4px 12px"} bgcolor="neutral.cl100">
                        <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl700">
                            Hà Nội
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"center"} alignContent={"center"} p={"4px 12px"} bgcolor="neutral.cl100">
                        <Typography variant="body2" fontSize={16} fontWeight={400} color="neutral.cl700">
                            18/07/2024
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} spacing={1.5}>
                    <Button 
                        component={Link}
                        href={`/tuyen-dung/nhan-vien-kinh-doanh`}
                        variant="contained" 
                        size="large" 
                        endIcon={<IconArrowRight />} 
                        sx={{
                            bgcolor: 'primary.main',
                            color: '#fff'
                        }}
                    >
                        Ứng tuyển
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}