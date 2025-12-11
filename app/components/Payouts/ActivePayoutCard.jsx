import { Button } from "@heroui/react";

const ActivePayoutCard = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-6  flex flex-col h-full">
      <div className="flex justify-start gap-5 items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>
        <span className="px-3 py-1 bg-success/20 text-success text-xs font-semibold rounded-full">
          {data.status}
        </span>
      </div>
      <p className="text-xs text-default-500 mb-6 leading-relaxed wrap-break-word">
        Payout for {data.hash.slice(0, 20)}... on contract
        {data.contract.slice(0, 20)}...
      </p>
      <div className="space-y-2 mb-4 text-sm font-medium">
        <div className="flex justify-between items-center">
          <span className="text-default-500">Daily</span>
          <span className="text-doiblue font-nasa">{data.daily}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-500">Started</span>
          <span className="text-default-900">{data.started}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-500">Next payout</span>
          <span className="text-default-900">{data.nextPayout}</span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-default-900 font-semibold">Progress</span>
          <span className="text-default-900">
            {data.progress} / {data.totalDays} Day
          </span>
        </div>
      </div>
      <div className="h-3 w-full bg-gray-100 rounded-full mb-6 overflow-hidden">
        <div 
        className="h-full bg-lightblue/40 rounded-full transition-all duration-300" 
        style={{ width: `${(data.progress / data.totalDays) * 100}%` }}
        />
      </div>
      <div className="bg-lightblue/20 rounded-2xl p-6 mb-6">
        <div className="text-default-700 text-sm font-medium mb-4">
          Claimable Amount
        </div>
        <div className="text-3xl font-nasa text-default-900 mb-1">
          {data.claimableAmount}
        </div>
        <div className="text-xs text-default-600 font-medium">
          available to claim
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-lightgraycard rounded-3xl p-5">
          <div className="text-black text-sm  mb-6">Claimed</div>
          <div className="text-xl font-bold text-default-900 mb-1">
            {data.claimedDays} days
          </div>
          <div className="text-xs text-default-500 font-medium">
            {data.claimedAmount}
          </div>
        </div>
        <div className="bg-lightblue/10 rounded-3xl p-5">
          <div className="text-default text-sm  mb-6">Remaining</div>
          <div className="text-xl font-nasa text-default-900 mb-1">
            {data.remainingDays} Day
          </div>
          <div className="text-xs text-deafult-900 font-medium">
            {data.remainingAmount}
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Button className="w-full bg-doiblue  font-nasa text-black rounded-2xl text-md h-12 ">
          Claim Payout
        </Button>
      </div>
    </div>
  );
};

export default ActivePayoutCard;
