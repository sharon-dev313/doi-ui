import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import InfoCard from "./InfoCard";
import ProgressBar from "./ProgressBar";

const InvestmentDetails = ({ data }) => {
  const [amount, setAmount] = useState("");

  const calculateEarnings = (amt) => {
    const val = parseFloat(amt);
    if (isNaN(val)) return 0;
    const earnings =
      (val * (data.investment.apy / 100) * data.investment.lockPeriodDays) /
      365;
    return earnings.toFixed(2);
  };

  const displayEarnings = amount ? calculateEarnings(amount) : "0";

  return (
    <div className="bg-success/7 p-8 rounded-3xl h-full ">
      <SectionTitle title="Investment" highlight="Details" />
      <p className="text-default-600 mb-8 text-lg max-w-lg">
        {data.investment.description}
      </p>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <InfoCard
          label="Total Value"
          value={`$${data.investment.totalValue.toLocaleString()}`}
        />
        <InfoCard label="APY" value={`${data.investment.apy}%`} />
        <InfoCard
          label="Min Investment"
          value={`$${data.investment.minInvestment}`}
        />
        <InfoCard
          label="Lock Period"
          value={`${data.investment.lockPeriodDays} Days`}
        />
      </div>

      {/* Progress */}
      <div className="bg-white p-6 rounded-3xl  mb-6">
        <ProgressBar
          current={data.investment.currentRaised}
          total={data.investment.totalValue}
        />
      </div>

      {/* Investment Inputs */}
      <div className="mb-6">
        <input
          type="number"
          placeholder="Investment Amount"
          className="w-full bg-white p-5 rounded-3xl outline-none text-default-700 placeholder-gray-300  focus:ring-2 focus:ring-doiblue transition-all border border-transparent"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Earnings Estimate */}
      <div className="bg-white rounded-3xl p-8 mb-6 text-center shadow-sm">
        <div className="text-black text-lg mb-3">Estimated Earnings</div>
        <div className="text-4xl font-bold text-doiblue mb-3 font-sans">
          ${displayEarnings} USDT
        </div>
        <p className="text-lg text-default-700">
          You will earn this amount in {data.investment.lockPeriodDays} days.
          <br />
          Based on {data.investment.apy}% APY
        </p>
      </div>

      {/* Action Button */}
      <button className="w-full bg-doiblue font-nasa text-black py-2 rounded-3xl text-xl ">
        Invest Now
      </button>
    </div>
  );
};

export default InvestmentDetails;
