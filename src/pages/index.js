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

export default function Index() {
  return (
    <>
      <NextSeo
        title="GTG Group"
        description="A short description goes here."
      />
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