import { Card, CardBody } from '@heroui/react'

export function DOIInfo() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <h2 className="text-3xl lg:text-4xl font-nasa font-bold text-default-800">
                Built on Trust, <span className="text-primary font-nasa">Security,</span> Transparency
              </h2>
              <p className="text-lg text-default-600 max-w-lg">
                An entire ecosystem that simplifies real estate investing worldwide and that will continue revolutionizing the industry with high standards and pioneer solutions
              </p>
            </div>
  
            {/* Stats Grid */}
            <div className="flex gap-4">
              {/* Right Content - Image */}
              <div className="relative flex-1 max-w-lg">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-default-200 to-default-300 flex items-center justify-center">
                    <img src="/images/home/info.png" alt="DOI Info" width={500} height={500} />
                  </div>
                </div>
              </div>                
              <div className="grid grid-cols-2 gap-4 flex-1">
                <Card className="bg-primary text-white p-6 rounded-2xl shadow-sm">
                  <CardBody className="text-center">
                    <div className="flex flex-col items-center justify-center h-full gap-6">
                      <div className="text-3xl font-bold font-nasa">$3.4 MIL</div>
                      <div className="text-sm opacity-90">Investments</div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="bg-default-200 p-6 rounded-2xl shadow-sm">
                  <CardBody className="text-center">
                    <div className="flex flex-col items-center justify-center h-full gap-6">
                      <div className="text-3xl font-bold text-default-800 font-nasa">4</div>
                      <div className="text-sm text-default-600">Properties up and running</div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="bg-default-200 p-6 rounded-2xl shadow-sm">
                  <CardBody className="text-center">
                    <div className="flex flex-col items-center justify-center h-full gap-6">
                      <div className="text-3xl font-bold text-default-800 font-nasa">50</div>
                      <div className="text-sm text-default-600">Global regions projected</div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="bg-default-200 p-6 rounded-2xl shadow-sm">
                  <CardBody className="text-center">
                    <div className="flex flex-col items-center justify-center h-full gap-6">
                      <div className="text-3xl font-bold text-default-800 font-nasa">2021</div>
                      <div className="text-sm text-default-600">DOI was founded</div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
    )
  }