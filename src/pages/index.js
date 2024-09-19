import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const EmptyLayout =  dynamic(() => import('@/layouts/empty'))
const YoungBussinessHomePageSection = dynamic(() => import('@/components/pages/homepage/youngBussiness'))

export default function Index() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    let timer = setTimeout(() => setLoading(false), 500)

    return () => clearTimeout(timer)
  },[])

  if(!loading) return(
    <YoungBussinessHomePageSection />
  )

  return <>loading</>
}

Index.Layout = EmptyLayout