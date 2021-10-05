import React, { VFC } from "react";
import { YatoType } from "../../types/yato";

import { handleUser } from "../../lib/handler";
import styled from "@emotion/styled";
import { colors } from "../../styles/color";
import { Header } from "../molecules/header";
import { PostCard } from "../molecules/post-card";

export type YatoListPropType = {
  yatoInfo: YatoType[];
};

export const PostList: VFC<YatoListPropType> = ({ yatoInfo }) => {
  return (
    <Container>
      <HeaderContainer>
        <Header
          headerText="shimohuriDatabase"
          colorType="dark"
          textType="24bold"
        ></Header>
      </HeaderContainer>

      <CardContainer>
        {yatoInfo.map((info) => (
          <div key={info.id}>
            <PostCard
              onClick={handleUser}
              cardKey={info.id}
              thumbnail={info.segment}
              detail1={info.on_air}
              detail2={info.address}
              detail3={info.user}
              maintext1={info.contents}
              maintext2={info.answer}
              detail4={info.pt}
              height={400}
            />
          </div>
        ))}
      </CardContainer>
    </Container>
  );
};

const Container = styled.div({
  // display: "flex",
  maxWidth: "100%",
  flexDirection: "column",
  // flexWrap: "wrap",
  backgroundColor: colors.background.primary,
});

const CardContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  // width: "1000",
});

const HeaderContainer = styled.div({});
