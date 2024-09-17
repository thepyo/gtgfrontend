import Logo from "@/components/ui/logo";
import theme from "@/config/theme";
import { menu } from "@/layouts/header/navbar/menu";
import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ToggleButton(){

    const [open,setOpen] = useState(false)

    const router = useRouter()

    const handleClick = (link) => {
        router.push(link)
        setOpen(false)
    }

    return(
        <>
            <IconButton variant="text" onClick={()=>setOpen(true)}>
                <IconMenu2 size={28} color={theme.palette.primary.main}/>
            </IconButton>

            <Drawer
                anchor={"right"}
                open={open}
                onClose={()=>setOpen(false)}
            >
                <Stack p={3} width={300} height={"100vh"} overflow={"hidden"} gap={5} position={"relative"}>

                    <Logo />

                    <Stack spacing={2} divider={<Divider light />}>
                        {menu?.map((item,key) =>
                            <Stack 
                                onClick={() => handleClick(item?.link)} 
                                key={key} 
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                sx={{cursor: 'pointer'}}
                                direction={"row"}
                            >
                                <Typography variant="body2" fontSize={14} fontWeight={500} textTransform={"uppercase"}>
                                    {item?.label}
                                </Typography>
                                <IconChevronRight size={15}/>
                            </Stack>
                        )}
                    </Stack>
                </Stack>
            </Drawer>
        </>
    )
}