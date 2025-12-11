const PayoutCard = ({ item }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between h-48  ${item.className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center w-15 h-15 p-3 bg-white rounded-full shadow-sm text-doiblue">
          <img src={item.icon} alt={item.title} />
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-medium text-default-900 mb-1">
          {item.value}
        </h3>
        <p className="text-sm font-medium text-default-600">{item.title}</p>
      </div>
    </div>
  );
};

export default PayoutCard;
