import styled from "@emotion/styled";
import { VFC } from "react";
import { BackgroundColor, colors } from "../../styles/color";

// type TextFieldType = "password" | "text";
// type TextAreaType = "textarea";

// type CommonPropType = {
//   value: string;
//   onChange: (text: string) => void;
//   placeholder?: string;
//   backgroundColor?: BackgroundColor;
//   className?: string;
// };

// type TextAreaPropType = {
//   rows: number;
//   type: TextAreaType;
// } & CommonPropType;

// type TextFieldPropType = {
//   type: TextFieldType;
// } & CommonPropType;

// export type TextInputPropType = TextAreaPropType | TextFieldPropType;

// const DEFAULT_BACKGROUND_COLOR: BackgroundColor = "primary";

// export const TextInput: React.VFC<TextInputPropType> = (props) => {
//   let inputElement: React.ReactNode;

//   if (props.type === "textarea") {
//     inputElement = (
//       <TextAreaElement
//         rows={props.rows}
//         value={props.value}
//         placeholder={props.placeholder}
//         className={props.className}
//         backgroundColorType={props.backgroundColor ?? DEFAULT_BACKGROUND_COLOR}
//         onChange={(e) => props.onChange(e.target.value)}
//       />
//     );
//   } else {
//     inputElement = (
//       <TextFieldElement
//         type={props.type}
//         value={props.value}
//         placeholder={props.placeholder}
//         className={props.className}
//         backgroundColorType={props.backgroundColor ?? DEFAULT_BACKGROUND_COLOR}
//         onChange={(e) => props.onChange(e.target.value)}
//       />
//     );
//   }

//   return <>{inputElement}</>;
// };

// const commonStyle = (props: { backgroundColorType: BackgroundColor }) => ({
//   backgroundColor: colors.background[props.backgroundColorType],
//   border: "none",
//   outline: "none",
//   width: "90%",
//   marginRight: "10px",
//   color: colors.text.primary,
//   fontsize: "14px",
//   borderBottom: `1px solid ${colors.base.alphaPrimary}`,
//   padding: "5px",
//   "::placeholder": {
//     color: colors.text.gray,
//     fontSize: "14px",
//   },
//   ":focus": {
//     borderBottom: `1px solid ${colors.base.accent}`,
//   },
//   transition: "0.2s all",
// });

// const TextAreaElement = styled.textarea<{
//   backgroundColorType: BackgroundColor;
// }>((props) => ({
//   ...commonStyle(props),
//   resize: "none",
// }));

// const TextFieldElement = styled.input<{ backgroundColorType: BackgroundColor }>(
//   (props) => ({
//     ...commonStyle(props),
//   })
// );
type TextAreaPropType = {
  onChange: (text: string) => void;
  backgroundColor: BackgroundColor;
  // value: string;
  placeholder: string;
};

export const TextArea: VFC<TextAreaPropType> = ({
  placeholder,
  onChange,
  // value,
  backgroundColor,
}) => {
  return (
    <TextAreaElement
      // value={value} //value指定すると文字打てなくなるけど....
      placeholder={placeholder}
      backgroundColorType={backgroundColor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
const TextAreaElement = styled.textarea<{
  backgroundColorType: BackgroundColor;
}>((props) => ({
  backgroundColor: colors.background[props.backgroundColorType],
  resize: "none",
  border: "none",
  outline: "none",
  width: "200px",
  marginRight: "10px",
  color: colors.text.accent,
  borderBottom: `1px solid ${colors.base.alphaPrimary}`, //下線がつく
  "::placeholder": {
    color: colors.text.gray,
    // fontSize: "14px",
  },
  ":focus": {
    borderBottom: `1px solid ${colors.base.accent}`,
  },
  transition: "0.2s all",
}));
