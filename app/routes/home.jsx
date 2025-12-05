import { Button, Card, CardBody } from '@heroui/react'
import { Icon } from '@iconify/react'

import { InvestmentSearch, DOIInfo, Memberships, Roadmap } from '@components'

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <section className="relative h-[70vh] bg-gradient-to-r from-default-900 to-default-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-default-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/home/header.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold font-nasa leading-tight">
                Invest in tokenized real estate. Unlock rewards with DOI
              </h1>
              <p className="text-lg text-white font-bold max-w-lg">
                The best and easiest way to invest in real estate and make crypto income at the same time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="solid" color="primary" radius="full" size="lg" className="font-nasa">
                  Buy Tokens
                </Button>
                <Button variant="solid" color="default" radius="full" size="lg" className="font-nasa">
                  View All Properties
                </Button>
              </div>
            </div>

            {/* Right Content - Featured Property Card */}
            <div className="flex justify-end">
              <Card className="max-w-60 bg-white shadow-2xl rounded-2xl overflow-hidden">
                <CardBody className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-default-800">Naturewood Serenity</h3>
                    <div className="flex items-center space-x-2">
                      <Icon icon="mdi:map-marker-outline" className="w-5 h-5" />
                      <span className="text-sm text-default-600">Modern Eco Villa</span>
                    </div>
                    <div className="text-3xl font-bold text-default-800">$280,000</div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-default-50 pb-20 overflow-visible">
        <InvestmentSearch /> 
        <DOIInfo />
      </section>         
      <Memberships />
      <Roadmap />
    </main>
  )
}
