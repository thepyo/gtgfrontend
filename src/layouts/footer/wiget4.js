import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Widget4(){
    return(
        <Stack direction={"column"} spacing={3}>
            <Typography variant="h2" component={"h2"} fontWeight={600} fontSize={20} lineHeight={"28px"} color="neutral.cl900">
                Liên kết
            </Typography>

            <Stack direction={"column"} spacing={2}>
                <Link href={`/`}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_109_4759)">
                        <path d="M16.5 28C23.1274 28 28.5 22.6274 28.5 16C28.5 9.37258 23.1274 4 16.5 4C9.87258 4 4.5 9.37258 4.5 16C4.5 22.6274 9.87258 28 16.5 28Z" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.5 11H19.5C18.7044 11 17.9413 11.3161 17.3787 11.8787C16.8161 12.4413 16.5 13.2044 16.5 14V28" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 18H20.5" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_109_4759">
                        <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>

                        <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                            Facebook
                        </Typography>
                    </Stack>
                </Link>

                <Link href={`/`}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_109_4766)">
<path d="M16.5 21C19.2614 21 21.5 18.7614 21.5 16C21.5 13.2386 19.2614 11 16.5 11C13.7386 11 11.5 13.2386 11.5 16C11.5 18.7614 13.7386 21 16.5 21Z" stroke="#00AEEF" stroke-width="2" stroke-miterlimit="10"/>
<path d="M22.5 4H10.5C7.18629 4 4.5 6.68629 4.5 10V22C4.5 25.3137 7.18629 28 10.5 28H22.5C25.8137 28 28.5 25.3137 28.5 22V10C28.5 6.68629 25.8137 4 22.5 4Z" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 11C23.8284 11 24.5 10.3284 24.5 9.5C24.5 8.67157 23.8284 8 23 8C22.1716 8 21.5 8.67157 21.5 9.5C21.5 10.3284 22.1716 11 23 11Z" fill="#00AEEF"/>
</g>
<defs>
<clipPath id="clip0_109_4766">
<rect width="32" height="32" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


                        <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                            Instagram
                        </Typography>
                    </Stack>
                </Link>

                <Link href={`/`}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_109_4773)">
<path d="M20.5 16L14.5 12V20L20.5 16Z" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 16C3.5 19.7387 3.88375 21.9312 4.17625 23.0587C4.2536 23.3654 4.40258 23.6494 4.61096 23.8873C4.81935 24.1253 5.08119 24.3104 5.375 24.4275C9.565 26.0437 16.5 26 16.5 26C16.5 26 23.435 26.0437 27.625 24.4275C27.9197 24.311 28.1826 24.1262 28.3919 23.8882C28.6012 23.6503 28.7509 23.3659 28.8288 23.0587C29.1213 21.9337 29.505 19.7387 29.505 16C29.505 12.2612 29.1213 10.0687 28.8288 8.94124C28.7518 8.6329 28.6024 8.34734 28.3931 8.10822C28.1838 7.8691 27.9205 7.68331 27.625 7.56624C23.435 5.95624 16.5 5.99999 16.5 5.99999C16.5 5.99999 9.565 5.95624 5.375 7.57249C5.07954 7.68956 4.81623 7.87535 4.6069 8.11447C4.39756 8.35359 4.24822 8.63915 4.17125 8.94749C3.88375 10.0675 3.5 12.2612 3.5 16Z" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_109_4773">
<rect width="32" height="32" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


                        <Typography variant="body1" fontWeight={400} fontSize={16} lineHeight={"24px"} color="neutral.cl900">
                            Youtube
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}