import styled from "@emotion/styled";
import Link from "next/link";
import React, { VFC } from "react";
import {
  BackgroundColor,
  BaseColor,
  colors,
  TextColor,
} from "../../styles/color";
import { Typography } from "./typography";

export type DataLinkType = {
  backgroundColor?: BackgroundColor;
  textColor?: TextColor;
  contents: string;
  linkdata: string;
};
export const DataLink: VFC<DataLinkType> = ({
  backgroundColor,
  textColor,
  linkdata,
  contents,
}) => {
  return (
    <div>
      <Link href={linkdata}>
        <DataLinkContainer>
          <Typography
            text={contents}
            type="16normal"
            color={textColor}
          ></Typography>
        </DataLinkContainer>
      </Link>
    </div>
  );
};

const DataLinkContainer = styled.p<{
  backgroundColor?: BackgroundColor;
  textColor?: BaseColor;
}>((props) => ({
  cursor: "pointer",
  ":hover": { backgroundColor: colors.background.accent },
  justifyContent: "center",
  alignItems: "center",
  color: colors.base[props.textColor],
  backgroundColor: colors.background[props.backgroundColor],
  borderRadius: "4px",
  padding: "4px",
  margin: "4px",
}));
