import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import WhatWeCreate from './WhatWeCreate/WhatWeCreate';
import WeStand from './WeStand/WeStand';
import FindYourRightFit from './FindYourRightFit/FindYourRightFit';
import PlanAcampaign from './PlanAcampaign/PlanAcampaign';
import LeadingPartners from './LeadingPartners/LeadingPartners';
import BestOurWorks from './BestOurWorks/BestOurWorks';
import EmpoweringBrands from './EmpoweringBrands/EmpoweringBrands';
import AreYouCreator from './AreYouCreator/AreYouCreator';

const Main = () => {
  return (
    <section className='sec-main'>
        <Header />
        <Banner />
        <WhatWeCreate />
        <WeStand />
        <FindYourRightFit />
        <PlanAcampaign />
        <LeadingPartners />
        <BestOurWorks />
        <EmpoweringBrands />
        <AreYouCreator />
    </section>
  )
}

export default Main