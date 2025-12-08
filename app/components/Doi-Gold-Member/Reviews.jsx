import AvatarGroups from "../ui/AvatarGroups";
const Reviews = ({ avatar, text }) => {
  return (
    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full border border-white/10">
      <div className="relative px-5 py-2">
        <AvatarGroups avatarNum={avatar} />
      </div>
      <span className="text-sm font-medium text-white">{text}</span>
    </div>
  );
};

export default Reviews;
