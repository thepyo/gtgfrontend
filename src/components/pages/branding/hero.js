import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function HeroBrandingSection(){
    return(
        <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100vw"}
            position={"relative"}
            overflow={"hidden"}
        >
            <Box 
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                width={"100%"}
                height={"100%"}
                zIndex={0}
            >
                <Image
                    src="/branding.jpg"
                    width={1920}
                    height={658}
                    alt="img"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
            <Box
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                width={"100%"}
                height={"100%"}
                zIndex={1}
                sx={{
                    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)'
                }}
            />

            {/* tam giác */}

            <Box
                display={{xs: 'none', lg: 'block'}}
                position={"absolute"}
                left={0}
                right={0}
                bottom={0}
                width={"100%"}
                zIndex={2}
                sx={{
                    borderLeft: '50vw solid #fff',
                    borderRight: '50vw solid #fff',
                    borderTop: 'calc(100vh/1440 * 270) solid transparent',
                    zIndex: 4
                }}
            />

            <Image
                src="/branding-title.svg"
                width={1920}
                height={658}
                alt="branding title"
                style={{
                    position: 'relative',
                    zIndex:3,
                    width: '100vw',
                    height: 'auto'
                }}
            />
        </Stack>
    )
}