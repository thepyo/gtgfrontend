import { Divider, Stack, Typography } from "@mui/material";

const metas = [
    {id:1,name: 'Mã tuyển dụng', content: 'NTD-9616'},
    {id:2,name: 'Loại công việc', content: 'Toàn thời gian cố định'},
    {id:3,name: 'Mức lương', content: '30-35 tr'},
    {id:4,name: 'Số lượng tuyển', content: 2},
    {id:5,name: 'Hạn nộp hồ sơ', content: '30/09/2024'},
    {id:6,name: 'Địa điểm làm việc', content: 'Hà Nội'},
]

export default function TuyendungDetailMeta(){
    return(
        <Stack direction={"column"} spacing={1.5} divider={<Divider light />}>
            {metas.map(item =>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    spacing={1}
                    key={item.id}
                >
                    <Typography
                        variant="body1"
                        fontSize={15}
                        fontWeight={600}
                        color="neutral.cl900"
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={15}
                        fontWeight={400}
                        color="neutral.cl900"
                    >
                        {item.content}
                    </Typography>
                </Stack>
            )}
        </Stack>
    )
}