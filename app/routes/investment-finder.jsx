import React from 'react'
import Hero from '../components/ui/Hero';
import { InvestmentSearch } from '@components'
const Investment_finder = () => {
  return (
    <div >
      <Hero
      title1={"Properties"}
      title2={false}
        paragraph1={"Discover and invest in tokenized real estate properties"}
        image={"/images/doi-token/Banner.png"}
      />
      <InvestmentSearch/>
    </div>
  )
}

export default Investment_finder;
