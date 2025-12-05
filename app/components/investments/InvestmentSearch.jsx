import { useState } from 'react'
import { Card, Button, Select, SelectItem } from '@heroui/react'
import { Icon } from '@iconify/react'

export function InvestmentSearch() {
    const [selectedType, setSelectedType] = useState("all");
  
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-20 z-20">
          <Card className="bg-white shadow-2xl rounded-2xl p-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-default-800">Find The Best Place</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select
                  startContent={<Icon icon="mdi:map-marker-outline" className="w-5 h-5" />}
                  label="Location"
                  selectedKeys={[selectedType]}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                  radius="full"
                >
                  <SelectItem key="all" value="all">All</SelectItem>
                  <SelectItem key="tulum" value="tulum">Tulum</SelectItem>
                  <SelectItem key="playa del carmen" value="playa del carmen">Playa del Carmen</SelectItem>
                  <SelectItem key="zipolite" value="zipolite">Zipolite</SelectItem>
                </Select>
                <Select
                  startContent={<Icon icon="mdi:office-building" className="w-5 h-5" />}
                  label="Property Type"
                  selectedKeys={[selectedType]}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                  radius="full"
                >
                  <SelectItem key="all" value="all">All</SelectItem>
                  <SelectItem key="residential" value="residential">Residential</SelectItem>
                  <SelectItem key="commercial" value="commercial">Commercial</SelectItem>
                  <SelectItem key="mixed-use" value="mixed-use">Mixed Use</SelectItem>
                  <SelectItem key="industrial" value="industrial">Industrial</SelectItem>
                </Select>
                <Select
                  startContent={<Icon icon="mdi:currency-usd" className="w-5 h-5" />}
                  label="Price Range"
                  selectedKeys={[selectedType]}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                  radius="full"
                >
                  <SelectItem key="all" value="all">All</SelectItem>
                  <SelectItem key="100000-200000" value="100000-200000">$100,000-$200,000</SelectItem>
                  <SelectItem key="200000-300000" value="200000-300000">$200,000-$300,000</SelectItem>
                  <SelectItem key="300000-400000" value="300000-400000">$300,000-$400,000</SelectItem>
                  <SelectItem key="400000-500000" value="400000-500000">$400,000-$500,000</SelectItem>
                  <SelectItem key="500000-600000" value="500000-600000">$500,000-$600,000</SelectItem>
                  <SelectItem key="600000-700000" value="600000-700000">$600,000-$700,000</SelectItem>
                  <SelectItem key="700000-800000" value="700000-800000">$700,000-$800,000</SelectItem>
                  <SelectItem key="800000-900000" value="800000-900000">$800,000-$900,000</SelectItem>
                  <SelectItem key="900000-1000000" value="900000-1000000">$900,000-$1,000,000</SelectItem>
                  <SelectItem key="1000000-2000000" value="1000000-2000000">$1,000,000-$2,000,000</SelectItem>
                  <SelectItem key="2000000-3000000" value="2000000-3000000">$2,000,000-$3,000,000</SelectItem>
                </Select>
                <Button className="text-default-800 font-bold font-nasa h-full" variant="solid" color="primary" radius="full" startContent={<Icon icon="mdi:search" className="w-6 h-6" />}>
                  Search
                </Button>
              </div>
            </div>
          </Card>
        </div>  
    )
  }