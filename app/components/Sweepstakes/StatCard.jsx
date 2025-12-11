import { Card, CardBody, AvatarGroup, Avatar } from "@heroui/react";
const StatCard = ({ statText, statIcon, avatars, className }) => {
  return (
    <Card
      className={`${className} bg-lightgraycard rounded-3xl p-4 flex flex-row items-center justify-center gap-3  border-none shadow-none`}
    >
      <CardBody className="p-0 flex-row items-center justify-center gap-3 overflow-hidden">
        {statIcon && (
          <div className="flex items-center justify-center">{statIcon}</div>
        )}
        {avatars && (
          <AvatarGroup isBordered max={4} size="sm">
            {avatars.map((url, idx) => (
              <Avatar key={idx} src={url} className="w-9 h-9" />
            ))}
          </AvatarGroup>
        )}
        <p className="text-default-700 font-nasa text-md">{statText}</p>
      </CardBody>
    </Card>
  );
};

export default StatCard;
