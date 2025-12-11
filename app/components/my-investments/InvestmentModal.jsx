import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
const InvestmentModal = ({ isOpen, onOpenChange, data }) => {
  const Single_data = data.length > 0 ? data[0] : data;

  const statusData = (status) => {
    switch (status) {
      case "Active":
        return (
          <span className="bg-success/10 text-success text-sm  px-3 py-1 rounded-full">
            {status}
          </span>
        );
      case "Completed":
        return (
          <span className="bg-warning/10 text-warning text-sm  px-3 py-1 rounded-full">
            {status}
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="5xl"
      classNames={{
        base: "bg-white rounded-4xl",
        closeButton:
          "top-4 right-4 text-default-500 hover:bg-default-100 rounded-full p-2",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 pb-0 pt-8 px-8">
              <h2 className="text-2xl font-nasa text-default-900">
                Investment Statement
              </h2>
            </ModalHeader>
            <ModalBody className="pb-8 px-8">
              {/* Header Info */}
              <div className="flex items-center gap-3 mt-2 mb-2">
              
                <span className="text-default-500 text-sm">
                  Started: {Single_data?.investmentDate}
                </span>
                  {statusData(Single_data?.status)}
              </div>
              <p className="text-default-600 text-sm mb-8 max-w-sm">
                {Single_data?.totalEarningLabel}
              </p>
              {/* Main Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Available to Claim Card */}
                <div className="bg-primary rounded-4xl p-6 text-black relative overflow-hidden">
                  <div className="relative z-10 h-full flex flex-col justify-between min-h-36">
                    <span className="text-sm font-medium opacity-90">
                      Available to Claim
                    </span>
                    <div>
                      <div className="text-4xl font-nasa mb-1">
                        ${Single_data?.available_to_claim}
                      </div>
                      <div className="text-sm ">
                        Last claim Date: {Single_data?.last_claim_date}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Total Payouts Card */}
                <div className="bg-lightgraycard rounded-4xl p-6 text-default-900 ">
                  <div className="h-full flex flex-col justify-between min-h-36">
                    <span className="text-sm font-medium text-default-600">
                      Total payouts
                    </span>
                    <div>
                      <div className="text-3xl font-nasa mb-1">
                        {Single_data?.total_payouts_day} days
                      </div>
                      <div className="text-xs text-default-500">
                        ${Single_data?.total_payouts} Total
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Secondary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Daily Payout */}
                <div className="bg-success/10 rounded-3xl p-5">
                  <div className="h-full flex flex-col justify-between min-h-28">
                    <span className="text-xs font-medium text-default-600">
                      Daily payout
                    </span>
                    <div>
                      <div className="text-xl font-nasa text-default-900 mb-0.5">
                        ${Single_data?.daily_payout}
                      </div>
                      <div className="text-xs text-default-500">
                        Daily payout
                      </div>
                    </div>
                  </div>
                </div>
                {/* Remaining Payouts */}
                <div className="bg-lightgraycard  rounded-3xl p-5">
                  <div className="h-full flex flex-col justify-between min-h-28">
                    <span className="text-xs font-medium text-default-600">
                      Remaining payouts
                    </span>
                    <div>
                      <div className="text-xl font-nasa text-gray-900 mb-0.5">
                        {Single_data?.remanining_payout_day} days
                      </div>
                      <div className="text-xs text-default-500">
                        ${Single_data?.remanining_payout_available} Available
                      </div>
                    </div>
                  </div>
                </div>
                {/* Claimed Payouts */}
                <div className="bg-warning/20 rounded-3xl p-5">
                  <div className="h-full flex flex-col justify-between min-h-28">
                    <span className="text-xs font-medium text-default-600">
                      Claimed payouts
                    </span>
                    <div>
                      <div className="text-xl font-bold text-default-900 mb-0.5">
                        {Single_data?.claimed_payout_day} days
                      </div>
                      <div className="text-xs text-default-500">
                        ${Single_data?.claimed_payout_total} Claimed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default InvestmentModal;
