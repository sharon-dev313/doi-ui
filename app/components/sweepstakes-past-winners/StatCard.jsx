

const StatCard = ({value, label, icon , right}) => {
  return (
     <div className="bg-lightblue/10 rounded-3xl p-8 flex items-center gap-6 transition-transform hover:scale-[1.02] duration-300 flex-1">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm text-doiblue shrink-0">
            {icon}
        </div>
        <div>
            <p className={`${right ? "text-2xl" : "text-4xl" }  font-nasa text-gray-900`}>{value}</p>
            <p className={` ${right ? "text-default-500" : "text-default-600"}  text-lg font-medium`}>{label}</p>
        </div>
    </div>
  )
}

export default StatCard
