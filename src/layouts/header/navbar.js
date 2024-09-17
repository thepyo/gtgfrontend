import { Stack } from "@mui/material";
import { menu } from "./navbar/menu";
import NavbarItem from "./navbar/item";

export default function Navbar(){

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
        </>
    )
}