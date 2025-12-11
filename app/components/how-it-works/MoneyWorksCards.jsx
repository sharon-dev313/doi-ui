const MoneyWorksCards = ({ icon, heading, paragraph }) => {
  return (
    <div className="bg-lightgraycard rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 ">
      <div className="shrink-0">
        <div className="w-14 h-14 rounded-full bg-lightblue/10 p-3 flex items-center justify-center text-xl">
          <img src={icon} alt={heading} />
        </div>
      </div>
      <div>
        <h3 className="text-lg  text-black mb-1">{heading}</h3>
        <p className="text-md text-default-600 leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
};

export default MoneyWorksCards;
