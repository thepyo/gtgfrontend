import * as React from 'react';
import Container from '@mui/material/Container';
import CallToActionDefault from '@/components/cta/default';
import { gtgConfig } from '@/config/global';
import SectionAboutHomePage from '@/components/pages/homepage/section2';
import YoungBussinessHomePageSection from '@/components/pages/homepage/youngBussiness';
import ServiceHomePageSection from '@/components/pages/homepage/service';
import HumanResourceHomePageSection from '@/components/pages/homepage/humanResource';
import CustomerTellingHomePageSection from '@/components/pages/homepage/customer';
import NewsHomepageSection from '@/components/pages/homepage/news';
import SlideHomePageDefault from '@/components/pages/homepage/slide';

export default function Index() {
  return (
    <>
      <SlideHomePageDefault />
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