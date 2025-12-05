import { Button, Card, CardBody, Link } from '@heroui/react'
import { Icon } from '@iconify/react'

export function Memberships() {
  return (
    <section className="py-20 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 flex flex-col items-center justify-center gap-4">
            <span>Enjoy The Benefits Of</span>
            <span className="text-gold">DOI Membership</span>
          </h2>
        </div>

        {/* Membership Cards */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Basic Membership Card */}
          <Card className="bg-white border border-default-200 rounded-2xl shadow-lg overflow-hidden flex-1">
            <CardBody className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-default-800 mb-3">
                  Basic Membership
                </h3>
                <p className="text-default-600">
                  Purchase your DOI tokens now and join our exclusive community
                  of investors.
                </p>
              </div>

              <Button
                as={Link}
                href="/doi-token"
                className="w-full bg-white border-2 border-default-300 text-default-800 font-medium"
                variant="bordered"
                radius="lg"
              >
                Get Started Now
              </Button>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      className="w-4 h-4 text-default-500"
                    />
                  </div>
                  <span className="text-default-600">20% property discount</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      className="w-4 h-4 text-default-500"
                    />
                  </div>
                  <span className="text-default-600">Sweepstakes entry</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="mdi:check"
                      className="w-4 h-4 text-default-500"
                    />
                  </div>
                  <span className="text-default-600">Monthly payouts</span>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Gold Membership Card - Wider */}
          <Card className="bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-200 rounded-2xl shadow-lg overflow-hidden relative flex-[1.5]">
            <CardBody className="p-8 space-y-6 relative z-10">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side - Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-default-800 mb-3">
                      Gold Membership
                    </h3>
                    <p className="text-default-600">
                      With DOI, investing is not only lucrative but also secure.
                    </p>
                  </div>

                  <Button
                    as={Link}
                    href="/doi-gold"
                    className="w-full bg-gold text-foreground font-medium"
                    variant="solid"
                    radius="full"
                  >
                    Get Started Now
                  </Button>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-default-500"
                        />
                      </div>
                      <span className="text-default-600">
                        40% life-time property discount
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-default-500"
                        />
                      </div>
                      <span className="text-default-600">
                        12% guaranteed annual return
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-default-500"
                        />
                      </div>
                      <span className="text-default-600">
                        Premier access to home & tax
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-default-500"
                        />
                      </div>
                      <span className="text-default-600">
                        Worldwide investment options
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-default-500"
                        />
                      </div>
                      <span className="text-default-600">
                        Full management service
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-default-200 flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-default-500"
                        />
                      </div>
                      <span className="text-default-600">
                        Travel parks & discounts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side - Building Image */}
                <div className="hidden lg:block lg:flex-shrink-0 lg:w-64 lg:h-full">
                  <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
                    <img
                      src="/images/home/gold-membership.png"
                      alt="Modern residential building"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}