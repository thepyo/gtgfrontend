import * as React from 'react';
import dynamic from 'next/dynamic';
import { gtgConfig } from '@/config/global';

const Container = dynamic(()=> import('@mui/material/Container'))
const CallToActionDefault = dynamic(() => import('@/components/cta/default'))
const SectionAboutHomePage = dynamic(() => import('@/components/pages/homepage/section2'))
const YoungBussinessHomePageSection = dynamic(() => import('@/components/pages/homepage/youngBussiness'))
const ServiceHomePageSection = dynamic(() => import('@/components/pages/homepage/service'))
const HumanResourceHomePageSection = dynamic(() => import('@/components/pages/homepage/humanResource'))
const CustomerTellingHomePageSection = dynamic(() => import('@/components/pages/homepage/customer'))
const NewsHomepageSection = dynamic(() => import('@/components/pages/homepage/news'))
// const SlideHomePageDefault = dynamic(() => import('@/components/pages/homepage/slide'))

export default function Index() {
  return (
    <>
      {/* <SlideHomePageDefault /> */}
      <SectionAboutHomePage />
      <YoungBussinessHomePageSection />
      <ServiceHomePageSection />
      <HumanResourceHomePageSection />
      <CustomerTellingHomePageSection />
      <NewsHomepageSection />
      <Container maxWidth={gtgConfig.maxWidth}>
        <CallToActionDefault />
      </Container>
    </>
  );
}