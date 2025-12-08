import Card_List from "../Doi-Gold-Member/Card_List";
const Benefits_List = ({ title, paragraph, list }) => {
  return (
    <div className="bg-doiorange p-4 md:p-8 lg:p-16 min-h-screen flex flex-col items-center justify-center">
      <div className="w-7xl  py-10 flex gap-1 justify-between items-center">
        <h1 className="text-5xl">{title}</h1>
        <p className="ps-36 text-xl leading-7 w-2xl">{paragraph}</p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {/* Row 1 */}
        {/* Card 1 */}
        {list?.map((item) =>
          // IMAGE BLOCK
          item.image_url ? (
            <div
              key={item.id}
              className={`
          relative min-h-[300px] rounded-[2rem] overflow-hidden shadow-lg group
          ${item.large_col ? "lg:col-span-2" : ""}
          ${item.small_col ? "lg:col-span-1" : ""}
        `}
            >
              <img
                src={item.image_url}
                alt="Benefits Image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            // CARD BLOCK
            <Card_List
              key={item.id}
              icon={item.icon}
              title={item.title}
              paragraph={item.paragraph}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Benefits_List;
