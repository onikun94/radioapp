import styled from "@emotion/styled";
import { VFC } from "react";
import { Header } from "../molecules/header";

export type DetailContainerPropType = {};

export const DetailContainer = () => {
  return (
    <Container>
      <Header
        headerText="投稿内容"
        colorType="light"
        textType="16bold"
      ></Header>
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});
