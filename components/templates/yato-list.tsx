import React, { VFC } from "react";
import { YatoType } from "../../types/yato";

import { handleUser } from "../../lib/handler";
import styled from "@emotion/styled";
import { colors } from "../../styles/color";
import { Header } from "../molecules/header";
import { PostCard } from "../molecules/post-card";
import Router, { useRouter } from "next/router";
import { send } from "process";

export type YatoListPropType = {
  yatoInfo: YatoType[];
};

export const YatoList: VFC<YatoListPropType> = ({ yatoInfo }) => {
  const router = useRouter();
  // ここにクリックでユーザ名をクエリに渡す関数を作る
  const sendUsername = (e, user) => {
    e.preve;
    // router.push(`/users/ポストカードクラフトスマン`);
    if (user !== null) {
      router.push(`/users/${user}`);
    } else {
      return null;
    }
  };
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
              onClick={() =>
                router.push({
                  pathname: "users/[namer]",
                  query: { namer: info.user },
                })
              }
              // onClick={handleUser}
              cardKey={info.id}
              thumbnail={info.segment}
              detail1={info.address}
              maintext1={info.user}
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
