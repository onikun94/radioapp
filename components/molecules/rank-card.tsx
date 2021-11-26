import styled from "@emotion/styled";
import React, { VFC } from "react";
import { colors } from "../../styles/color";
import { Typography } from "../atoms/typography";

export type RankCardPropType = {
  onClick: () => void;
  cardKey: number;
  maintext1: string;
  height?: number;
};

export const RankCard: VFC<RankCardPropType> = ({
  onClick,
  cardKey,
  maintext1,
  height,
}) => {
  return (
    <Container key={cardKey} onClick={onClick} height={height}>
      <SideText>
        <MainText>
          <Typography text={maintext1} type="20bold" />
        </MainText>
      </SideText>
    </Container>
  );
};

const Container = styled.div<{ height: number }>((props) => ({
  // display: "table-cell",
  cursor: "pointer", //カーソルを当てたときの変化
  verticalAlign: "middle",
  backgroundColor: colors.background.alphaPrimary,
  ":hover": { backgroundColor: colors.background.dark },
  margin: "15px 5px",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
  width: "400px",
  height: `${props.height}px` ?? "300px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: ".3s",
}));

const SideText = styled.div({
  // width: "80%",
  textAlign: "center",
  display: "block",
});

const MainText = styled.div({
  padding: "10px",
});
