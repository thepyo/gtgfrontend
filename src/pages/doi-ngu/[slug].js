import DoctorItem from "@/components/pages/about/doctor";
import HeroPage from "@/components/ui/hero";
import { gtgConfig } from "@/config/global";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Markdown from "react-markdown";

export default function DoiNguDetail({datas,teams}){
    
    const thumbnail = datas?.thumbnail?.data ? gtgConfig.cdnDomain + datas?.thumbnail?.data?.attributes?.url : "/event-detail.jpg"
    
    return(
        <>
            <NextSeo
                title={datas?.seo?.title || datas?.position + ' - ' + datas?.title}
                description={datas?.seo?.description || datas?.description}
            />
            <HeroPage
                title={datas?.title}
                sapo={datas?.position + ' - ' + datas?.title}
                categories={[{id:1,name:'Sự kiện',href:"/su-ken"}]}
                thumbnail={thumbnail}
                sizeTitleXs={20}
                sizeTitleLg={40}
            />
            <Box py={6}>
                <Container maxWidth={gtgConfig.maxWidth}>
                    <Grid2 container spacing={{xs:3, lg:9}}>
                        <Grid2 size={{xs:12, lg: 4}}>

                            <Stack direction={"column"} position={"sticky"} top={10} spacing={3}>
                                <Image
                                    src={thumbnail}
                                    width={300}
                                    height={300}
                                    alt=""
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '50%'
                                    }}
                                />
                                <Stack direction={"column"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                                    <Typography variant="h1" component={"h1"} fontSize={28} fontWeight={700} color="primary.main">
                                        {datas?.title}
                                    </Typography>
                                    <Typography color="neutral.cl500">
                                        {datas?.position}
                                    </Typography>
                                </Stack>
                            </Stack>

                        </Grid2>
                        <Grid2 size={{xs:12, lg: 8}}>
                            <Box className="post-content">
                                <Markdown>
                                    {datas?.content}
                                </Markdown>
                            </Box>
                        </Grid2>
                    </Grid2>

                    
                    <Typography
                        variant="h2"
                        component={"h2"}
                        fontSize={{
                            xs: 20,
                            lg: 28
                        }}
                        fontWeight={600}
                        lineHeight={{xs: "45px", lg: 1}}
                        letterSpacing={"-1px"}
                        color="neutral.cl900"
                        mt={8}
                        mb={4}
                    >
                        Xem thêm đội ngũ chúng tôi
                    </Typography>

                    <Grid2 container spacing={3}>

                        {teams?.map(item =>
                            <Grid2 size={{xs: 6, lg: 4}} key={item.id}>
                                <DoctorItem
                                    title={item?.attributes?.title}
                                    position={item?.attributes?.position}
                                    thumbnail={item?.attributes?.thumbnail?.data?.attributes?.url && gtgConfig.cdnDomain + item?.attributes?.thumbnail?.data?.attributes?.url}
                                    link={`/doi-ngu/${item?.attributes?.slug}`}
                                />
                            </Grid2>
                        )}

                    </Grid2>
                </Container>
            </Box>
        </>
    )
}


export async function getStaticProps({ params }) {
    const slug = params?.slug

    const res = await fetch(`${process.env.API_URL}/teams?filters[slug][$eq]=${slug}&populate=*`)
    const data = await res.json()

    const reqTeams = await fetch(`${process.env.API_URL}/teams?popular=*`)
    const resTeams = await reqTeams.json()

    return{
        props: {
            datas: data?.data?.[0]?.attributes,
            teams: resTeams?.data
        },
        revalidate: gtgConfig.revalidate
    }
    
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/teams?pagination[page]=1&pagination[pageSize]=250`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            slug: `${post?.attributes?.slug}`
        },
    }))
   
    return { paths, fallback: 'blocking' }
}