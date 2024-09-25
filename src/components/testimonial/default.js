import { Box, Stack, Typography } from "@mui/material";
import { IconStarFilled } from "@tabler/icons-react";

export default function TestimonialItem({
    name,
    content,
    rating,
    width = 400,
    height = 450
}){
    return(
        <Stack 
            direction={"column"} 
            width={width}
            height={height}
            p={2}
            bgcolor={"rgba(243, 244, 246, 1)"}
            spacing={2}
            justifyContent={"space-between"}
        >
            <Box>
                <svg width="68" height="54" viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.359 54V38.5967C38.359 28.2098 40.8581 19.7115 45.8564 13.1016C50.8547 6.37377 58.2359 2.00656 68 0V13.2787C63.9316 14.223 60.5607 15.9934 57.8872 18.5902C55.3299 21.0689 53.6444 24.0197 52.8308 27.4426H64.5128V54H38.359ZM0 54V38.5967C0 28.2098 2.49915 19.7115 7.49744 13.1016C12.4957 6.37377 19.8769 2.00656 29.641 0V13.2787C25.5726 14.223 22.2017 15.9934 19.5282 18.5902C16.9709 21.0689 15.2855 24.0197 14.4718 27.4426H26.1538V54H0Z" fill="#00AEEF"/>
                </svg>
            </Box>

            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <IconStarFilled color={rating < 1 ? "rgba(0,0,0,0.4)" : "rgba(251, 191, 0, 1)"} />
                <IconStarFilled color={rating < 2 ? "rgba(0,0,0,0.4)" : "rgba(251, 191, 0, 1)"} />
                <IconStarFilled color={rating < 3 ? "rgba(0,0,0,0.4)" : "rgba(251, 191, 0, 1)"} />
                <IconStarFilled color={rating < 4 ? "rgba(0,0,0,0.4)" : "rgba(251, 191, 0, 1)"} />
                <IconStarFilled color={rating < 5 ? "rgba(0,0,0,0.4)" : "rgba(251, 191, 0, 1)"} />
            </Stack>

            <Box flexDirection={1}>
                <Typography
                    fontSize={18}
                    fontWeight={400}
                    textAlign={"justify"}
                    color="neutral.cl900"
                >
                    {content}
                </Typography>
            </Box>

            <Box py={2}>
                <Typography color="neutral.cl900" fontSize={18} fontWeight={700}>
                    {name}
                </Typography>
            </Box>
        </Stack>
    )
}