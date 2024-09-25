import * as React from 'react';
import { gtgConfig } from '@/config/global';
import { NextSeo } from 'next-seo';
import SectionAboutHomePage from '@/components/pages/homepage/section2';
import YoungBussinessHomePageSection from '@/components/pages/homepage/youngBussiness';
import ServiceHomePageSection from '@/components/pages/homepage/service';
import HumanResourceHomePageSection from '@/components/pages/homepage/humanResource';
import CustomerTellingHomePageSection from '@/components/pages/homepage/customer';
import NewsHomepageSection from '@/components/pages/homepage/news';
import { Container } from '@mui/material';
import CallToActionDefault from '@/components/cta/default';

export default function Index({posts,homepage}) {
  return (
    <>
      <NextSeo
        title={homepage?.seo?.title || "GTG Group"}
        description={homepage?.seo?.description || homepage?.description_section_1}
        openGraph={{
          url: gtgConfig.cdnDomain,
          title: homepage?.seo?.title || "GTG Group",
          description: homepage?.seo?.description || homepage?.description_section_1,
          images: [
            { url: homepage?.seo?.thubnail?.data ? gtgConfig.cdnDomain +  homepage?.seo?.thubnail?.data?.attributes?.url : '/sv-thumbnail.jpg'}
          ],
          siteName: "GTG Group",
        }}
      />
      <SlideHomePageDefault />
      <SectionAboutHomePage data={homepage}/>
      <YoungBussinessHomePageSection data={homepage}/>
      <ServiceHomePageSection data={homepage}/>
      <HumanResourceHomePageSection data={homepage}/>
      <CustomerTellingHomePageSection data={homepage}/>
      <NewsHomepageSection posts={posts} data={homepage}/>
      <Container maxWidth={gtgConfig.maxWidth}>
        <CallToActionDefault />
      </Container>
    </>
  );
}

export async function getStaticProps() {

  const urlData = `${process.env.API_URL}/news?populate[0]=thumbnail&populate[1]=category`
  const urlHomepage = `${process.env.API_URL}/homepage?populate[0]=about&populate[1]=about.thumbnail&populate[2]=thumbnail_section_2&populate[3]=services&populate[4]=services.thumbnail&populate[5]=backgroud_tuyen_dung&populate[6]=testimonials&populate[7]=seo&populate[8]=seo.thumbnail`

  const getdataPost = await fetch(urlData)
  const responsePost = await getdataPost.json()

  const getdataHomePage = await fetch(urlHomepage)
  const responseHomePage = await getdataHomePage.json()

  return{
      props: {
          posts: responsePost?.data,
          homepage: responseHomePage?.data?.attributes
      },
      revalidate: gtgConfig.revalidate
  }
}