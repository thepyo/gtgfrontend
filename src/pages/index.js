import dynamic from 'next/dynamic';
const EmptyLayout =  dynamic(() => import('@/layouts/empty'))
const YoungBussinessHomePageSection = dynamic(() => import('@/components/pages/homepage/youngBussiness'))

export default function Index() {
  return(
    <YoungBussinessHomePageSection />
  )
}

Index.Layout = EmptyLayout