import {  Card, CardBody, Progress } from "@heroui/react"
const Progress_Card = () => {
  return (
    <Card className="bg-darkgray text-white w-full max-w-lg rounded-4xl shadow-xl border-none">
                        <CardBody className="p-8 overflow-visible">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-4xl font-nasa font-bold">68%</h3>
                                    <p className="text-white font-nasa text-sm mt-1">Token Earned</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-nasa text-white">
                                        Required <span className="text-doiorange  font-bold">7 Token</span> for
                                    </p>
                                    <p className="text-sm text-gray-300">DOI Gold member</p>
                                </div>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="relative pt-2 pb-2">
                              

                            <div className="relative w-full">
  <Progress
    aria-label="Token Earned"
    value={68}
    classNames={{
      track: "bg-gray-900 h-6 rounded-full",
      indicator: "bg-doiorange h-6 rounded-full",
      base: "w-full",
    }}
    size="lg"
  />

  {/* Value label at the end of the bar */}
  <span className="absolute right-1/3 top-1/2 -translate-y-1/2 text-white text-sm">
    13
  </span>
</div>
                                <div className="flex justify-between  text-md mt-2 text-white font-mono">
                                    <span>0</span>
                                    <span>10</span>
                                    <span>20</span>
                                </div>
                                
                            </div>
                        </CardBody>
                    </Card>
  )
}

export default Progress_Card
