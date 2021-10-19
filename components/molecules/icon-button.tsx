import { BackgroundColor, IconColor } from "../../styles/color";
// import { IconType, Icon } from "../atoms/icon";
import { Button } from "../atoms/button";
import { VFC } from "react";
import { Icon } from "../../components/atoms/icon";

export type IconButtonPropType = {
  onClick: () => void;
  // iconType: IconType;
  height?: string;
  backgroundColor?: BackgroundColor;
  iconColor?: IconColor;
  iconImage: string;
  className?: string;
  disabled?: boolean;
  iconHeight?: `${number}px`;
};

export const IconButton: React.VFC<IconButtonPropType> = ({
  onClick,
  // iconType,
  height,
  backgroundColor,
  iconColor,
  iconImage,
  className,
  disabled,
  iconHeight,
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <Button
      className={className}
      onClick={handleClick}
      backgroundColor={backgroundColor}
    >
      検索
      {/* <Icon source={{ uri: iconImage }} /> */}
    </Button>
  );
};
