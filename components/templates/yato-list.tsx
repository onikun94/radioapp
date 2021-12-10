import React, { VFC } from "react";
import { YatoType } from "../../types/yato";

import { handleUser } from "../../lib/handler";
import styled from "@emotion/styled";
import { colors } from "../../styles/color";
import { Header } from "../molecules/header";
import { PostCard } from "../molecules/post-card";
import Router, { useRouter } from "next/router";
import { send } from "process";
import { DataLink } from "../atoms/data-link";

export type YatoListPropType = {
  yatoInfo: YatoType[];
};

export const YatoList: VFC<YatoListPropType> = ({ yatoInfo }) => {
  const router = useRouter();

  const dupArray = Array.from(
    yatoInfo
      .reduce(
        (map, currentitem) => map.set(currentitem.user, currentitem),
        new Map()
      )
      .values()
  );

  return (
    <Container>
      <CardContainer>
        {dupArray.map((info) => (
          <div key={info.id}>
            <PostCard
              onClick={() =>
                router.push({
                  pathname: "users/[name]",
                  query: { name: info.user },
                })
              }
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

const Container = styled.body({
  // display: "flex",
  // maxWidth: "100%",
  // flexDirection: "column",
  // flexWrap: "wrap",
  backgroundColor: colors.background.primary,
});

const CardContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  // width: "1000",
});
