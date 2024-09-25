import theme from "@/config/theme";
import { Box, Divider, NoSsr, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TOC(){

    const [toc,setToc] = useState([])

    function getToc(){
        setToc([])
        const allHeading2 = document.querySelectorAll(".post-content h2")
        allHeading2.forEach((el,index) => {
            setToc(preToc => [
                ...preToc,
                {id: index + 1, text: el.innerText}
            ])
        })
    }

    useEffect(()=>{
        return () => getToc()
    },[])

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
                    {toc?.map(item =>
                        <li key={item?.id}>
                            <a href={`#heading${item.id}`}>
                                {item?.text}
                            </a>
                        </li>
                    )}
                    
                </ol>
            </Box>
        </Stack>
    )
}