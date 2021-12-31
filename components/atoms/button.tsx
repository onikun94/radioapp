import { ClassNamesArg } from "@emotion/css";
import styled from "@emotion/styled";
import { Children, VFC } from "react";
import { BaseColor, BackgroundColor, colors } from "../../styles/color";

const DEFAULT_BACKGROUND_COLOR: BackgroundColor = "alphaPrimary";
const DEFAULT_TEXT_COLOR: BaseColor = "gray";
const DEFAULT_BUTTON_HEIGHT = "36px";

// export type ButtonPropType = {
//   backgroundColor?: BackgroundColor;
//   textColor?: BaseColor;
//   className?: string;
//   onClick: () => void;
//   children: JSX.Element;
//   height?: string;
// };

// export const Button: React.VFC<ButtonPropType> = ({
//   backgroundColor,
//   textColor,
//   className,
//   onClick,
//   children,
//   height,
// }) => {
//   return (
//     <ButtonContainer
//       backgroundColor={backgroundColor}
//       onClick={onClick}
//       textColor={textColor}
//       className={className}
//       height={height ?? DEFAULT_BUTTON_HEIGHT}
//     >
//       {children}
//     </ButtonContainer>
//   );
// };

// const ButtonContainer = styled.button<{
//   backgroundColor?: BackgroundColor;
//   textColor?: BaseColor;
//   height: string;
// }>((props) => ({
//   cursor: "pointer",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor:
//     colors.background[props.backgroundColor ?? DEFAULT_BACKGROUND_COLOR],
//   borderRadius: "4px",
//   border: "none",
//   color: colors.base[props.textColor ?? DEFAULT_TEXT_COLOR],
//   height: props.height,
//   width: "100%",
//   boxSizing: "border-box",
//   fontSize: "16px",
//   letterSpacing: ".05em",
//   outline: "none",
//   fontWeight: "bold",
// }));
export type ButtonType = {
  backgroundColor?: BackgroundColor;
  textColor?: BaseColor;
  className?: string;
  children: JSX.Element;
  onClick: () => void;
};

export const Button: VFC<ButtonType> = ({
  backgroundColor,
  textColor,
  children,
  onClick,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{
  backgroundColor?: BackgroundColor;
  textColor?: BaseColor;
}>((props) => ({
  cursor: "pointer", //カーソルを当てたときの変化
  display: "flex", //文字の位置
  justifyContent: "center",
  alignItems: "center",
  margin: "4px",
  marginBottom: "8px",
  color: colors.base[props.textColor ?? DEFAULT_TEXT_COLOR],
  height: "40px",
  width: "100px", //横幅
  borderRadius: "4px", //縁の丸み
  borderColor: colors.border.cardOutline,
  borderWidth: "1px",
  boxSizing: "border-box",
  fontsize: "16px",
  backgroundColor:
    colors.background[props.backgroundColor ?? DEFAULT_BACKGROUND_COLOR],
}));
