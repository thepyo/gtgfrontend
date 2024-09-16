import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { menu } from "./navbar/menu";
import NavbarItem from "./navbar/item";
import { IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import theme from "@/config/theme";
import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/ui/logo";

export default function Navbar(){

    const [open,setOpen] = useState(false)

    const router = useRouter()

    const handleClick = (link) => {
        setOpen(false)
        router.push(link)
    }

    return(
        <>
            {/* desktop */}
            <Stack 
                direction={"row"} 
                justifyContent={"flex-end"} 
                alignItems={"center"} 
                spacing={5} 
                height={"100%"}
                display={{
                    xs: 'none',
                    lg: 'flex'
                }}
            >
                {menu?.map(item => <NavbarItem key={item.id} item={item} />)}
            </Stack>

            {/* Mobile */}
            <Stack 
                justifyContent={"end"} 
                alignItems={"center"} 
                direction={"row"}
                display={{
                    xs: 'flex',
                    lg: 'none'
                }}
            >
                <Button variant="text" onClick={()=>setOpen(true)}>
                    <IconMenu2 size={35} color={theme.palette.primary.main}/>
                </Button>

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
            </Stack>
        </>
    )
}