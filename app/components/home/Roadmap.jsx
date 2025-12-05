import { Card, CardBody } from '@heroui/react'

export function Roadmap() {
  const phases = [
    {
      number: 1,
      title: 'Foundation & Capability Building',
      subtitle: 'Current Stage',
      isActive: true,
    },
    {
      number: 2,
      title: 'Growth & Market Expansion',
      subtitle: 'Near Term',
      isActive: false,
    },
    {
      number: 3,
      title: 'Innovation & Differentiation',
      subtitle: 'Mid Term',
      isActive: false,
    },
    {
      number: 4,
      title: 'Global Leadership',
      subtitle: 'Long-Term',
      isActive: false,
    },
  ]

  const objectives = [
    {
      number: 1,
      title: 'Organizational Strength',
      items: [
        'Optimize internal processes for efficiency and scalability',
        'Expand core team in operations, technology, and strategy',
        'Strengthen governance, compliance, and risk management',
      ],
    },
    {
      number: 2,
      title: 'Technology & Infrastructure',
      items: [
        'Secure and robust digital infrastructure',
        'Improved platform performance and reliability',
        'Data security and privacy enhancements',
      ],
    },
    {
      number: 3,
      title: 'Brand & Market Positioning',
      items: [
        'Define and communicate a clear brand identity',
        'Increase visibility in core markets',
        'Launch targeted marketing campaigns',
      ],
    },
  ]

  return (
    <section className="py-20 bg-default-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Roadmap
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Section: Phases */}
          <div className="space-y-4">
            {phases.map((phase) => (
              <Card
                key={phase.number}
                className={`rounded-2xl shadow-md ${
                  phase.isActive
                    ? 'bg-primary border-2 border-primary-200'
                    : 'bg-default-100 border border-default-200'
                }`}
              >
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <h3
                    className={`text-sm mt-1`}>
                        Phase {phase.number}
                    </h3>
                    <div className="flex-1 flex-col justify-center">
                      <p
                        className={`text-lg font-bold mb-1`}
                      >
                        {phase.title}
                      </p>
                      <p
                        className={`text-sm`}
                      >
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Right Section: Key Objectives */}
          <div className="space-y-8">
            {objectives.map((objective) => (
              <div key={objective.number} className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sm">
                      {objective.number}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold">
                    {objective.title}
                  </h4>
                </div>
                <ul className="space-y-2 ml-11">
                  {objective.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-default-300"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-success-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}