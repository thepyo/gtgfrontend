import { Box, Button, Stack, Typography } from "@mui/material";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function EventItem(){
    return(
        <Stack direction={"column"} spacing={2} mt={{xs:2, lg: 5}}>
            <Typography
                fontSize={{xs: 26, lg: 36}}
                fontWeight={600}
                lineHeight={"45px"}
                color="neutral.cl900"
                letterSpacing={"-3%"}
            >
                11.06.2024
            </Typography>
            <Typography
                fontSize={{xs:16, lg: 18}}
                fontWeight={400}
                lineHeight={1.5}
                color="neutral.cl500"
            >
                Chia sẻ về xu hướng làm đẹp mới nhất và tư vấn các giải pháp thẩm mỹ phù hợp cho từng đối tượng khách hàng
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2} component={Link} href="/su-kien/chia-se-xu-huong-lam-dep">
                <Typography
                    color="primary.main"
                    fontWeight={600}
                    fontSize={18}
                    lineHeight={"28px"}
                >
                    Đăng ký tham gia
                </Typography>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7473 7.41498 18.7192 4.93661 16.8913 3.10872C15.0634 1.28084 12.585 0.25273 10 0.25ZM13.75 11.5C13.75 11.6989 13.671 11.8897 13.5303 12.0303C13.3897 12.171 13.1989 12.25 13 12.25C12.8011 12.25 12.6103 12.171 12.4697 12.0303C12.329 11.8897 12.25 11.6989 12.25 11.5V8.81031L7.53063 13.5306C7.46095 13.6003 7.37822 13.6556 7.28718 13.6933C7.19613 13.731 7.09855 13.7504 7 13.7504C6.90146 13.7504 6.80388 13.731 6.71283 13.6933C6.62179 13.6556 6.53906 13.6003 6.46938 13.5306C6.3997 13.4609 6.34442 13.3782 6.30671 13.2872C6.269 13.1961 6.24959 13.0985 6.24959 13C6.24959 12.9015 6.269 12.8039 6.30671 12.7128C6.34442 12.6218 6.3997 12.5391 6.46938 12.4694L11.1897 7.75H8.5C8.30109 7.75 8.11033 7.67098 7.96967 7.53033C7.82902 7.38968 7.75 7.19891 7.75 7C7.75 6.80109 7.82902 6.61032 7.96967 6.46967C8.11033 6.32902 8.30109 6.25 8.5 6.25H13C13.1989 6.25 13.3897 6.32902 13.5303 6.46967C13.671 6.61032 13.75 6.80109 13.75 7V11.5Z" fill="#00AEEF"/>
                </svg>
            </Stack>
            <Stack component={Link} href="/su-kien/chia-se-xu-huong-lam-dep">
                <Image
                    src="/event.jpg"
                    width={348}
                    height={288}
                    alt="Chia sẻ về xu hướng làm đẹp mới nhất và tư vấn các giải pháp thẩm mỹ phù hợp cho từng đối tượng khách hàng"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}
                />
            </Stack>
        </Stack>
    )
}