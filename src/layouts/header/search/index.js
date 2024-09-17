import { Button, Chip, Dialog, Divider, IconButton, InputBase, Paper, Stack, TextField } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import SearchResult from "./search-result";

export default function Search(){

    const [open,setOpen] = useState(false)

    return(
        <>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    cursor: 'pointer'
                }}
                onClick={()=>setOpen(true)}
            >
                <IconSearch color="#fff" />
            </Stack>

            <Dialog
                fullWidth={false}
                maxWidth={"lg"}
                open={open}
                onClose={()=>setOpen(false)}
            >
                <Stack direction={"column"} spacing={2} width={{xs: '100%', lg: 600}}>
                    <Stack
                        direction={"row"}
                        component="form"
                        alignItems={"center"}
                        px={2}
                        pt={2}
                        spacing={2}
                    >
                        <IconSearch color="#555" size={20}/>
                        <InputBase
                            sx={{ flexGrow: 1 }}
                            placeholder="Nhập từ khoá tìm kiếm ..."
                            inputProps={{ 'aria-label': 'Nhập từ khoá tìm kiếm' }}
                            autoFocus
                        />
                        <Chip variant="outlined" size="small" label="esc" sx={{borderRadius: '5px'}}/>
                    </Stack>
                    <Divider light />
                    <SearchResult />
                </Stack>
            </Dialog>
        </>
    )
}