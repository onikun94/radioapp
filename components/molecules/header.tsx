import React from "react";
import Link from "next/link";
import { Typography, TypographyType } from "../atoms/typography";
import styled from "@emotion/styled";
import { colors } from "../../styles/color";
import { DataLink } from "../atoms/data-link";

type HeaderColorType = "light" | "dark";

export type HeaderPropType = {
  headerText: string;
  colorType: HeaderColorType;
  textType?: TypographyType;
  className?: string;
};
const DEFAULT_TEXT_TYPE: TypographyType = "20bold";

export const Header: React.VFC<HeaderPropType> = ({
  headerText,
  colorType,
  textType,
  className,
}) => {
  return (
    <HeaderContainer className={className} colorType={colorType}>
      <HeaderText>
        <Typography
          text={headerText}
          type={textType ?? DEFAULT_TEXT_TYPE}
          color={colorType === "dark" ? "white" : "primary"}
        />
      </HeaderText>
      <LinkContainer>
        <DataLink linkdata={"/"} contents="ホーム" textColor="white" />
        <DataLink linkdata={"/users"} contents="ユーザ一覧" textColor="white" />
        <DataLink linkdata={"/search"} contents="探す" textColor="white" />
        <DataLink
          linkdata={"/ranking"}
          contents="ランキング"
          textColor="white"
        />
      </LinkContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ colorType: HeaderColorType }>(
  (props) => ({
    backgroundColor:
      props.colorType === "dark"
        ? colors.background.dark
        : colors.background.primary,
    padding: "30px",
    // display: "flex",
    justifyContent: "left",
    // alignItems: "left",
    borderBottom: `2px solid ${colors.border.gray}`,
  })
);

const LinkContainer = styled.div({
  display: "flex",
  float: "right",
  // justifyContent: "right",
  // flexWrap: "wrap",
});

const HeaderText = styled.div({
  float: "left",
  display: "flex",
  // flexWrap: "wrap",
});
