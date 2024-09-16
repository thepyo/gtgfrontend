import { Box, Button, Divider, Fade, Paper, Popper, Stack, Typography } from "@mui/material";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import theme from "@/config/theme";

export default function NavbarItem({item}){

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const handleClose = (event) => {
        setOpen(false)
    }

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    if(item?.child && item?.child?.length > 0) return(
        <Box
            onMouseLeave={handleClose}
        >
            <Stack 
                direction={"row"} 
                alignItems={"center"} 
                spacing={1}
                aria-owns={open ? `navbar-popover-${item.id}` : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                sx={{cursor: 'pointer'}}
                className="navbar-item"
            >
                <Typography variant="body2" fontSize={17} fontWeight={500} color="inherit">
                    {item.label}
                </Typography>
                <IconChevronDown size={17} color={theme.palette.neutral.cl600} />
            </Stack>
            
            <Popper 
                id={id} 
                open={open} 
                anchorEl={anchorEl} 
                transition 
                sx={{zIndex: 999}}
            >
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                        <Stack minWidth={300} my={2} py={3} px={2} direction={"column"} spacing={2} divider={<Divider light />}>
                            {item?.child?.map(e => 
                                <Link href={e.link} key={e.id} className="navbar-item">
                                    <Typography variant="body2" fontSize={17} fontWeight={500} color="inherit">
                                        {e.label}
                                    </Typography>
                                </Link>
                            )}
                        </Stack>
                    </Paper>
                </Fade>
                )}
            </Popper>

        </Box>
    )

    return(
        <Link href={item.link} className="navbar-item">
            <Typography variant="body2" fontSize={17} fontWeight={500} color="inherit">
                {item.label}
            </Typography>
        </Link>
    )
}