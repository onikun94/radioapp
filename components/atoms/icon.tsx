// import styled from "@emotion/styled";
import styled from "@emotion/primitives";
import { url } from "inspector";
import { VFC } from "react";
import { IconColor, colors } from "../../styles/color";

const DEFAULT_COLOR: IconColor = "primary";
const DEFUALT_HEIGHT = "30px";
const DEFAULT_WIDTH = "60px";

// export type IconType = "search" | "noImage";

// export type IconPropType = {
//   type: IconType;
//   color?: IconColor;
//   className?: string;
//   width?: `${number}px`;
//   height?: `${number}px`;
// };
// const iconNameMap: { [key in IconType]: string } = {
//   search: "search.svg",
//   noImage: "noImage.svg",
// };
// export const Icon: React.VFC<IconPropType> = ({
//   color,
//   type,
//   className,
//   height,
//   width,
// }) => {
//   const IconComponent =
//     require(`../../assets/icon/${iconNameMap[type]}`).default;

//   const StyledIcon = styled(IconComponent)(() => ({
//     fill: colors.icon[color ?? DEFAULT_COLOR],
//     height: height ?? DEFUALT_HEIGHT,
//     width: width ?? DEFAULT_WIDTH,
//   }));

//   return <StyledIcon className={className} />;
// };
export type IconPropType = {
  width?: `${number}px`;
  height?: `${number}px`;
};

export const Icon: VFC<IconPropType> = styled.Image(({ width, height }) => ({
  // src: "../../assets/icon/search.svg",
  padding: "40px",
  height: height ?? DEFUALT_HEIGHT,
  width: width ?? DEFAULT_WIDTH,
  fill: DEFAULT_COLOR,
}));
