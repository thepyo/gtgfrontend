import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

function Item({
    title="BIẾT ƠN",
    description="Luôn đề cao sự biết  biết ơn cuộc đơi, biết ơn gia đình, biết ơn lãnh đạo, biết ơn đồng nghiệp. Sống có lòng biết ơn là lối sống văn hoá, khẳng định phẩm chất cao quý của con người."
}){
    return(
        <Stack direction={"column"} spacing={1}>
            <Typography fontSize={{xs:26, lg: 36}} fontWeight={600} letterSpacing={"-1px"} lineHeight={1.3}>
                {title}
            </Typography>
            <Divider light sx={{bgcolor: '#A5D7E8', height: {xs: 2, lg: 7}, width: 166}} />
            <Typography fontSize={16} fontWeight={400} color="neutral.cl900" pt={{xs:1, lg: 2}}>
                {description}
            </Typography>
        </Stack>
    )
}

export default function MapCultrue(){
    return(
        <Stack position={"relative"} bgcolor={{xs: '#02aef0', lg: 'transparent'}}>
            <Box
                position={{
                    xs: 'relative',
                    lg: 'absolute'
                }}
                top={"13%"}
                left={{
                    xs: "unset",
                    lg: "10%",
                    xl: "10%"
                }}
                zIndex={1}
                maxWidth={360}
                p={{
                    xs: 2,
                    lg: 0
                }}
            >
                <Item />
            </Box>

            <Box
                position={{
                    xs: 'relative',
                    lg: 'absolute'
                }}
                top={"35%"}
                left={{
                    xs: "unset",
                    lg: "14%",
                    xl: "14%"
                }}
                zIndex={1}
                maxWidth={360}
                p={{
                    xs: 2,
                    lg: 0
                }}
            >
                <Item 
                    title="ĐỒNG ĐỘI"
                    description="Đoàn kết là sức mạnh. Làm việc nhóm (Teamwork) là cột sống của mọi thành công bền vững."
                />
            </Box>

            <Box
                position={{
                    xs: 'relative',
                    lg: 'absolute'
                }}
                top={"55%"}
                left={{
                    xs: "unset",
                    lg: "18%",
                    xl: "18%"
                }}
                zIndex={1}
                maxWidth={360}
                p={{
                    xs: 2,
                    lg: 0
                }}
            >
                <Item 
                    title="TRÁCH NHIỆM"
                    description="Dám nghĩ, dám làm, dám chịu. Không ngại nhận sai, không sợ khó khăn, không ngừng cải thiện"
                />
            </Box>


            <Box
                position={{
                    xs: 'relative',
                    lg: 'absolute'
                }}
                top={"13%"}
                right={{
                    xs: "unset",
                    lg: "13%",
                    xl: "14%"
                }}
                zIndex={1}
                maxWidth={360}
                p={{
                    xs: 2,
                    lg: 0
                }}
            >
                <Item 
                    title="QUY TRÌNH"
                    description="Tiết kiệm nguồn lực, thời gian, công  sức, nhân bản hoá, mở rộng quy mô."
                />
            </Box>

            <Box
                position={{
                    xs: 'relative',
                    lg: 'absolute'
                }}
                top={"35%"}
                right={{
                    xs: "unset",
                    lg: "13%",
                    xl: "16%"
                }}
                zIndex={1}
                maxWidth={360}
                p={{
                    xs: 2,
                    lg: 0
                }}
            >
                <Item 
                    title="HỌC HỎI"
                    description="Chúng tôi luôn đề cao việc tự rèn luyện, học tập và chia sẻ, không ngại khó, ngại khổ để học, tự học và vươn lên chính mình."
                />
            </Box>

            <Box
                position={{
                    xs: 'relative',
                    lg: 'absolute'
                }}
                top={"55%"}
                right={{
                    xs: "unset",
                    lg: "8%",
                    xl: "10%"
                }}
                zIndex={1}
                maxWidth={360}
                p={{
                    xs: 2,
                    lg: 0
                }}
            >
                <Item 
                    title="TỐC ĐỘ"
                    description="Tư duy THẦN TỐC, hành động THẦN TỐC. Ngày nào cũng là một ngày khởi nghiệp, không trì hoãn."
                />
            </Box>

            <Box
                position={"relative"}
                zIndex={0}
            >
                <Image
                    src={"/bg-culture-map.jpg"}
                    width={1920}
                    height={1200}
                    alt=""
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </Box>
        </Stack>
    )
}