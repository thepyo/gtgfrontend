import { Divider, Stack, Typography } from "@mui/material";

export default function TuyendungDetailMeta({post}){

    const metas = [
        {id:1,name: 'Mã tuyển dụng', content: post.code},
        {id:2,name: 'Loại công việc', content: post.type},
        {id:3,name: 'Mức lương', content: post.salary},
        {id:4,name: 'Số lượng tuyển', content: post.number},
        {id:5,name: 'Hạn nộp hồ sơ', content: post.deadline},
        {id:6,name: 'Địa điểm làm việc', content: post.location},
    ]

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